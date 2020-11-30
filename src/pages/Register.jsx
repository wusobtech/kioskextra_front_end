import { React, Component } from 'react';

export default class Register extends Component{
    render(){
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
                        <form className="ps-form--account ps-tab-root" action="link.html" method="get">
                          <ul className="ps-tab-list">
                            <li><a href="#sign-in">Login</a></li>
                            <li className="active"><a href="#register">Register</a></li>
                          </ul>
                          <div className="ps-tabs">
                            <div className="ps-tab" id="sign-in">
                              <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                  <input className="form-control" type="text" placeholder="Username or email address" />
                                </div>
                                <div className="form-group form-forgot">
                                  <input className="form-control" type="text" placeholder="Password" /><a href>Forgot?</a>
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
                            </div>
                            <div className="ps-tab active" id="register">
                              <div className="ps-form__content">
                                <h5>Register An Account</h5>
                                <div className="form-group">
                                  <input className="form-control" type="text" placeholder="Username or email address" />
                                </div>
                                <div className="form-group">
                                  <input className="form-control" type="text" placeholder="Password" />
                                </div>
                                <div className="ps-form__decs">
                                  <div className="ps-radio">
                                    <input className="form-control" type="radio" id="user-type-1" name="user-type" />
                                    <label htmlFor="user-type-1">I am a customer</label>
                                  </div>
                                  <div className="ps-radio">
                                    <input className="form-control" type="radio" id="user-type-2" name="user-type" />
                                    <label htmlFor="user-type-2">I am a vendor</label>
                                  </div>
                                  <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<a href="#">privacy policy.</a></p>
                                </div>
                                <div className="form-group submit">
                                  <button className="ps-btn ps-btn--fullwidth">Register</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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
                        <div className="ps-section__coupon"><span>$25</span>
                        <   aside>
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
            </div>
        );
    }
}