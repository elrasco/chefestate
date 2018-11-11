import Amplify, { Auth } from 'aws-amplify';
import K from '../../constants';

Amplify.configure({
  region: K.AWS_AUTH_REGION,
  userPoolId: K.AWS_AUTH_USER_POOL_ID,
  userPoolWebClientId: K.AWS_AUTH_USER_POOL_WEBCLIENT_ID
});

export default {
  signIn: (username, password) => Auth.signIn(username, password),
  completeNewPassword: (user, password) => Auth.completeNewPassword(user, password, user.challengeParam.requiredAttributes),
  currentUserPoolUser: () => Auth.currentUserPoolUser(),
  changePassword: (user, oldpassword, newpassword) => Auth.changePassword(user, oldpassword, newpassword)
};
