import { BannerListModel } from "./BannerModel";
import { TransactionListModel } from "./TransactionModel";

export default class AccountModel {
    isSetTransactionPin;
    total_deposits;
    total_fiat_transfers;
    total_investment_profits;
    total_investments;
    total_withdrawals;
    transfer_rate;
    wallet;
    withdrawal_rate;
    currencyListModel = [];
    constructor(data) {
        this.isSetTransactionPin = data.isSetTransactionPin;
        this.total_deposits = data.total_deposits;
        this.total_fiat_transfers = data.total_fiat_transfers;
        this.total_investment_profits = data.total_investment_profits;
        this.total_investments = data.total_investments;
        this.total_withdrawals = data.total_withdrawals;
        this.wallet = data.wallet;
        // this.bannerListModel = new BannerListModel(data.banners).fromJson();
        // this.transactionListModel = new TransactionListModel(data.transactions).fromJson();
    }

    fromJson() {
        return this;
    }

}
