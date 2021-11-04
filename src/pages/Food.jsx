import React, { Component } from "react";

export default class Food extends Component {
    constructor(props) {
        super(props)

        this.state.foods = []

        const foods = []
        const m1 = {
            name: 'Hamburger',
            image: "https://cacloaibanh.com/wp-content/uploads/2019/07/banh-hamburger-ca-600x600.jpg",
            price: 200,
            category: 'Starter',
        }
        const m2 = {
            name: "Coca",
            image: "https://product.hstatic.net/1000126467/product/07140303_7158a3f3683f4803a3e2f0431676117e_bea546c99e3c4d709ebe43e31cc36def_grande.jpg",
            price: 200,
            category: 'Drink',
        }
        const m3 = {
            name: "Flan",
            image: "https://media.tinmoi.vn/2015/07/15/cach-lam-kem-flan-mem-min-thom-ngon-tai-nha.jpg",
            price: 200,
            category: 'Dessert',
        }
        const m4 = {
            name: "Beef Steak",
            image: "http://bizweb.dktcdn.net/thumb/grande/100/405/121/products/7e2480e3-45b9-477e-9604-5b21ce11296e.jpg?v=1627120558960",
            price: 10000,
            category: 'Main',
        }
        const m5 = {
            name: "Salad",
            image: "http://product.hstatic.net/1000242782/product/salad_hai_san_copy_9d527b08f0b146a0a0da13bcbcb1cce7_grande.jpg",
            price: 100,
            category: 'Starter',
        }
        const m6 = {
            name: "Crab Soup",
            image: "https://cdnimg.webstaurantstore.com/images/products/large/80273/1831963.jpg",
            price: 100,
            category: 'Starter',
        }
        const m7 = {
            name: "Avocado Smoothie",
            image: "https://file.hstatic.net/200000069234/file/s10__1__b11d50df050241e4af3fb2d4e0f97813_grande.jpg",
            price: 100,
            category: 'Drink',
        }
        foods.push(m1)
        foods.push(m2)
        foods.push(m3)
        foods.push(m4)
        foods.push(m5)
        foods.push(m6)
        foods.push(m7)
        
        this.state.foods = foods
    }

    state = {
        foods: [],
        filteredFoods: [],
        // All, Starter, Main, Drink, Dessert
        currentCategory: "All",
    }

    render() {
        const foods = this.renderFoods();
        const categories = this.renderCategories();

        return (
            <div className="container mt-5">
                <h4>Categories</h4>
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-5 g-3 justify-content-around">
                    {categories}
                </div>
                <h4 className="mt-3">Category: {this.state.currentCategory}</h4>
                <div className="row row-cols-xs-2 row-cols-sm-4 row-cols-md-5 g-4">
                    {foods}
                </div>
            </div>
        )
    }

    renderFoods() {
        const foodCards = []
        for (const food of this.state.foods) {
            foodCards.push(
                <div className="col">
                    <div className="card">
                        <img src={food.image} className="card-img-top" alt="Food" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{food.name}</h5>
                                <p className="card-text text-danger">Price: {food.price}</p>
                            </div>
                    </div>
                </div>
            )
        }
        return foodCards
    }

    // Hien thi card category
    renderCategories() {

    }

    // Luu food vao filteredFoods
    filterFoodsByCategory() {

    }
}