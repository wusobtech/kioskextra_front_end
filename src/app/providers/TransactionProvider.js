import ApiRoutes from "../AppRoutes";
import Methods from "../helpers/Methods";

const { default: MakeRequest } = require("../request/MakeRequest");
const methods = new Methods;

export default class TransactionProvider{

 
    async fetchTransactionHistory(next_url = "", formData = {}){
        return await new MakeRequest(methods.default(next_url , ApiRoutes.transactionHistory)).getRequest(true , formData).then((response) => response);
    }

}
