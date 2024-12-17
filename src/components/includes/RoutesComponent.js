import { Route, Switch, Link } from "react-router-dom";
import { WebRoutes } from "../../app/AppRoutes";

export default function RoutesComponent() {
    return <Switch>
        <Route path={WebRoutes.login} component={LoginComponent} exact />
        <Route path={WebRoutes.homePage} component={HomeComponent} exact />
        <Route path={WebRoutes.accountPage} component={AccountComponent} exact />
        <Route path={WebRoutes.investmentPage} component={InvestmentComponent} exact />
        <Route path={WebRoutes.stakeCardRechargePage} component={StakeCardRechargeComponent} exact />
        <Route path={WebRoutes.withdrawPage} component={WithdrawComponent} exact />
        <Route path={WebRoutes.fiatTransferPage} component={FiatTransferComponent} exact />
        <Route path={WebRoutes.newInvestmentPage} component={NewInvestmentComponent} exact />
        <Route path={WebRoutes.investmentHistory} component={InvestmentHistoryComponent} exact />
        <Route path={WebRoutes.transactionHistory} component={TransactionHistoryComponent} exact />
    </Switch>
}
