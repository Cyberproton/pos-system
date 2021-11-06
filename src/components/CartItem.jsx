import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
            name: props.food.name,
            category: props.food.category,
            image: props.food.image,
            price: props.food.price,
            quantity: 1,
            total: props.food.price,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.calTotal = this.calTotal.bind(this);
    }

    componentDidMount(){
        this.props.calSubtotal(this.state.total)
    }

    componentWillUnmount(){
        this.props.calSubtotal(-this.state.total)
    }


    increment() {
        this.setState(state => ({
            quantity: state.quantity + 1
        }))
        this.calTotal()
        this.props.calSubtotal(this.state.price)
    }

    decrement() {
        if (this.state.quantity > 1) {
            this.setState(state => ({
                quantity: state.quantity - 1
            }))
            this.calTotal()
            this.props.calSubtotal(-this.state.price)
        }
    }

    calTotal() {
        this.setState(state => ({
            total: state.quantity * state.price
        }))
    }

    render() {
        return (
            <div class="row border-bottom">
                <div class="col-6">
                    <div class="row">
                        <div class="col-8 d-flex align-self-center">
                            <div class="col">
                                <div class="row"><div style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "700"
                                }}>{this.state.index+1}. {this.state.name}</div></div>
                                <div class="row" style={{
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                    marginLeft: "0.6rem"
                                }}><i>{this.state.category}</i></div>
                            </div>
                        </div>
                        <div class="col-4 d-flex justify-content-center">
                            <img src={this.state.image} class="rounded float-left" alt="..." style={{
                                width: "5rem",
                                height: "5rem"
                            }} />
                        </div>
                    </div>
                </div>
                <div class="col-2 text-center align-self-center" style={{
                    fontSize: "1.2rem",
                    fontWeight: "500"
                }}>{this.state.price}$</div>
                <div class="col-2 text-center align-self-center" style={{
                    fontSize: "1.2rem",
                    fontWeight: "500"
                }}>
                    <div class="row">
                        <div class="col-4">
                            <FaMinus onClick={this.decrement} />
                        </div>
                        <div class="col-4">{this.state.quantity}</div>
                        <div class="col-4">
                            <FaPlus onClick={this.increment} />
                        </div>
                    </div>
                </div>
                <div class="col-2 text-center align-self-center" style={{
                    fontSize: "1.2rem",
                    fontWeight: "500"
                }}>
                    <div class="row">
                        <div class="col-4">
                        </div>
                        <div class="col-4" >{this.state.total}$</div>
                        <div class="col-4">
                            <FaTrash color="red" onClick={()=>{this.props.deleteFood(this.props.food)}}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}