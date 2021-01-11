import { encryptionHelper, methodsHelper } from "./HelperIndex";


export default class LocalStorageManager {
    enableDataEncryption = true;

    constructor(enableDataEncryption = null) {
        this.enableDataEncryption = methodsHelper.default(enableDataEncryption, this.enableDataEncryption);
    }

    setEncryption = (enableDataEncryption) => {
        this.enableDataEncryption = enableDataEncryption;
    }

    cleanData(data) {
        if (data.charAt(0) === '"' && data.charAt(data.length - 1) === '"') {
            data = data.substr(1, data.length - 2);
        }
        return data;
    }

    get = async (key) => {
        try {
            let data = localStorage.getItem(key);
            if (!methodsHelper.empty(data) && this.enableDataEncryption) {
                let decrypted = await encryptionHelper.decrypt(this.cleanData(data));
                data = !methodsHelper.empty(decrypted) ? decrypted.plainText : decrypted;
            }
            return JSON.parse(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    save = async (key, value) => {
        try {
            if (this.enableDataEncryption) {
                value = await (await encryptionHelper.encrypt(JSON.stringify(value))).encryptedValue;
            }
            let data = localStorage.setItem(key, JSON.stringify(value));
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
}

