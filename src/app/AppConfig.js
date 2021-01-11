class AppConfig{
    static BASE_API_URL = process.env.REACT_APP_BASE_API_URL_DEVELOPMENT;
    static BASE_WEB_URL = process.env.REACT_APP_BASE_WEB_URL_PRODUCTION;
    static ENCRYPTION_SECRET_KEY = process.env.REACT_APP_ENCRYPTION_SECRET_KEY;
    static ENCRYPTION_PUBLIC_KEY = process.env.REACT_APP_ENCRYPTION_PUBLIC_KEY;

    static ENABLE_API_TOKEN_ENCRYPTION = true;
    static ENABLE_API_DATA_ENCRYPTION = true;
    static ENABLE_LOCAL_STORAGE_ENCRYPTION = true;
    static ENABLE_REQUEST_ENCRYPTION = true;
}

export default AppConfig;