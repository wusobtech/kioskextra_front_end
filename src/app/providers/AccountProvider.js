import ApiRoutes from "../AppRoutes";
import HomeModel from "../models/HomeModel";

const { default: MakeRequest } = require("../request/MakeRequest");

export default class AccountProvider{

    async fetchAccountData(){
        return await new MakeRequest(ApiRoutes.accountDetails).getRequest().then((response) => response);
    }

    async rechargeStakeCard(formData){
        return await new MakeRequest(ApiRoutes.rechargeStakcard).postRequest(true , formData).then((response) => response);
    }

    async getWithdrawalData(formData){
        return await new MakeRequest(ApiRoutes.getWithdrawalData).postRequest(true , formData).then((response) => response);
    }

    async withdrawFunds(formData){
        return await new MakeRequest(ApiRoutes.processWithdrawal).postRequest(true , formData).then((response) => response);
    }

    async getFiatTransferData(formData){
        return await new MakeRequest(ApiRoutes.getFiatTransferData).postRequest(true , formData).then((response) => response);
    }

    async processFiatTransfer(formData){
        return await new MakeRequest(ApiRoutes.processFiatTransfer).postRequest(true , formData).then((response) => response);
    }

}
