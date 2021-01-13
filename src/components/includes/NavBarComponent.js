import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { WebRoutes } from "../../app/AppRoutes";
import AppConstants from "../../app/helpers/AppContants";
import { MyIcon, SVGIcon, ICONS, MIcon } from "../reusables/Icons";
import { ACTIVE_PAGES } from "./GuardedRoute";


class NavBarComponent extends Component {

    render() {
        let currentPage = '';
        return (
            <div>
                <div className="topbar-nav header navbar" role="banner">
                    <nav id="topbar">
                        <ul className="navbar-nav theme-brand flex-row text-center">
                            <li className="nav-item theme-logo">
                                <a href="{WebRoutes}">
                                <img alt="logo" src={AppConstants.APP_LOGO} width={30} />
                                </a>
                            </li>
                            <li className="nav-item theme-text">
                                <Link to={WebRoutes.homePage}><a href="{WebRoutes}" className="nav-link"> Stakeguard </a></Link>
                            </li>
                        </ul>
                        <ul className="list-unstyled menu-categories" >
                            <li className={currentPage == ACTIVE_PAGES.HOME ? " menu single-menu active" : " menu single-menu"}>
                                <Link to={WebRoutes.homePage}>
                                    <div className>
                                        <SVGIcon icon={ICONS.home} />
                                        <span>Home</span>
                                    </div>
                                </Link>

                            </li>

                            <li className={currentPage == ACTIVE_PAGES.ACCOUNT ? " menu single-menu active" : " menu single-menu"}>
                                <Link to={WebRoutes.accountPage}>
                                    <div className>
                                        <SVGIcon icon={ICONS.account} />
                                        <span>Account</span>
                                    </div>
                                </Link>

                            </li>

                            <li className={currentPage == ACTIVE_PAGES.INVEST ? " menu single-menu active" : " menu single-menu"}>
                                <Link to={WebRoutes.investmentPage}>
                                    <div className>
                                        <SVGIcon icon={ICONS.invest} />
                                        <span>Investment</span>
                                    </div>
                                </Link>

                            </li>

                            <li className={currentPage == ACTIVE_PAGES.SETTINGS ? " menu single-menu active" : " menu single-menu"}>
                                <Link to={WebRoutes.investmentPage}>
                                    <div className>
                                        <SVGIcon icon={ICONS.settings} />
                                        <span>Settings</span>
                                    </div>
                                </Link>

                            </li>

                        </ul>
                    </nav>
                </div>
                <div id="bottom-nav-container">
                    <nav class="navbar fixed-bottom navbar-light" id="my-bottom-nav">
                        <div className="d-flex justify-content-around" id="nav-items-list">
                            <Link to={WebRoutes.homePage} className="nav-item">
                                <div className="text-center">
                                    <SVGIcon icon={ICONS.home} />
                                    <span className="nav-title">Home</span>
                                </div>
                            </Link>
                            <Link to={WebRoutes.accountPage} className="nav-item">
                                <div className="text-center">
                                    <SVGIcon icon={ICONS.account} />
                                    <span className="nav-title">Account</span>
                                </div>
                            </Link>
                            <Link to={WebRoutes.investmentPage} className="nav-item">
                                <div className="text-center">
                                    <SVGIcon icon={ICONS.invest} />
                                    <span className="nav-title">Invest</span>
                                </div>
                            </Link>

                            <Link to="#" className="nav-item">
                                <div className="text-center">
                                    <SVGIcon icon={ICONS.settings} />
                                    <span className="nav-title">Settings</span>
                                </div>
                            </Link>

                        </div>
                        {/* <a class="navbar-brand" href="#">Fixed bottom</a> */}
                    </nav>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (globalState) => {
    return {
      ACTIVE_PAGE: globalState.ACTIVE_PAGE,
    };
  };
  export default connect(mapStateToProps, null)(NavBarComponent);
  