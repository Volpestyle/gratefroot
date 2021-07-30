import * as AWS from "aws-sdk/global";
import toast from "react-hot-toast";
import { userPool } from "./register-user";
import {
    AuthenticationDetails,
    CognitoUser,
} from 'amazon-cognito-identity-js';

export const signIn = (username, password) => {
  const authenticationData = {
    Username: username,
    Password: password,
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  var userData = {
    Username: username,
    Pool: userPool,
  };
  var cognitoUser = new CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        AWS.config.region = "us-east-1";
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: process.env.REACT_APP_IDENTITYPOOLID, // your identity pool id here
          Logins: {
            [process.env.REACT_APP_COGNITOURL]: result.getIdToken().getJwtToken(),
          },
        });
        AWS.config.credentials.refresh((error) => {
          if (error) {
            console.error(error);
            toast(error.message);
            reject(error);
          } else {
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();
            console.log("Successfully logged!");
            toast(`Welcome ${cognitoUser.username}!!`);
            resolve(cognitoUser);
          }
        });
      },
      onFailure: function (err) {
        toast(err.message || JSON.stringify(err));
        reject(err);
      },
    });
  });
};
