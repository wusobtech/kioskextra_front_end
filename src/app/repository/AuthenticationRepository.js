import { authenticationHelper } from "../helpers/HelperIndex";
import AuthenticationDataModel from "../models/AuthenticationModel";
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
}


