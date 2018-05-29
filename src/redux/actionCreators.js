import * as types from './types';

const host = process.env.TIME_SERVER;
const timezone = 'pst';
const str='now';

export const fetchNewTime = () => ({
  type: types.FETCH_NEW_TIME,
  payload: new Date().toString(),
  meta: {
    type: 'api',
    url: host+'/'+timezone+'/'+str+'.json'
  }
})

export const login = (user) => ({
  type: types.LOGIN,
  payload: user
})

export const logout = () => ({
  type: types.LOGOUT
})
