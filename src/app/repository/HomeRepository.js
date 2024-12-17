import HomeModel from "../models/HomeModel";
import { CountryListModel, CountryModel, CountryStateModel, CountryStatesListModel } from "../models/LocationModel";
import { ProductCategoryListModel } from "../models/ProductCategoryModel";
import { ProductListModel } from "../models/ProductModel";
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

    async fetchProductCategories() {
        return await homeProvider.fetchProductCategories().then((response) => {
            let newResponse = response;
            if (response.success) {
                newResponse.data = new ProductCategoryListModel(response.data.data , response.data.pagination_meta).fromJson();
            }
            return newResponse;
        });
    }

    async fetchSliderProducts() {
        return await homeProvider.fetchSliderProducts().then((response) => {
            let newResponse = response;
            if (response.success) {
                newResponse.data = new ProductListModel(response.data).fromJson();
            }
            return newResponse;
        });
    }

    async fetchProducts(formdata) {
        return await homeProvider.fetchProducts(formdata).then((response) => {
            let newResponse = response;
            if (response.success) {
                newResponse.data = new ProductListModel(response.data.data , response.data.pagination_meta).fromJson();
            }
            return newResponse;
        });
    }
}
