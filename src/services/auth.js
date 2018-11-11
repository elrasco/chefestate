import K from '../constants';
import restHelper from '../helpers/restHelper';

import awsCognitoHelper from '../helpers/aws/awsCognitoHelper';

const validateToken = () => restHelper.withBearer.get(`${K.API_URL}/validate_token`);

/** AWS COGNITO **/
const currentUserPoolUser = () => awsCognitoHelper.currentUserPoolUser();
const login = (username, password) => awsCognitoHelper.signIn(username, password);
const completeNewPassword = (user, password) => awsCognitoHelper.completeNewPassword(user, password);
const changePassword = (user, oldpassword, newpassword) => awsCognitoHelper.changePassword(user, oldpassword, newpassword);

/** AWS COGNITO **/

export default {
  login,
  validateToken,
  completeNewPassword,
  currentUserPoolUser,
  changePassword
};
