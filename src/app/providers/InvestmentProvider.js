import ApiRoutes from "../AppRoutes";
import Methods from "../helpers/Methods";

const { default: MakeRequest } = require("../request/MakeRequest");
const methods = new Methods;

export default class InvestmentProvider{

    async fetchInvestmentData(){
        return await new MakeRequest(ApiRoutes.investmentDetails).getRequest().then((response) => response);
    }

    async fetchInvestmentHistory(next_url = "", formData = {}){
        return await new MakeRequest(methods.default(next_url , ApiRoutes.investmentHistory)).getRequest(true , formData).then((response) => response);
    }

    async processNewInvestment(formData){
        return await new MakeRequest(ApiRoutes.processInvestment).postRequest(true , formData).then((response) => response);
    }

    async processCancelInvestment(formData){
        return await new MakeRequest(ApiRoutes.cancelInvestment).postRequest(true , formData).then((response) => response);
    }

    async getNewInvestmentData(formData){
        return await new MakeRequest(ApiRoutes.getInvestmentData).postRequest(true , formData).then((response) => response);
    }


}
