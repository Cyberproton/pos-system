import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Food from "./pages/Food";
import Payment from "./pages/Payment";
import _404_ from "./pages/_404_";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path={"/"} component={Food}/>
        <Route exact path={"/cart"} component={Cart}/>
        <Route exact path={"/payment"} component={Payment}/>
        <Route component={_404_}/>
      </Switch>
      <Footer/>
    </Router>
  );
}
