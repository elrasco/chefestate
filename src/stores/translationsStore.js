import { observable, action } from 'mobx';

import { cloneDeep, at } from 'lodash';

import en from '../translations/en.json';
import it from '../translations/it.json';

const AVAILABLES = { it, en };

class TranslationsStore {
  @observable
  translation = it;

  translate(key) {
    if (this.translation) {
      try {
        return at(this.translation, key)[0] || key;
      } catch (e) {
        console.error(`${key} not found`);
        return key;
      }
    }
  }

  @action
  setLocale(locale) {
    this.translation = Object.assign({}, cloneDeep(it), AVAILABLES[locale]);
  }
}

export default new TranslationsStore();
