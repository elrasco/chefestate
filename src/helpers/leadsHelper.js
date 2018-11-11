/*eslint radix: ["error", "as-needed"]*/

import { differenceInHours } from 'date-fns';
import { round } from 'lodash';
import moment from 'moment';

const weight = lead => {
  let total = 0;
  if (lead.withAlarms) {
    total += 200;
  }
  if (lead.batteryRed === true) {
    total += 150;
  }
  if (lead.withDtcsRed) {
    total += 100;
  }
  if (lead.daysToMRed === true) {
    total += 50;
  }
  if (lead.batteryOrange === true) {
    total += 40;
  }
  if (lead.withDtcsOrange) {
    total += 30;
  }
  if (lead.daysToMOrange) {
    total += 30;
  }

  total += lead.alarms.filter(alarm => alarm.present === true).length;
  total += lead.dtcs.filter(dtc => dtc.severity === 'red').length * 0.7;
  total += lead.dtcs.filter(dtc => dtc.severity === 'orange').length * 0.6;
  total += lead.dtcs.length * 0.5;
  total += (differenceInHours(new Date(), new Date(lead.updatedAt)) / 24) * 0.5;
  switch (lead.status) {
    case 'action':
      return total * 120;
    case 'notified':
      return total * 100;
    case 'sent':
      return total * 90;
    case 'suspended':
      return total * 3;
    case 'booked':
      return total * 2;
    case 'discarded':
      return total * 1;
    default:
      return total;
  }
};

const leadMapper = lead => {
  const withAlarms = lead.alarms.filter(alarm => alarm.present === true).length > 0;
  const withDtcsRed = lead.dtcs.findIndex(dtc => dtc.severity === 'red') > -1;
  const withDtcsOrange = lead.dtcs.findIndex(dtc => dtc.severity === 'orange') > -1;

  const malfunctionLevel = withAlarms ? 'alarms' : withDtcsRed ? 'dtcsRed' : withDtcsOrange ? 'dtcsOrange' : '';

  lead.dtcs = lead.dtcs.sort((dtc1, dtc2) => {
    if (dtc1.severity === 'red' && dtc2.severity !== 'red') {
      return -1;
    }
    if (dtc1.severity !== 'red' && dtc2.severity === 'red') {
      return 1;
    }
    return 0;
  });

  lead.alarms = lead.alarms.sort((alarm1, alarm2) => {
    if (alarm1.present === true && alarm2.present === false) {
      return -1;
    } else if (alarm1.present === false && alarm2.present === true) {
      return 1;
    }
    return 0;
  });

  lead.daysToM = lead.maintenances.length > 0 ? moment().diff(moment(lead.maintenances[0].date), 'days') : '';

  const daysToMGreen = Number.isInteger(lead.daysToM) && parseInt(lead.daysToM) <= -10;
  const daysToMRed = Number.isInteger(lead.daysToM) && parseInt(lead.daysToM) >= -5;
  const daysToMOrange = Number.isInteger(lead.daysToM) && !daysToMGreen && !daysToMRed;

  const battery = lead.car.battery ? round(lead.car.battery.value / 1000, 1) : undefined;
  lead.car.battery = battery;

  const batteryGreen = Number.isFinite(battery) && parseFloat(battery) >= 11;
  const batteryRed = Number.isFinite(battery) && parseFloat(battery) <= 8;
  const batteryOrange = Number.isFinite(battery) && !batteryGreen && !batteryRed;

  const withLowBattery = batteryRed || batteryOrange;

  return { ...lead, malfunctionLevel, withAlarms, withDtcsRed, withDtcsOrange, daysToMGreen, daysToMOrange, daysToMRed, batteryGreen, batteryOrange, batteryRed, withLowBattery };
};

const maintenanceColor = daysLeft => {
  const daysToMGreen = Number.isInteger(daysLeft) && parseInt(daysLeft) <= -10;
  const daysToMRed = Number.isInteger(daysLeft) && parseInt(daysLeft) >= -5;
  const daysToMOrange = Number.isInteger(daysLeft) && !daysToMGreen && !daysToMRed;
  if (daysToMGreen) {
    return 'green';
  }
  if (daysToMRed) {
    return 'red';
  }
  if (daysToMOrange) {
    return 'orange';
  }
};

const sortByWeight = (lead1, lead2) => lead2.weight - lead1.weight;

export default {
  weight,
  leadMapper,
  maintenanceColor,
  sortByWeight
};
