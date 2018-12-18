import K from '../constants';
import restHelpers from '../helpers/restHelper';

const create = () => restHelpers.withBearer.post(`${K.API_URL}/annuncio`, {});
const update = (id, data, title, status) => restHelpers.withBearer.put(`${K.API_URL}/annuncio/${id}`, { data: { data, title, status } });
const get = id => restHelpers.withBearer.get(`${K.API_URL}/annuncio/${id}`, {});
const deleteFn = id => restHelpers.withBearer.delete(`${K.API_URL}/annuncio/${id}`, {});

export default {
  create,
  update,
  get,
  delete: deleteFn
};
