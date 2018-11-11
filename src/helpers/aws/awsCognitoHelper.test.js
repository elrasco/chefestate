import awsCognitoHelper from './awsCognitoHelper';

describe('test works', () => {
  it('should work', () => {});
});

describe('signIn', () => {
  it('should accept login and password', () => {
    awsCognitoHelper
      .signIn('luca.rasconi', 'Arnica1*')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  });
});
