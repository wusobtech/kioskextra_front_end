import UserModel from "./UserModel";

export default class AuthenticationDataModel {
   
    constructor(data) {
        this.user = new UserModel(data.user);
        this.accountStatusCheck = data.status_check;
        this.accountSteps = data.status_check.steps;
        this.bearerToken = data.token;
        this.accountComplete = data.user.is_complete;
    }

    fromJson() {
        return this;
    }

}
