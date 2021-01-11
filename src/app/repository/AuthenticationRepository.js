import { authenticationHelper } from "../helpers/HelperIndex";
import AuthenticationDataModel from "../models/AuthenticationModel";
import HomeModel from "../models/HomeModel";
import UserModel from "../models/UserModel";
import AuthenticationProvider from "../providers/AuthenticationProvider";

const authenticationProvider = new AuthenticationProvider;

export default class AuthenticationRepository {

    async login(formData , logoutOnFailure = true) {
        return await authenticationProvider.login(formData).then((response) => {
            return this.updateLocalData(response , logoutOnFailure);
        });
    }

    updateLocalData(response , logoutOnFailure = false) {
        if (response.success) {
            let parsedData = new AuthenticationDataModel(response.data).fromJson();
            authenticationHelper.login(parsedData);
            response.data = null;
        }
        else {
            if(logoutOnFailure){
                authenticationHelper.logout();
            }
        }
        return response;
    }

    async register(formData) {
        return await authenticationProvider.register(formData).then((response) => {
            return this.updateLocalData(response);
        });
    }

    async validateToken() {
        return await authenticationProvider.validateToken().then((response) => {
            return this.updateLocalData(response);
        });
    }
<<<<<<< HEAD

    async verifyEmail(formdata) {
        return await authenticationProvider.verifyEmail(formdata).then((response) => {
            return response;
        });
    }

    async rewardReferrer(formdata) {
        return await authenticationProvider.rewardReferrer(formdata).then((response) => {
            return response;
        });
    }

    async resendVerificationEmail() {
        return await authenticationProvider.resendVerificationEMail().then((response) => {
            return response;
        });
    }

    async updateProfile(formdata) {
        return await authenticationProvider.updateProfile(formdata).then((response) => {
            let newResponse = response;
            if (response.success) {
                let data = new UserModel(response.data).fromJson();
                newResponse.data = data;
                authenticationHelper.setUser(data);
            }
            return newResponse;
        });
    }
=======
>>>>>>> be8d524eb54a1af153daa5e1ecf8664e26709db3
}


