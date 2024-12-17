import ApiRoutes from "../AppRoutes";
const { default: MakeRequest } = require("../request/MakeRequest");
export default class HomeProvider {

    async fetchHomeData() {
        return await new MakeRequest(ApiRoutes.fetchHomePageData).getRequest().then((response) => response);
    }

    async fetchCountries() {
        return await new MakeRequest(ApiRoutes.getCountries).getRequest().then((response) => response);
    }

    async fetchCountryStates(country_id) {
        return await new MakeRequest(ApiRoutes.getCountryStates(country_id)).getRequest().then((response) => response);
    }

    async fetchProductCategories() {
        return await new MakeRequest(ApiRoutes.categoriesList).getRequest().then((response) => response);
    }

    async fetchSliderProducts() {
        return await new MakeRequest(ApiRoutes.sliderAndImages).getRequest().then((response) => response);
    }

    async fetchProducts(formdata) {
        return await new MakeRequest(ApiRoutes.productsList).getRequest(true , formdata).then((response) => response);
    }
}
