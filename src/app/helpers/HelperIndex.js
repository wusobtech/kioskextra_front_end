import ApiRoutes, { WebRoutes } from "../AppRoutes";
import MakeRequest from "../request/MakeRequest";
import AuthenticationManager from "./AuthenticationManager";
import FormManager from "./FormManager";
import LocalStorageManager from "./LocalStorageManager";
import Methods from "./Methods";
const { default: EncryptionManager } = require("./EncryptionManager");

export const encryptionHelper = new EncryptionManager();
export const methodsHelper = new Methods();
export const storageHelper = new LocalStorageManager();
export const webRoutesHelper = new WebRoutes();
export const apiRoutesHelper = new ApiRoutes();
export const requestHelper = new MakeRequest();
export const formManagerHelper = new FormManager();
export const authenticationHelper = new AuthenticationManager();
