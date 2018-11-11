import K from '../constants';
import restHelpers from '../helpers/restHelper';

const summaryFn = () => restHelpers.withBearer.get(`${K.API_URL}/leads/summary`, {});

const getFn = () => restHelpers.withBearer.get(`${K.API_URL}/leads`, {});

const statusSummaryFn = () => restHelpers.withBearer.get(`${K.API_URL}/leads/status`, {});

const addReservationFn = (leadId, carId, reservationDate) => restHelpers.withBearer.post(`${K.API_URL}/reservations`, { data: { leadId, carId, reservationDate } });

const deleteReservationFn = reservationId => restHelpers.withBearer.delete(`${K.API_URL}/reservations/${reservationId}`);

const updateReservationFn = (reservationId, reservationDate) => restHelpers.withBearer.put(`${K.API_URL}/reservations/${reservationId}`, { data: { reservationDate } });

const clientFidelityFn = clientId => restHelpers.withBearer.get(`${K.API_URL}/clients/fidelity-info/${clientId}`, {});
const clientsFidelityFn = clientId => restHelpers.withBearer.get(`${K.API_URL}/clients/fidelity-info/all`, {});

const suspendFn = ids => restHelpers.withBearer.post(`${K.API_URL}/leads/suspend`, { data: { ids } });

const sendSmsFn = (message, carId, leadId) => restHelpers.withBearer.post(`${K.API_URL}/communications`, { data: { message, medium: 'sms', carId, leadId, direction: 'out' } });

const sendEmailFn = (message, carId, leadId) => restHelpers.withBearer.post(`${K.API_URL}/communications`, { data: { message, medium: 'email', carId, leadId, direction: 'out' } });

const discardFn = (reason, leadId) => restHelpers.withBearer.post(`${K.API_URL}/leads/discard`, { data: { id: leadId, discardReason: reason } });

const actionFn = leadId => restHelpers.withBearer.post(`${K.API_URL}/leads/action`, { data: { id: leadId } });

export default {
  summary: summaryFn,
  statusSummary: statusSummaryFn,
  get: getFn,
  addReservation: addReservationFn,
  deleteReservation: deleteReservationFn,
  updateReservation: updateReservationFn,
  clientFidelity: clientFidelityFn,
  clientsFidelity: clientsFidelityFn,
  suspend: suspendFn,
  sendSms: sendSmsFn,
  sendEmail: sendEmailFn,
  discard: discardFn,
  action: actionFn
};
