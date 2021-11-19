import React, { Component } from "react";
import { FaBackspace } from "react-icons/fa";

export default class Payment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subTotal: 0
        }
    }

    CalSubtotal() {
        let subTotal = 0
        for (const food of this.props.items) {
            subTotal += (food.price * food.quantity)
        }
        this.setState({
            subTotal: subTotal
        })
    }

    componentDidMount(){
        this.CalSubtotal();
    }

    render() {
        return (
            <div class="container">
                <div class="row my-5">
                    <div class="col">
                    <a href="cart">
                        <button type="button" class="btn fs-3"><FaBackspace/> Back</button>
                    </a>
                    </div>
                    <div class="col">
                    <h1 class="text-center">PAYMENT</h1>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="row mb-3 bg-success text-white">
                    <div class="col fs-3 fw-bold">
                    TOTAL
                    </div>
                    <div class="col">
                    <h1 class="text-end">{this.state.subTotal} $</h1>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label fw-bold">Payment Methods</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Credit card</option>
                        <option value="2">Debit Cart</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label fw-bold">Card Number</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Card Number"/>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="MM/YY" aria-label="First name"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="CVV" aria-label="Last name"/>
                    </div>
                </div>
                <div class="d-grid gap-2 mb-3">
                    <button class="btn btn-primary" type="button">PAY NOW</button>
                </div>
                <a href="cart">
                    <button type="button" class="btn btn-danger mb-3">Cancel Payment</button>
                </a>
                <h5 class="text-end">Terms</h5>
            </div>

        )
    }
}