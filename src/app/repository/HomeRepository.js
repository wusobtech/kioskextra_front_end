import HomeModel from "../models/HomeModel";
import { CountryListModel, CountryModel, CountryStateModel, CountryStatesListModel } from "../models/LocationModel";
import HomeProvider from "../providers/HomeProvider";

const homeProvider = new HomeProvider;

export default class HomeRepository {

    async fetchHomeData() {
        return await homeProvider.fetchHomeData().then((response) => {
            let newResponse = response;
            if (response.success) {
                newResponse.data = new HomeModel(response.data).fromJson();
            }
            return newResponse;
        });
    }


    async fetchCountries() {
        return await homeProvider.fetchCountries().then((response) => {
            let newResponse = response;
            if (response.success) {
                newResponse.data = new CountryListModel(response.data).fromJson();
            }
            return newResponse;
        });
    }

    async fetchCountryStates(country_id) {
        return await homeProvider.fetchCountryStates(country_id).then((response) => {
            let newResponse = response;
            if (response.success) {
                newResponse.data = new CountryStatesListModel(response.data.states).fromJson();
            }
            return newResponse;
        });
    }
}
