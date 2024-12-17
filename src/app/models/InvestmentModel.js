import { BannerListModel } from "./BannerModel";
import { InvestmentHistoryListModel } from "./InvestmentHistoryModel";
import { TransactionListModel } from "./TransactionModel";

export default class InvestmentModel {
    isSetTransactionPin;
    active_investments;
    pending_investments;
    completed_investments;
    cancelled_investments;
    investmentsListModel = [];

    constructor(data) {
        this.isSetTransactionPin = data.isSetTransactionPin;
        this.active_investments = data.active;
        this.pending_investments = data.pending;
        this.cancelled_investments = data.cancelled;
        this.completed_investments = data.completed;
        this.investmentsListModel = new InvestmentHistoryListModel(data.investments).fromJson();
    }

    fromJson() {
        return this;
    }

}
