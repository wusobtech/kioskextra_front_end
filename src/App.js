import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, Provider } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom" ;
import { createStore, applyMiddleware } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Vendor_Register from './pages/Vendor_Register';
import Order_tracking from './pages/Order_tracking';

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };

  const store = createStore(() => [], {}, applyMiddleware());
  return (
    <Provider store={store}>
    
    <div>
      
        <Router history={history}>
            <SideBar />
            <Header />
            
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/login" component={Login}/>
              <Route  path="/register" component={Register}/>
              <Route  path="/wishlist" component={wishlist}/>
              <Route  path="/cart" component={Cart}/>
              <Route  path="/vendor_register" component={Vendor_Register}/>
              <Route  path="/order_tracking" component={Order_tracking}/>
            </Switch>
            
            <Footer />
        </Router>
    </div>
    </Provider>
  );
}

export default App;
