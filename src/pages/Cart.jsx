import React, { Component } from "react";
import CartItem from "../components/CartItem";

const foods = []
const m1 = {
    name: 'Hamburger',
    image: "https://cacloaibanh.com/wp-content/uploads/2019/07/banh-hamburger-ca-600x600.jpg",
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
const m3 = {
    name: "Flan",
    image: "https://media.tinmoi.vn/2015/07/15/cach-lam-kem-flan-mem-min-thom-ngon-tai-nha.jpg",
    price: 200,
    category: 'Dessert',
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
const m6 = {
    name: "Crab Soup",
    image: "https://cdnimg.webstaurantstore.com/images/products/large/80273/1831963.jpg",
    price: 100,
    category: 'Starter',
    quantity: 1
}
const m7 = {
    name: "Avocado Smoothie",
    image: "https://file.hstatic.net/200000069234/file/s10__1__b11d50df050241e4af3fb2d4e0f97813_grande.jpg",
    price: 100,
    category: 'Drink',
    quantity: 1
}
foods.push(m1)
foods.push(m2)
foods.push(m3)
foods.push(m4)
foods.push(m5)
foods.push(m6)
foods.push(m7)

export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foods: [],
            subTotal: 0
        }

        this.state.foods = foods;
        this.deleteFood = this.deleteFood.bind(this);
        this.calSubtotal = this.calSubtotal.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }


    calSubtotal() {
        let subTotal = 0
        for (const food of this.state.foods) {
            subTotal += (food.price * food.quantity)
        }
        this.setState({
            subTotal: subTotal
        })
    }

    deleteFood(food) {
        const temp = this.state.foods.filter(item => item !== food)    
        let subTotal = 0
        for (const food of temp) {
            subTotal += (food.price * food.quantity)
        }
        this.setState({
            foods: temp,
            subTotal: subTotal
        })
    }

    updateQuantity(index, i) {
        const temp = this.state.foods
        temp.at(index).quantity = temp.at(index).quantity + i
        this.setState({
            foods: temp
        })
        this.calSubtotal()
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

                    {this.state.foods.map(food => {
                        return (
                            <CartItem key={"key-" + food.name + this.state.foods.indexOf(food)} index={this.state.foods.indexOf(food)} food={food} deleteFood={this.deleteFood} updateQuantity={this.updateQuantity} />
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