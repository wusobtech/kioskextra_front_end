import { authenticationHelper } from "../helpers/HelperIndex";
import ParsedRequest from "./ParsedRequest";

class RequestModel{
    success;
    message;
    data;
    statusCode;

    constructor(data)
    {
        if(data.message ?? '' == "Unauthenticated"){
            authenticationHelper.forgetToken();
            data["success"] = false;
            data["msg"] = "Your have been logged out!";
            data["data"] = null;
            data["code"] = 401;
        }
        this.success = data.success;
        this.message = data.msg;
        this.data = data.data;
        this.statusCode = data.code;
    }

    fromJson(){
        return new ParsedRequest(this.success, this.message, this.data, this.statusCode);
    }

}

export default RequestModel;