import { InvestmentHistoryListModel } from "../models/InvestmentHistoryModel";
import InvestmentModel from "../models/InvestmentModel";
import InvestmentProvider from "../providers/InvestmentProvider";
const investmentProvider = new InvestmentProvider;

export default class InvestmentRepository{

    async fetchInvestmentData(){
        return await investmentProvider.fetchInvestmentData().then((response) => {
            let newResponse = response;
            if(response.success){
                newResponse.data = new InvestmentModel(response.data).fromJson();
            }
            return newResponse;
        });
    }

    async fetchInvestmentHistory(next_url , formData){
        return await investmentProvider.fetchInvestmentHistory(next_url , formData).then((response) => {
            let newResponse = response;
            if(response.success){
                newResponse.data = new InvestmentHistoryListModel(response.data.data , response.data.pagination_meta).fromJson();
            }
            return newResponse;
        });
    }

   
    async getNewInvestmentData(formData){
        return await investmentProvider.getNewInvestmentData(formData).then((response) => {
            return response;
        });
    }

    async processNewInvestment(formData){
        return await investmentProvider.processNewInvestment(formData).then((response) => {
            return response;
        });
    }

    async processCancelInvestment(formData){
        return await investmentProvider.processCancelInvestment(formData).then((response) => {
            return response;
        });
    }


}
