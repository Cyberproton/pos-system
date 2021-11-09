import React, { Component } from "react";
import CartItem from "../components/CartItem";

export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subTotal: 0
        }

        this.deleteFood = this.deleteFood.bind(this);
        this.calSubtotal = this.calSubtotal.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }


    calSubtotal() {
        let subTotal = 0
        for (const food of this.props.items) {
            subTotal += (food.price * food.quantity)
        }
        this.setState({
            subTotal: subTotal
        })
    }

    deleteFood(food) {
        this.props.deleteItem(food)   
        let subTotal = 0
        for (const food of this.props.items) {
            subTotal += (food.price * food.quantity)
        }
        this.setState({
            subTotal: subTotal
        })
    }

    updateQuantity(index, i) {
        this.props.updateItemQuantity(index, i)
    }

    componentDidMount(){
        this.calSubtotal();
    }

    render() {
        return (
            <div>
                <h1 class="text-center">YOUR CART</h1>
                <div class="my-5 container">
                    <div class="row px-2 bg-secondary" style={{
                        fontWeight: "600"
                    }}>
                        <div class="p-2 col-6 text-white text-left">ORDERED DISHES</div>
                        <div class="p-2 col-2 text-white text-center">PRICE</div>
                        <div class="p-2 col-2 text-white text-center">QUANTITY</div>
                        <div class="p-2 col-2 text-white text-center">TOTAL</div>
                    </div>

                    {this.props.items.map(food => {
                        return (
                            <CartItem key={"key-" + food.name + this.props.items.indexOf(food)} index={this.props.items.indexOf(food)} food={food} deleteFood={this.deleteFood} updateQuantity={this.updateQuantity} />
                        )
                    })}
                    <div class="row justify-content-end mt-5" style={{
                        fontSize: "2rem",
                        fontWeight: "600"
                    }}>Subtotal: {this.state.subTotal}$</div>
                    <div class="d-flex flex-row-reverse">
                        <a href="payment"><button style={{
                                backgroundColor: "green",
                                color: "white",
                                fontSize: "1.5rem",
                                fontWeight: "600",
                                border: "none",
                                borderRadius: "10px",
                                padding: "0.5rem",
                                width: "200px"
                            }}>CHECKOUT</button></a>
                    </div>
                </div>
            </div >
        )
    }
}