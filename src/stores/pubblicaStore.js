import { cloneDeep } from 'lodash';
import { observable, action } from 'mobx';

class PubblicaStore {
  @observable annuncio = {
    immobile: {
      planimetria: {
        dehor: {
          presente: 0
        },
        piani: []
      }
    },
    cucina: {},
    soldi: {},
    foto: []
  };

  constructor() {}

  @action updateAnnuncio(annuncio) {
    this.annuncio = annuncio;
  }

  @action updateDehor(dehor) {
    this.annuncio.immobile.planimetria.dehor = dehor;
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }

  @action addPiano() {
    let id = `piano_${new Date().getTime()}`;
    this.annuncio.immobile.planimetria.piani.push({ id, sale: { presente: true } });
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }

  @action eliminaPiano(i) {
    this.annuncio.immobile.planimetria.piani.splice(i, 1);
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }

  @action updatePiano(pianoupdated) {
    const i = this.annuncio.immobile.planimetria.piani.findIndex(piano => piano.id === pianoupdated.id);
    this.annuncio.immobile.planimetria.piani.splice(i, 1, pianoupdated);
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }
}

export default new PubblicaStore();
