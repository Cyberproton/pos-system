import React, { Component } from "react";
import { FaBackspace, FaCcVisa, FaCcMastercard } from "react-icons/fa";

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

    componentDidMount() {
        this.CalSubtotal();
    }

    render() {
        return (
            <div class="container mb-5">
                <div className="row">
                    <div className="col col-2"></div>
                    <div className="col col-8">
                        <div class="row my-5">
                            <div class="col-3 d-flex align-items-center">
                                <a href="cart">
                                    <button type="button" class="btn fs-5"><FaBackspace /> Back</button>
                                </a>
                            </div>
                            <div class="col-6 d-flex align-items-center justify-content-center">
                                <h1 class="text-center">PAYMENT</h1>
                            </div>
                            <div className="col-3"></div>
                        </div>
                        <hr />
                        <div class="row mb-3 bg-danger text-light align-items-center p-2">
                            <div class="col ms-3">
                                <div className="row fs-4 fw-bold">TOTAL</div>
                                <div className="row">
                                    Including {this.props.items.length} items
                                </div>
                            </div>
                            <div class="col">
                                <h4 class="text-end m-0">{this.state.subTotal} $</h4>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div className="row">
                                <div className="col d-flex align-items-center">
                                    <label for="formGroupExampleInput" class="form-label fw-bold">Payment Methods</label>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <h2 className=""><FaCcVisa /></h2>
                                    <h2 className="ms-2"><FaCcMastercard /></h2>
                                </div>
                            </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Credit card / Debit Card</option>
                                <option value="2">MOMO</option>
                                <option value="3">Cash</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label fw-bold">Card Number</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Card Number" />
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="formGroupExampleInput2" class="form-label fw-bold">MM/YY</label>
                                <input type="text" class="form-control" placeholder="MM/YY" aria-label="First name" />
                            </div>
                            <div class="col">
                            <label for="formGroupExampleInput2" class="form-label fw-bold">CVV</label>
                                <input type="text" class="form-control" placeholder="CVV" aria-label="Last name" />
                            </div>
                        </div>
                        <div class="d-grid gap-2 mb-3 mt-5">
                            <button class="btn btn-primary btn-lg" type="button">PAY NOW</button>
                        </div>
                        <div className="d-grid">
                            <a href="cart" class="btn btn-outline-secondary mb-3">Cancel Payment</a>
                        </div>
                        <h6 class="text-end mt-2">Terms Of Service</h6>
                    </div>
                    <div className="col col-2"></div>
                </div>
            </div>
        )
    }
}