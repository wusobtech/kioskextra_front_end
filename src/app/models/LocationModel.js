import { methodsHelper } from "../helpers/HelperIndex";
import PaginationMetaModel from "./PaginationMetaModel";

export class CountryListModel {
    countries = [];
   
    constructor(data , pagination_meta) {
        this.countries = data;
        if(!methodsHelper.empty(pagination_meta)){
            this.pagination_meta = new PaginationMetaModel(pagination_meta);
        }
    }

    fromJson() {
        let countryList = [];
        this.countries.map((value) => {
            countryList.push(
                new CountryModel(value)
            );
        });

        this.countries = countryList;
        return this;
    }

}


export class CountryModel {
   
    constructor(data) {
        this.id = data.id;
        this.flag = data.flag;
        this.name = data.name;
        this.phone_code = data.phone_code;
    }

    fromJson() {
        return this;
    }

}


export class CountryStatesListModel {
    states = [];
   
    constructor(data , pagination_meta) {
        this.states = data;
        if(!methodsHelper.empty(pagination_meta)){
            this.pagination_meta = new PaginationMetaModel(pagination_meta);
        }
    }

    fromJson() {
        let stateList = [];
        this.states.map((value) => {
            stateList.push(
                new CountryStateModel(value)
            );
        });

        this.states = stateList;
        return this;
    }

}

export class CountryStateModel {
   
    constructor(data) {
        this.id = data.id;
        this.country = data.country;
        this.name = data.name;
    }

    fromJson() {
        return this;
    }

}
