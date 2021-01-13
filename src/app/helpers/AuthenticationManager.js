import { methodsHelper, storageHelper } from "./HelperIndex";
import {
  ACCTSTATUSKEY,
  ACCTSTEPSKEY,
  BEARERTOKENKEY,
  USERKEY,
} from "./LocalStorageKeys";

export default class AuthenticationManager {
  user = null;
  accountStatus = null;
  accountSteps = null;
  bearerToken = null;
  sessionTimeout = 100 * 60; // in seconds

  data = async () => {
    return {
      user: await this.getUser(),
      accountStatus: await this.getAccountStatus(),
      sessionTimeout: this.sessionTimeout,
      isLoggedIn: await this.isLoggedIn(),
      hasToken: await this.hasToken()
    };
  };

  getUser = async () => await storageHelper.get(USERKEY);
  getAccountStatus = async () => await storageHelper.get(ACCTSTATUSKEY);
  getAccountSteps = async () => await storageHelper.get(ACCTSTEPSKEY);
  getBearerToken = async () => await storageHelper.get(BEARERTOKENKEY);
  getSessionTimeout = () => this.sessionTimeout;

  setUser = (user) => {
    storageHelper.save(USERKEY, user);
    this.user = user;
  };

  setAccountStatus = (status) => {
    storageHelper.save(ACCTSTATUSKEY, status);
    this.accountStatus = status;
  };

  setAccountSteps = (steps) => {
    storageHelper.save(ACCTSTEPSKEY, steps);
    this.accountSteps = steps;
  };

  setBearerToken = (token) => {
    storageHelper.save(BEARERTOKENKEY, token);
    this.bearerToken = token;
  };

  setSessionTimeout = (timeout) => {
    this.sessionTimeout = timeout;
  };

  setUserAvatar = (avatar) => {
    this.getUser().then((user) => {
      user.avatar = avatar;
      this.setUser(user);
    });
  };

  login = (loginDataModel) => {
    this.setUser(loginDataModel.user);
    this.setAccountStatus(loginDataModel.accountStatusCheck.pass);
    this.setAccountSteps(loginDataModel.accountSteps);
    this.setBearerToken(loginDataModel.bearerToken);
    return this;
  };

  logout = (callback = () => {}) => {
    this.setUser(null);
    this.setAccountStatus(null);
    this.setAccountSteps(null);
    this.setBearerToken(null);
    return callback;
  };

  forgetToken = () => {
    this.setBearerToken(null);
  };

  isLoggedIn = async () => !methodsHelper.empty(await this.getUser());
  hasToken = async () => !methodsHelper.empty(await this.getBearerToken());
}
