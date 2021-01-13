import { BannerListModel } from "./BannerModel";
import { TransactionListModel } from "./TransactionModel";

export default class HomeModel {
    announcement = "";
    announcements = [];
    bannerListModel = [];
    transactionListModel = [];
    constructor(data) {
        this.announcement = data.announcement;
        this.announcements = data.announcements;
        this.bannerListModel = new BannerListModel(data.banners).fromJson();
        this.transactionListModel = new TransactionListModel(data.transactions).fromJson();
    }

    fromJson() {
        return this;
    }

}

