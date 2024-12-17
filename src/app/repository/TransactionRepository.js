import { TransactionListModel } from "../models/TransactionModel";
import TransactionProvider from "../providers/TransactionProvider";

const transactionProvider = new TransactionProvider;

export default class TransactionRepository{

   

    async fetchTransactionHistory(next_url , formData){
        return await transactionProvider.fetchTransactionHistory(next_url , formData).then((response) => {
            let newResponse = response;
            if(response.success){
                newResponse.data = new TransactionListModel(response.data.data , response.data.pagination_meta).fromJson();
            }
            return newResponse;
        });
    }

}
