import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { UNKNOWN_ERROR } from 'consts/errors';
import { AuthUserType } from 'contexts/AuthContext';

export async function login({ user }) {
  try {
    const res = await axios.post('api/authenticate', user);
    const { headers } = res;
    if (!headers) {
      throw new Error(UNKNOWN_ERROR);
    }

    const { authorization } = headers;
    if (!authorization) {
      throw new Error(UNKNOWN_ERROR);
    }

    const token = authorization.split(' ')[1];
    if (!token) {
      throw new Error(UNKNOWN_ERROR);
    }

		storeToken(token);
		const decodedUser = decodeUserFromToken(token)

    return { err: null, user: decodedUser};
  } catch (err) {
    console.log(err);
    return { err: err.message, user: null };
  }
}

export function decodeUserFromToken(token: string | null) {
	if(token === null) {
		return null;
	}

	const decoded: AuthUserType = jwt_decode(token);
	
	const {userId, authorities} = decoded; 

	return {userId, authorities};
}

export function storeToken(token: string) {
	localStorage.setItem('TOKEN', token);
}

export function getToken() {
  return localStorage.getItem('TOKEN');
}

export function isLoggedIn() {
  return !!getToken();
}

export function signOut(history) {
  localStorage.removeItem('TOKEN');
  history.push('/login');
}