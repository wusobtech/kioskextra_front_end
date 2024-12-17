import AppConfig from "../AppConfig";

let key = AppConfig.APP_KEY;
export const USERKEY = key + "_user";
export const ACCTSTATUSKEY = key + "_account_status";
export const ACCTSTEPSKEY = key + "_account_steps";
export const BEARERTOKENKEY = key + "_bearer_token";