import AppConfig from "./AppConfig";

export default class ApiRoutes {

    static base_url = AppConfig.BASE_API_URL;

    // Authentication Routes
    static validateToken = this.base_url + '/validate-token';

    static login = this.base_url + '/login';

    static register = this.base_url + '/register';

    static verifyEmail = this.base_url + '/verify-email-pin';

    static resendEmailVerification = this.base_url + '/verification-pin';


    // Home page
    static categoriesList = this.base_url + '/home/product-categories';

    static sliderAndImages = this.base_url + '/home/slider-and-images';

    static productsList = this.base_url + '/products/list';

    static accountSettings = this.base_url + '/account-settings';

    static accountDetails = this.base_url + '/account-details';

    static transactionHistory = this.base_url + '/transaction-history';

    static set_transactionPin = this.base_url + '/set-transaction-pin';

    static confirmTransactionPin = this.base_url + '/confirm-transaction-pin';

    static searchTransactions = this.base_url + '/search-transactions';

    static rechargeStakcard = this.base_url + '/recharge-stakecard';

    static validateTransferReceiver = this.base_url + '/validate-receiver';

    static getFiatTransferData = this.base_url + '/get-fiat-transfer-data';

    static rewardReferrer = this.base_url + '/reward-referrer';

    static validateFiatWalletBalance = this.base_url + '/validate-wallet-fiat-balance';

    static processFiatTransfer = this.base_url + '/process-fiat-transfer';

    static getWithdrawalData = this.base_url + '/get-withdrawal-data';

    static processWithdrawal = this.base_url + '/process-withdrawal';

    static cryptoPayment = this.base_url + '/crypto-payment';



    /// Investment Details

    static investmentDetails = this.base_url + '/investment-details';

    static checkWalletBalance = this.base_url + '/check-wallet-balance';

    static getInvestmentData = this.base_url + '/get-investment-data';

    static processInvestment = this.base_url + '/process-investment';

    static investmentHistory = this.base_url + '/investment-history';

    static searchInvestments = this.base_url + '/search-investments';

    static cancelInvestment = this.base_url + '/cancel-investment';

    static getMinimumIestment = this.base_url + '/get-minimum-investment';




    // Home Page

    static fetchHomePageData = this.base_url + "/fetch-homepage-data";

    static fetchAgents = this.base_url + '/fetch-agents';

    static fetchNotifications = this.base_url + '/fetch-notifications';

    static fetchReferralHistory = this.base_url + '/fetch-referral-history';


    // Profile
    static profileDetails = this.base_url + '/profile-details';

    static getCountries = this.base_url + '/get-countries';

    static getCountryStates = (country_id) => this.base_url + '/get-country-states/' + country_id;

    static updateProfile = this.base_url + '/update-profile';


    // Chat
    static startChat = this.base_url + '/start-chat';

    static fetchChatMessages = this.base_url + '/fetch-chat-messages';

    static sendChatMessage = this.base_url + '/send-chat-message';

    static deleteChatMessage = this.base_url + '/delete-chat-message';


    // Account Setup check

    static accountStatCheck = this.base_url + '/account-status-check';

    static finishAccountSetup = this.base_url + '/finish-account-setup';





}



export class WebRoutes {

    static base_url = AppConfig.BASE_WEB_URL;

    // External routes
    static termsOfUse = this.base_url + '/terms-of-use';


    // Unauthenticated Routes
    static notFoundPage = "*";
    static redirectIndexPage = this.base_url;
    static indexPage = '/';



    // Authentication Routes
    static loginPage = "/login";
    static registerPage = "/register";
    static forgotPasswordPage = "/forgot-password";

    // Complete profile
    static accountSetupPage = "/account-setup";


    // Authenticated Routes
    static homePage = "/";
    static accountPage = "/account";
    static investmentPage = "/investment";
    static stakeCardRechargePage = "/account/deposit/recharge/stake-card";
    static withdrawPage = "/account/withdraw";
    static fiatTransferPage = "/account/fiat/transfer";
    static newInvestmentPage = "/investment/new";
    static investmentHistory = "/investment/history";
    static transactionHistory = "/transaction/history";
    static sessionTimeoutPage = "/session-expired";


}
