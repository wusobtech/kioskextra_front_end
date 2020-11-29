import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Home from './pages/Home';

function App() {
  return (
    <div>
        <Router>
            <SideBar />
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
