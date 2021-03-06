export default {
  API_URL: process.env.API_BASE_URL || process.env.REACT_APP_API_BASE_URL,
  AWS_AUTH_REGION: process.env.AWS_AUTH_REGION || process.env.REACT_APP_AWS_AUTH_REGION,
  AWS_AUTH_USER_POOL_ID: process.env.AWS_AUTH_USER_POOL_ID || process.env.REACT_APP_AWS_AUTH_USER_POOL_ID,
  AWS_AUTH_USER_POOL_WEBCLIENT_ID: process.env.AWS_AUTH_USER_POOL_WEBCLIENT_ID || process.env.REACT_APP_AWS_AUTH_USER_POOL_WEBCLIENT_ID
};
