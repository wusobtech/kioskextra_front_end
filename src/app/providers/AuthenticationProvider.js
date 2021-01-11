import ApiRoutes from "../AppRoutes";
const { default: MakeRequest } = require("../request/MakeRequest");
export default class AuthenticationProvider {

    async login(formData) {
        return await new MakeRequest(ApiRoutes.login).postRequest(false , formData).then((response) => response);
    }

    async register(formData) {
        return await new MakeRequest(ApiRoutes.register).postRequest(false , formData).then((response) => response);
    }

    async validateToken() {
        return await new MakeRequest(ApiRoutes.validateToken).getRequest(true).then((response) => response);
    }
}
