import { AUTH_LOGIN, AUTH_ATTEMPT, AUTH_LOGOUT, UPDATE_ACCOUNT_STATUS, REFRESH_STATE, UPDATE_SESSION_TIMEOUT, SET_CURRENT_PAGE } from "./types"


export const authLogin = (payload) => {
  return { type: AUTH_LOGIN, payload }
};


export const authLogout = (payload) => {
  return { type: AUTH_LOGOUT, payload }
};


export const authAttempt = (payload) => {
  return { type: AUTH_ATTEMPT, payload }
};


export const updateAccountStatus = (payload) => {
  return { type: UPDATE_ACCOUNT_STATUS, payload }
};


export const refreshState = () => {
  return { type: REFRESH_STATE }
};


export const updateSessionTimeout = (payload) => {
  return { type: SET_CURRENT_PAGE, payload }
};




export const setCurrentPage = (payload) => {
  return { type: UPDATE_SESSION_TIMEOUT, payload }
};
