import K from '../constants';
import restHelpers from '../helpers/restHelper';

const getFn = () => restHelpers.withBearer.get(`${K.API_URL}/dealer`, {});

export default {
  get: getFn
};
