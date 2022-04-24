import axios from 'axios';

import {LOGIN_USER, REGIST_USERS} from '../types';
const registerUrl = 'http://code.aldipee.com/api/v1';

export const userRegister = (name, email, password, {navigation}) => {
  return dispatch => {
    axios
      .post('http://code.aldipee.com/api/v1/auth/register', {
        name,
        email,
        password,
      })
      .then(res => {
        const resRegist = res.data;
        dispatch({type: LOGIN_USER, payload: resRegist.data});
        console.log(resRegist);
        if (resRegist.success) {
          navigation.replace('SuccessRegister');
        }
      });
  };
};

export const userLogin = (email, password, {navigation}) => {
  return dispatch => {
    axios.post(registerUrl + '/auth/login', {email, password}).then(res => {
      const resLogin = res.data;
      dispatch({type: LOGIN_USER, payload: resLogin.data});
      if (resLogin.user.isEmailVerified) {
        const namauser = resLogin.user.name;
        const barier = resLogin.tokens.access.token;
        axios
          .get(`${registerUrl}/books`, {
            headers: {
              Authorization: `Bearer ` + barier,
            },
          })
          .then(resBook => {
            const dataBook = resBook.data;
            navigation.navigate('Home', {
              data: dataBook,
              namaUser: namauser,
              barier: barier,
            });
          });
      }
    });
  };
};
