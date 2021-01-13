import AppConstants from "../../app/helpers/AppContants";
import { authenticationHelper } from "../../app/helpers/HelperIndex";
import { ACTIVE_PAGES } from "../../components/includes/GuardedRoute";
import { AUTH_LOGIN, AUTH_LOGOUT  , REFRESH_STATE, UPDATE_SESSION_TIMEOUT, UPDATE_ACCOUNT_STATUS, SET_CURRENT_PAGE} from "../actions/types";

const initialState = {
    ACTIVE_PAGE: ACTIVE_PAGES.HOME,
    AUTH_STATUS: authenticationHelper.isLoggedIn(),
    AUTH_DATA: {},
    ACCOUNT_STATUS: AppConstants.UNDEFINED,
    SESSION_TIMEOUT: authenticationHelper.getSessionTimeout()
  };
  
  function rootReducer(state = initialState, action) {

    if (action.type === REFRESH_STATE) {
      return {
        ...state,
      }
    }


    if (action.type === AUTH_LOGIN) {
      return {
        ...state,
        AUTH_STATUS: action.payload.isLoggedIn,
        AUTH_DATA: action.payload , 
      }
    }

    if (action.type === AUTH_LOGOUT) {
      authenticationHelper.logout();
      return {
        ...state,
        AUTH_STATUS: false ,
        AUTH_DATA: {} , 
        ACCOUNT_STATUS: AppConstants.UNDEFINED,
      }
    }

    if (action.type === UPDATE_ACCOUNT_STATUS) {
      return {
        ...state,
        ACCOUNT_STATUS: action.payload , 
      }
    }

    if (action.type === UPDATE_SESSION_TIMEOUT) {
      return {
        ...state,
        SESSION_TIMEOUT: action.payload , 
      }
    }

    if (action.type === SET_CURRENT_PAGE) {
      return {
        ...state,
        ACTIVE_PAGE: action.payload , 
      }
    }
    return state;
  }
  
  export default rootReducer;