import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
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

function App() {
  return (
    <div>
        <Router>
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
  );
}

export default App;
