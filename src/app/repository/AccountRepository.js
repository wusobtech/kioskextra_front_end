import AccountModel from "../models/AccountModel";
import AccountProvider from "../providers/AccountProvider";
const accountProvider = new AccountProvider;

export default class AccountRepository{

    async fetchAccountData(){
        return await accountProvider.fetchAccountData().then((response) => {
            let newResponse = response;
            if(response.success){
                newResponse.data = new AccountModel(response.data).fromJson();
            }
            return newResponse;
        });
    }

    async rechargeStakeCard(formData){
        return await accountProvider.rechargeStakeCard(formData).then((response) => {
            return response;
        });
    }


    //Withdrawal area
    async getWithdrawalData(formData){
        return await accountProvider.getWithdrawalData(formData).then((response) => {
            return response;
        });
    }

    async withdrawFunds(formData){
        return await accountProvider.withdrawFunds(formData).then((response) => {
            return response;
        });
    }


    //Fiat Transfer area
    async getFiatTransferData(formData){
        return await accountProvider.getFiatTransferData(formData).then((response) => {
            return response;
        });
    }

    async processFiatTransfer(formData){
        return await accountProvider.processFiatTransfer(formData).then((response) => {
            return response;
        });
    }


}
