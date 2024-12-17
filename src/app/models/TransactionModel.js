import { methodsHelper } from "../helpers/HelperIndex";
import PaginationMetaModel from "./PaginationMetaModel";

export class TransactionListModel {
    transactions = [];
   
    constructor(data , pagination_meta) {
        this.transactions = data;
        if(!methodsHelper.empty(pagination_meta)){
            this.pagination_meta = new PaginationMetaModel(pagination_meta);
        }
    }

    fromJson() {
        let transactionList = [];
        this.transactions.map((value) => {
            return transactionList.push(
                new TransactionModel(value)
            );
        });

        this.transactions = transactionList;
        return this;
    }

}

export class TransactionModel {
    amount;
    created_at;
    crypto_transfer_id;
    deleted_at;
    deposit_id;
    fiat_transfer_id;
    id;
    investment_id;
    method;
    narration;
    reference;
    status;
    type;
    updated_at;
    user_id;
    withdrawal_id;

    constructor(data)
    {
        this.id = data.id;
        this.user_id = data.user_id;
        this.amount = data.amount;
        this.method = data.method;
        this.narration = data.narration;
        this.reference = data.reference;
        this.status = data.status;
        this.type = data.type;
        this.created_at = data.created_at;
    }

    fromJson() {
       return this;
    }

}
