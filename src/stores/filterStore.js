/*eslint radix: ["error", "as-needed"]*/

import { observable, action } from 'mobx';
import lunr from 'lunr';

import { leadsHelper } from '../helpers';

class FilterStore {
  @observable
  status = '';
  @observable
  malfunctions = [];
  @observable
  maintenance = false; //true means I want to filter, false means I don't want to filter
  @observable
  textToSearch;
  @observable
  searching = false;

  @observable
  searchResults = []; //this array will be filled by the full text search

  buildIndex(leads) {
    this.index = lunr(function() {
      this.field('client.fullName');
      this.field('car.plate');
      this.field('car.make.descrizione');
      this.field('car.model.descrizione');
      this.ref('id');
      leads.forEach(lead => {
        lead['client.fullName'] = lead.client.fullName;
        lead['car.plate'] = lead.car.plate;
        lead['car.make.descrizione'] = lead.car.make.descrizione;
        lead['car.model.descrizione'] = lead.car.model.descrizione;
        this.add(lead);
      });
    });
    return leads;
  }

  @action
  search() {
    this.resetFilters();
    this.searching = true;
    let matches = this.index.search(this.textToSearch);
    this.searchResults = matches.map(match => ({ ref: parseInt(match.ref), score: match.score }));
  }

  sortByScore(lead1, lead2) {
    if (this.searching) {
      const scoreOf = lead => {
        const searchResult = this.searchResults.find(searchResult => searchResult.ref === lead.id);
        return searchResult.score;
      };
      return scoreOf(lead2) - scoreOf(lead1);
    }
    return 0;
  }

  /**
   *
   * @param {*} lead
   */
  isLeadMatching(lead) {
    return this.searching === false || this.searchResults.map(result => result.ref).includes(lead.id);
  }

  @action
  setStatus(status) {
    this.resetSearch();
    this.status = status === this.status ? '' : status;
  }

  @action
  setMalfunction(malfunction) {
    this.resetSearch();
    const newArray = this.malfunctions.slice();
    const index = newArray.findIndex(m => m === malfunction);
    if (index > -1) {
      newArray.splice(index, 1);
    } else {
      newArray.splice(-1, 0, malfunction);
    }
    this.malfunctions = newArray;
  }

  @action
  toggleMaintenance() {
    this.resetSearch();
    this.maintenance = !this.maintenance;
  }

  @action
  resetFilters() {
    this.maintenance = false;
    this.malfunctions = [];
    this.status = '';
  }

  @action
  resetSearch() {
    this.textToSearch = '';
    this.searching = false;
    this.leadIds = [];
  }
}

export default new FilterStore();
