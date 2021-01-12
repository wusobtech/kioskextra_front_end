import Axios from "axios";
import AppConfig from "../AppConfig";
import EncryptionManager from "../helpers/EncryptionManager";
import { authenticationHelper, methodsHelper } from "../helpers/HelperIndex";
import ParsedRequest from "./ParsedRequest";
import RequestModel from "./RequestModel";
const encryptionManager = new EncryptionManager();

export default class MakeRequest {
    url = "";
    enableEncryption = AppConfig.ENABLE_REQUEST_ENCRYPTION;
    encryptBearerToken = AppConfig.ENABLE_API_TOKEN_ENCRYPTION;

    constructor(url) {
        this.url = url;
    }


    async generateHeader(withToken = true) {
        let rawToken = methodsHelper.default( await authenticationHelper.getBearerToken() , '');
        // console.log(rawToken);
        let token = rawToken;
        let encryptionMode = [];
        encryptionMode.push("prepend_bearer");
        if (this.encryptBearerToken) {
            encryptionMode.push("token");
            token = await (await encryptionManager.encrypt(rawToken)).encryptedValue
        }
        if (this.enableEncryption) {
            encryptionMode.push("react_encryption");
        }
        return {
            headers: {
                Authorization: withToken ? token : "",
                Encryption: encryptionMode,
            }
        };
    }



    async getRequest(withToken = true, formData = null) {
        let url = this.url;
        if (!methodsHelper.empty(formData)) {
            url = methodsHelper.serialize(formData, url);
        }
        return await Axios.get(url, await this.generateHeader(withToken)).then(
            (response) => this.parseSuccessResponse(response)
        ).catch(
            (error) => this.parseErrorResponse(error)
        );
    }

    async postRequest(withToken = true, formData) {
        let processedFormData = null;
        if (this.enableEncryption) {
            processedFormData = {
                encryptedData: await (await encryptionManager.encrypt(JSON.stringify(formData))).encryptedValue,
            }
        }
        else {
            processedFormData = formData;
        }
        return await Axios.post(this.url, processedFormData, await this.generateHeader(withToken)).then(
            (response) => this.parseSuccessResponse(response)
        ).catch(
            (error) => this.parseErrorResponse(error)
        );
    }

    async parseSuccessResponse(response) {
        let headers = methodsHelper.default(response.config.headers.Encryption, []);
        if (headers.includes("react_encryption")) {
            response = await (await encryptionManager.decrypt(response.data)).plainText;
            console.log(response);
            // console.log(new RequestModel(JSON.parse(response)).fromJson());
            return new RequestModel(JSON.parse(response)).fromJson();
        }
        return new RequestModel(response.data).fromJson();
    }

    parseErrorResponse(error) {
        // console.log("An error occured...Error handling init");
        if (error.request) {
            // console.log('Request error!');
            // console.log(error.request)
        }
        if (error.response) {
            // console.log('Response error!');
            console.log(error.response)
            return this.parseSuccessResponse(error.response);
        }
        else {
            // console.log('Unknown error');
            // console.log(error);
        }
        console.log(error.response)

        return new ParsedRequest(
            false, "Check your network and retry!", null, 408
        );
    }



}


