import Methods from "../helpers/Methods";
import PaginationMetaModel from "./PaginationMetaModel";
const methods = new Methods;
export class InvestmentHistoryListModel {
    investments = [];
    constructor(data , pagination_meta) {
        this.investments = data;
        if(!methods.empty(pagination_meta)){
            this.pagination_meta = new PaginationMetaModel(pagination_meta);
        }
    }


    fromJson() {
    let investmentsList = [];
        this.investments.map((value) => {
            investmentsList.push(
                new InvestmentHistoryModel(value)
            );
        });

        this.investments = investmentsList;
        return this;
    }

}

export class InvestmentHistoryModel {
    amount;
    created_at;
    id;
    narration;
    reference;
    status;
    updated_at;
    duration;
    end_date;
    extension;
    fees;
    percent;
    progress;
    start_date;
    total;

    constructor(data) {
        this.id = data.id;
        this.amount = data.amount;
        this.narration = data.narration;
        this.reference = data.reference;
        this.status = data.status;
        this.duration = data.duration;
        this.created_at = data.created_at;
        this.end_date = data.end_date;
        this.start_date = data.start_date;
        this.extension = data.extension;
        this.fees = data.fees;
        this.percent = data.percent;
        this.progress = data.progress;
        this.total = data.total;
        this.percent = data.percent;
    }

    fromJson() {
        return this;
    }

}
