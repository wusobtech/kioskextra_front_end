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

    async verifyEmail(formData) {
        return await new MakeRequest(ApiRoutes.verifyEmail).postRequest(true , formData).then((response) => response);
    }

    async resendVerificationEMail() {
        return await new MakeRequest(ApiRoutes.resendEmailVerification).getRequest(true).then((response) => response);
    }

    async rewardReferrer(formData) {
        return await new MakeRequest(ApiRoutes.rewardReferrer).postRequest(true , formData).then((response) => response);
    }

    async updateProfile(formData) {
        return await new MakeRequest(ApiRoutes.updateProfile).postRequest(true , formData).then((response) => response);
    }
}
