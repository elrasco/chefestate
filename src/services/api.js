import { auth, maps } from '.';

//Rollbar is a global variable, lint complains
//https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#using-global-variables
//const Rollbar = window.Rollbar;

const api = (action, ...params) => {
  const apis = {
    login: auth.login,
    currentUser: auth.currentUserPoolUser,
    completeNewPassword: auth.completeNewPassword,
    changePassword: auth.changePassword,
    cities: maps.cities,
    address: maps.address
  };

  try {
    return apis[action](...params);
  } catch (error) {
    console.error(`action: ${action} - error: ${error}`);
    //Rollbar.error(error);
    return Promise.reject(Object.assign({}, error, { severity: 'high' }));
  }
};

export default api;
