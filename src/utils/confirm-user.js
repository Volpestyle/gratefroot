import { CognitoUser } from "amazon-cognito-identity-js";

export const confirmUser = (userData, code) => {
  var cognitoUser = new CognitoUser(userData);
  return new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (err) {
        reject(err.message || JSON.stringify(err));
      }
      resolve(result);
    });
  });
};
