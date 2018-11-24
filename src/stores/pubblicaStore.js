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

  @action updateImmobile(immobile) {
    const annuncio = this.annuncio;
    annuncio.immobile = immobile;
    this.updateAnnuncio(cloneDeep(annuncio));
  }

  @action updateDehor(dehor) {
    const planimetria = this.annuncio.immobile.planimetria;
    planimetria.dehor = dehor;
    this.updatePlanimetria(planimetria);
  }

  @action updatePlanimetria(planimetria) {
    const immobile = this.annuncio.immobile;
    immobile.planimetria = planimetria;
    this.updateImmobile(immobile);
  }
}

export default new PubblicaStore();
