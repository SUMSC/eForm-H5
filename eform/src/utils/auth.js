import jwt from 'jsonwebtoken';
import * as crypto from "crypto";
import axios from "axios";

const AUTH_URL = `http://localhost:8001`;
const AUTH_SECRET = "sumsc666";

export const hashSeed = (secret, method) =>
    crypto.createHash(method).update(secret).digest('hex');

export const verify = token => {
    try {
        jwt.verify(token, hashSeed(AUTH_SECRET, 'md5'));
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
};

export const userLogin = (id, token) => {
    const options = {
        method: 'GET',
        url: `${AUTH_URL}/login/`,
        params: {
            id,
            token
        },
        responseType: 'json'
    };
    return axios(options);
};