import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
} from 'amazon-cognito-identity-js';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_USERPOOLID,
    ClientId: process.env.REACT_APP_CLIENTID,
};

export const userPool = new CognitoUserPool(poolData);

export const registerUser = (email, username, password) => {

    const attributeList = [];

    var dataEmail = {
        Name: 'email',
        Value: email,
    };

    var attributeEmail = new CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    return new Promise((resolve, reject) => {
        userPool.signUp(username, password, attributeList, null, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
