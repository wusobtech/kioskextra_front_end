import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

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
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
