import { observable, action, computed } from 'mobx';

import { leadsHelper } from '../helpers';
import { api } from '../services';
import { utils } from '../helpers';

import { filterStore } from './';

class LeadsStore {
  @observable
  leads = [];
  @observable
  loading = false;

  constructor(filterStore) {
    this.filterStore = filterStore;
  }

  @action
  load() {
    this.loading = true;
    this.leads = [];
    const p1 = api('get all fidelity');
    const p2 = api('getLeads');
    return Promise.all([p1, p2])
      .then(([fidelities, leads]) =>
        leads.map(lead => {
          lead.client.fidelityIndex = fidelities[lead.client.id];
          return lead;
        })
      )
      .then(leads => leads.map(leadsHelper.leadMapper))
      .then(leads => this.filterStore.buildIndex(leads)) //build index for full text search
      .then(leads => leads.map(lead => ({ ...lead, weight: leadsHelper.weight(lead) })))
      .then(leads => leads.sort((lead1, lead2) => lead2.weight - lead1.weight))
      .then(leads => {
        this.leads = leads;
        this.loading = false;
      });
  }

  @action
  suspend(leadsToBeSuspended) {
    return api('suspendLeads', leadsToBeSuspended).then(response => {
      if (response.success === true) {
        this.leads = this.leads.map(lead => {
          if (leadsToBeSuspended.includes(lead.id)) {
            lead.status = 'suspended';
            return lead;
          } else {
            return lead;
          }
        });
      }
    });
  }

  @computed
  get filtered() {
    const statusFilter = lead => lead.status === (this.filterStore.status || lead.status);

    const malfunctionsOrMaintenancesFilter = lead => {
      let conditions = [];
      if (this.filterStore.maintenance === true) {
        conditions.push(lead => lead.daysToMOrange === true || lead.daysToMRed === true);
      }
      if (this.filterStore.malfunctions.length > 0) {
        /* conditions.push(lead => this.filterStore.malfunctions.includes(lead.malfunctionLevel)); //*/
        this.filterStore.malfunctions.forEach(m => conditions.push(lead => !!lead[`with${utils.ucFirst(m)}`]));
      }
      if (conditions.length > 0) {
        return conditions.reduce((result, cndFn) => (cndFn && cndFn.apply(null, [lead])) || result, false);
      }
      return true;
    };

    let leads = this.leads.filter(statusFilter).filter(malfunctionsOrMaintenancesFilter);

    if (this.filterStore.searching) {
      leads = leads.filter(lead => this.filterStore.isLeadMatching(lead)).sort((lead1, lead2) => this.filterStore.sortByScore(lead1, lead2));
    }

    return leads;
  }
}

export default new LeadsStore(filterStore);
