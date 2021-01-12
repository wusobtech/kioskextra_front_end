import React, { Component } from 'react';
import FormManager from '../app/helpers/FormManager';
import { requiredInputField } from '../app/helpers/Objects';
import AuthenticationRepository from '../app/repository/AuthenticationRepository';
import { authenticationHelper } from '../app/helpers/HelperIndex';
import { LOGIN_REDIRECT } from '../components/includes/GuardedRoute';
import SweetAlertModal from '../components/reusables/modals/SweetAlertModal';
import { connect } from 'react-redux';
import { authLogin } from '../redux/actions';
const authenticationRepository = new AuthenticationRepository();
const formManager = new FormManager();

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLoading: false,
      formData: {
        firstname: { ...requiredInputField, name: "First Name" },
        lastname: { ...requiredInputField, name: "Last Name" },
        email: { ...requiredInputField, name: "Email Address" },
        password: { ...requiredInputField, name: "Password" },
        role: { ...requiredInputField, name: "Account Type" },
      },
      sweetAlert: {
        title: "",
        alertType: "custom",
        content: "",
      }
    };
    this.sweetAlertModalElement = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount() {

  }

  setFormLoading(value) {
    this.setState({
      formLoading: value,
    })
  }

  handleChange(event) {
    this.setState({
      formData: formManager.handleInputChange(this.state.formData, event.target)
    });
  }

  handleCloseModal = () => {
    this.sweetAlertModalElement.current.closeModal();
  }


  handleOpenModal = (title, alertType, content) => {
    this.sweetAlertModalElement.current.openModal(title, alertType, content);
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setFormLoading(true);
    this.handleCloseModal();
    this.handleOpenModal("", "loading", "Authenticating Details...");
    let formFields = formManager.initalizeFormData(event.target.id, true);
    let processReq;
    if (event.target.id === "loginForm") {
      processReq = authenticationRepository.login(formFields);
    }
    else if (event.target.id === "registerForm") {
      processReq = authenticationRepository.register(formFields);
    }
    processReq.then((response) => {
      this.setFormLoading(false);
      if (response.success) {
        authenticationHelper.data().then((authDataResponse) => {
          this.props.authLogin(authDataResponse);
        });
        this.handleCloseModal();
        this.handleOpenModal("", "success", "Login successful. you would be redirected in 5 secs..");
        setTimeout(() => {
          this.handleCloseModal();
          LOGIN_REDIRECT();
        }, 4000);
      }
      else {
        this.props.authLogin({});
        this.handleOpenModal("Error", "error", response.message);
      }
    });
  }


  render() {
    return (
      <div>
        <div className="ps-page--my-account">
          <div className="ps-breadcrumb">
            <div className="container">
              <ul className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>My account</li>
              </ul>
            </div>
          </div>
          <div className="ps-my-account-2">
            <div className="container">
              <div className="ps-section__wrapper">
                <div className="ps-section__left">
                  <div className="ps-form--account ps-tab-root" action="link.html" method="post">
                    <ul className="ps-tab-list">
                      <li className="active"><a href="#sign-in">Login</a></li>
                      <li><a href="#register">Register</a></li>
                    </ul>
                    <div className="ps-tabs">
                      <div className="ps-tab" id="sign-in">
                        <form action="#" method="post" onSubmit={this.handleSubmit} id="loginForm">
                          <div className="ps-form__content">
                            <h5>Log In Your Account</h5>
                            <div className="form-group">
                              <input className="form-control" type="email" name="email" placeholder="Email address" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group form-forgot">
                              <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
                              <a href>Forgot?</a>
                            </div>
                            <div className="form-group">
                              <div className="ps-checkbox">
                                <input className="form-control" type="checkbox" id="remember-me" name="remember-me" />
                                <label htmlFor="remember-me">Rememeber me</label>
                              </div>
                            </div>
                            <div className="form-group submit">
                              <button className="ps-btn ps-btn--fullwidth">Login</button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="ps-tab active" id="register">
                        <form action="" method="post" onSubmit={this.handleSubmit} id="registerForm">
                          <div className="ps-form__content">
                            <h5>Register An Account</h5>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <input className="form-control" type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} required />
                              </div>
                              <div className="form-group col-md-6">
                                <input className="form-control" type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} required />
                              </div>
                            </div>
                            <div className="form-group">
                              <input className="form-control" type="email" name="email" placeholder="Email address" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                              <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
                            </div>
                            <div className="ps-form__decs">
                              <div className="ps-radio">
                                <input className="form-control" type="radio" id="user-type-1" name="role" value="customer" onChange={this.handleChange} required />
                                <label htmlFor="user-type-1">I am a customer</label>
                              </div>
                              <div className="ps-radio">
                                <input className="form-control" type="radio" id="user-type-2" name="role" value="vendor"  onChange={this.handleChange} required />
                                <label htmlFor="user-type-2">I am a vendor</label>
                              </div>
                              <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<a href="#">privacy policy.</a></p>
                            </div>
                            <div className="form-group submit">
                              <button className="ps-btn ps-btn--fullwidth">Register</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-section__right">
                  <figure className="ps-section__desc">
                    <figcaption>Sign up today and you will be able to:</figcaption>
                    <p>MartFury Buyer Protection has you covered from click to delivery. Sign up or sign in and you will be able to:</p>
                    <ul className="ps-list">
                      <li><i className="icon-credit-card" /><span>SPEED YOUR WAY THROUGH CHECKOUT</span></li>
                      <li><i className="icon-clipboard-check" /><span>TRACK YOUR ORDERS EASILY</span></li>
                      <li><i className="icon-bag2" /><span>KEEP A RECORD OF ALL YOUR PURCHASES</span></li>
                    </ul>
                  </figure>
                  <div className="ps-section__coupon"><span>Free</span>
                    <aside>
                      <h5>A small gift for your first month of  subscription</h5>
                      <p>KioskExtra gives a one month free subscription when you register as a vendor. Welcome to KioskExtra!</p>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-newsletter">
          <div className="container">
            <form className="ps-form--newsletter" action="do_action" method="post">
              <div className="row">
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <div className="ps-form__left">
                    <h3>Newsletter</h3>
                    <p>Subcribe to get information about products and coupons</p>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <div className="ps-form__right">
                    <div className="form-group--nest">
                      <input className="form-control" type="email" placeholder="Email address" />
                      <button className="ps-btn">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <SweetAlertModal
          show={false}
          title={this.state.sweetAlert.title}
          alertType={this.state.sweetAlert.alertType}
          content={this.state.sweetAlert.content}
          ref={this.sweetAlertModalElement}
        />
      </div>
    );
  }
}




export default connect(
  null,
  { authLogin }
)(Register);
