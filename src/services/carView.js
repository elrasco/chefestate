import K from '../constants';
import restHelpers from '../helpers/restHelper';

const getAlarmsFn = leadId => restHelpers.withBearer.get(`${K.API_URL}/alarms/leads/${leadId}`, {});

const getCarFn = carId => restHelpers.withBearer.get(`${K.API_URL}/cars/${carId}`, {});

const getDtcsFn = leadId => restHelpers.withBearer.get(`${K.API_URL}/dtcs/leads/${leadId}`, {});

const getLeadFn = carId => restHelpers.withBearer.get(`${K.API_URL}/leads/cars/${carId}`, {});

const getMaintenancesFn = leadId => restHelpers.withBearer.get(`${K.API_URL}/maintenances/leads/${leadId}`, {});

const sendNoteFn = (carId, note) => restHelpers.withBearer.post(`${K.API_URL}/notes`, { data: { note, carId } });

export default {
  getAlarms: getAlarmsFn,
  getCar: getCarFn,
  getDtcs: getDtcsFn,
  getLead: getLeadFn,
  getMaintenances: getMaintenancesFn,
  sendNote: sendNoteFn
};
