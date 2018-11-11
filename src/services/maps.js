import restHelpers from '../helpers/restHelper';
import K from '../constants';

console.log(K);

export default {
  cities: input => restHelpers.get(`${K.API_URL}/map/cities?input=${input}`),
  address: input => restHelpers.get(`${K.API_URL}/map/address?input=${input}`)
};
