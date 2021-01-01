import { React, useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import { createStore, applyMiddleware } from "redux";
import { useDispatch, useSelector, Provider } from "react-redux";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const store = createStore(() => [], {}, applyMiddleware());

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Provider store={store}>
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
                    <ul className="ps-tab-list">
                      <li className="active"><a href="#sign-in">Login</a></li>
                      
                    </ul>
                    <div className="ps-tabs">
                      <div className="ps-tab active" id="sign-in">
                        <div className="ps-form__content">
                          <h5>Log In Your Account</h5>
                          <Form onSubmit={handleLogin} ref={form}>
                            <div className="form-group">
                              <Input className="form-control" type="email" name="email" value={email} onChange={onChangeEmail} validations={[required]} placeholder="Email address" />
                            </div>
                            <div className="form-group form-forgot">
                              <Input className="form-control" type="password" name="password" value={password} onChange={onChangePassword} validations={[required]} placeholder="Password" /><a href>Forgot?</a>
                            </div>
                            <div className="form-group">
                              <div className="ps-checkbox">
                                <input className="form-control" type="checkbox" id="remember-me" name="remember-me" />
                                <label htmlFor="remember-me">Rememeber me</label>
                              </div>
                            </div>
                            <div className="form-group submit">
                              <button className="ps-btn ps-btn--fullwidth" disabled={loading}>
                                  {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  )}
                                  <span>Login</span>
                              </button>
                            </div>
                              {message && (
                                <div className="form-group">
                                  <div className="alert alert-danger" role="alert">
                                    {message}
                                  </div>
                                </div>
                              )}
                              <CheckButton style={{ display: "none" }} ref={checkBtn} />
                          </Form>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="ps-section__right">
                  <figure className="ps-section__desc">
                    <figcaption>Sign in today and you will be able to:</figcaption>
                    <p>KioskExtra Buyer Protection has you covered from click to delivery. Sign up or sign in and you will be able to:</p>
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
      </div>
      </Provider>
  );
}

export default Login;