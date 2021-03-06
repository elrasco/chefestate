import { observable, action, computed } from 'mobx';
import moment from 'moment';

const en = require('date-fns/locale/en');
const it = require('date-fns/locale/it');

const DEFAULT_LOADING_MESSAGE = 'loading...';

class CommonStore {
  @observable
  longDateFormat;

  @observable loading = false;
  @observable loadingMessage = DEFAULT_LOADING_MESSAGE;

  @action
  setLongDateFormat(longDateFormat) {
    /**
     * L:"MM/DD/YYYY"
     * LL:"MMMM D, YYYY"
     * LLL:"MMMM D, YYYY h:mm A"
     * LLLL:"dddd, MMMM D, YYYY h:mm A"
     * LT:"h:mm A"
     * LTS:"h:mm:ss A"
     */
    this.longDateFormat = longDateFormat;
  }

  @computed
  get dateFnsLocale() {
    return moment.locale() === 'en' ? en : it;
  }

  @computed
  get momentLocale() {
    return moment.locale();
  }

  @action startLoading(loadingMessage) {
    this.loading = true;
    if (loadingMessage) {
      this.loadingMessage = loadingMessage;
    }
  }

  @action endLoading() {
    this.loading = false;
    this.loadingMessage = DEFAULT_LOADING_MESSAGE;
  }
}

export default new CommonStore();
