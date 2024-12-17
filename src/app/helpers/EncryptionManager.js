import AppConfig from '../AppConfig';

const { SodiumPlus, X25519SecretKey, X25519PublicKey } = require('sodium-plus');

let sodium;


export default class EncryptionManager {
    publicKey = "";
    secretKey = "";

    constructor() {
        this.publicKey = AppConfig.ENCRYPTION_PUBLIC_KEY;
        this.secretKey = AppConfig.ENCRYPTION_SECRET_KEY;
    }

    generate = async () => {
        if (!sodium) sodium = await SodiumPlus.auto();
        let cryptoKeypair = await sodium.crypto_box_keypair();
        let cryptoSecret = await sodium.crypto_box_secretkey(cryptoKeypair);
        let cryptoPublic = await sodium.crypto_box_publickey(cryptoKeypair);
        // console.log(cryptoSecret)
        // console.log(await sodium.sodium_bin2hex(cryptoSecret.getBuffer()))
        // console.log(cryptoPublic)
        // console.log(await sodium.sodium_bin2hex(cryptoPublic.getBuffer()))
    }

    getX25519PublicKey = async () => {
        return X25519PublicKey.from(this.publicKey, 'hex');
    }

    getX25519SecretKey = async () => {
        return X25519SecretKey.from(this.secretKey, 'hex');
    }

    encrypt = async (plainValue) => {
        if (!sodium) sodium = await SodiumPlus.auto();
        const publicKey = await new EncryptionManager().getX25519PublicKey();
        let encrypted = await sodium.crypto_box_seal(plainValue, publicKey)
        return {
            encryptedValue: await sodium.sodium_bin2hex(encrypted),
            plainText: plainValue,
        }
    }

    decrypt = async (encryptedValue) => {
            try {
            if (!sodium) sodium = await SodiumPlus.auto();
            const publicKey = await new EncryptionManager().getX25519PublicKey();
            const secretKey = await new EncryptionManager().getX25519SecretKey();
            let value = await sodium.sodium_hex2bin(encryptedValue);
            let decryptedValue = await sodium.crypto_box_seal_open(value, publicKey, secretKey)
            return {
                encryptedValue: encryptedValue,
                plainText: decryptedValue.toString(),
            }
        } catch (error) {
            return null;
        }

    }


}

