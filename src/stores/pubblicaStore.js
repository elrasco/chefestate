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
    this.annuncio.immobile.planimetria.piani.push({
      id,
      sala: { presente: false, dettaglioLocali: [] },
      toilette: { presente: false, dettaglioLocali: [] },
      terrazza: { presente: false, dettaglioLocali: [] },
      toiletteDip: { presente: false, dettaglioLocali: [] },
      magazzino: { presente: false, dettaglioLocali: [] },
      spogliatoio: { presente: false, dettaglioLocali: [] },
      localetecnico: { presente: false, dettaglioLocali: [] },
      cucina: { presente: false, dettaglioLocali: [] },
      cantina: { presente: false, dettaglioLocali: [] },
      ufficio: { presente: false, dettaglioLocali: [] }
    });
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }

  @action updatePiano(pianoupdated) {
    const i = this.annuncio.immobile.planimetria.piani.findIndex(piano => piano.id === pianoupdated.id);
    this.annuncio.immobile.planimetria.piani.splice(i, 1, pianoupdated);
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }

  @action eliminaPiano(i) {
    this.annuncio.immobile.planimetria.piani.splice(i, 1);
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }

  @action addDettaglioLocale(idpiano, tipo, attributes) {
    const piano = this.annuncio.immobile.planimetria.piani.find(piano => piano.id === idpiano);
    let id = `dettaglio_${new Date().getTime()}`;
    piano[tipo].dettaglioLocali.push({ id, ...attributes });
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }

  @action eliminaDettaglioLocale(idpiano, tipo, i) {
    const piano = this.annuncio.immobile.planimetria.piani.find(piano => piano.id === idpiano);
    piano[tipo].dettaglioLocali.splice(i, 1);
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }

  @action updateDettaglioLocale(idpiano, tipo, dettaglioLocali) {
    const piano = this.annuncio.immobile.planimetria.piani.find(piano => piano.id === idpiano);
    piano[tipo].dettaglioLocali = dettaglioLocali;
    this.updateAnnuncio(cloneDeep(this.annuncio));
  }
}

export default new PubblicaStore();
