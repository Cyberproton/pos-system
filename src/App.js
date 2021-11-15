import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Food from "./pages/Food";
import Payment from "./pages/Payment";
import _404_ from "./pages/_404_";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

const foods = []
const m1 = {
  name: 'Hamburger',
  image: "http://product.hstatic.net/200000291375/product/item_06_81ec186cbf674fc89d6cd50c1e00298d_grande.jpg",
  price: 200,
  category: 'Starter',
  quantity: 1
}
const m2 = {
  name: "Coca",
  image: "https://product.hstatic.net/1000126467/product/07140303_7158a3f3683f4803a3e2f0431676117e_bea546c99e3c4d709ebe43e31cc36def_grande.jpg",
  price: 200,
  category: 'Drink',
  quantity: 1
}
const m4 = {
  name: "Beef Steak",
  image: "http://bizweb.dktcdn.net/thumb/grande/100/405/121/products/7e2480e3-45b9-477e-9604-5b21ce11296e.jpg?v=1627120558960",
  price: 10000,
  category: 'Main',
  quantity: 1
}
const m5 = {
  name: "Salad",
  image: "http://product.hstatic.net/1000242782/product/salad_hai_san_copy_9d527b08f0b146a0a0da13bcbcb1cce7_grande.jpg",
  price: 100,
  category: 'Starter',
  quantity: 1
}
foods.push(m1)
foods.push(m2)
foods.push(m4)
foods.push(m5)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.updateItemQuantity = this.updateItemQuantity.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    let it = localStorage.getItem("items")
    if (it == null) {
      it = foods.slice()
    } else {
      it = JSON.parse(it)
    }
    this.state = {
      items: it,
    }
  }

  updateItemQuantity(index, quantity) {
    const temp = this.state.items
    temp.at(index).quantity = temp.at(index).quantity + quantity
    this.setState({
      items: temp
    })
    localStorage.setItem("items", JSON.stringify(temp))
  }

  deleteItem(item) {
    const temp = this.state.items.filter(it => it !== item)
    this.setState({ items: temp })
    localStorage.setItem("items", JSON.stringify(temp))
  }

  addItem(item) {
    const index = this.state.items.findIndex(it => it.name === item.name)
    const temp = this.state.items
    if (index === -1) {
      temp.push(item)
    } else {
      temp[index].quantity += item.quantity
    }
    this.setState({ items: temp })
    localStorage.setItem("items", JSON.stringify(temp))
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path={"/"} component={() => <Food addItem={this.addItem}/>}/>
          <Route exact path={"/cart"} component={() => <Cart items={this.state.items} updateItemQuantity={this.updateItemQuantity} addItem={this.addItem} deleteItem={this.deleteItem} />} />
          <Route exact path={"/payment"} component={() => <Payment items={this.state.items}/>} />
          <Route component={_404_} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
