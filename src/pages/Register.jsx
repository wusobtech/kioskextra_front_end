import React, { useState, useRef } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";

import Form from "react-validation/build/form";
import { createStore, applyMiddleware } from "redux";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 8 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 8 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
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
                      <li className="active"><a href="#register">Register</a></li>
                    </ul>
                    <div className="ps-tabs">
                      <div className="ps-tab active" id="register">
                        <div className="ps-form__content">
                          <h5>Register An Account</h5>
                          <Form onSubmit={handleRegister} ref={form}>
                            {!successful && (
                              <div>
                                <div className="form-group">
                                  <Input className="form-control" name="name" value={name} onChange={onChangeName} validations={[required]} type="text" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                  <Input className="form-control" name="email" value={email} onChange={onChangeEmail} validations={[required, validEmail]} type="email" placeholder="Email address" />
                                </div>
                                <div className="form-group">
                                  <Input className="form-control" name="password" value={password} onChange={onChangePassword} validations={[required, vpassword]} type="password" placeholder="Password" />
                                </div>
                                <div className="form-group submit">
                                  <button className="ps-btn ps-btn--fullwidth">Register</button>
                                </div>
                              </div>
                            )}
                            {message && (
                              <div className="form-group">
                                <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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
                    <figcaption>Sign up today and you will be able to:</figcaption>
                    <p>KioskExtra Buyer Protection has you covered from click to delivery. Sign up or sign in and you will be able to:</p>
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
      </Provider>
  );
}

export default Register;