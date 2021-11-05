import React, { Component } from "react";

export default class Cart extends Component {
    render() {
        return (
            <div>
                <h1 class="text-center ">CART</h1>
                <div class="mt-5 container">
                    <div class="row-sm justify-content-center">
                        <div class="col-8">
                            <div class="row-sm bg-secondary">
                                <div class="p-2 col-6 text-white text-center">ORDERED DISHES</div>
                                <div class="p-2 col-2 text-white text-center">PRICE</div>
                                <div class="p-2 col-2 text-white text-center">QUANTITY</div>
                                <div class="p-2 col-2 text-white text-center">TOTAL</div>
                            </div>

                            
                            <div class="row">
                                <div class="p-2 col-6">
                                    <div class="row">
                                        <div class="col-4 d-flex justify-content-center">
                                            <img src="https://tiembanhdcious.com/upload/product/banh-hamburger-ngon-bo-re-dcious-3826.jpg" class="rounded float-left" alt="..." style={{
                                                width: "5rem",
                                                height: "5rem"
                                            }} />
                                        </div>
                                        <div class="col-8 d-flex border align-self-center">
                                            <div class="row"><div style={{
                                                fontSize:"1rem",
                                                fontWeight: "700"
                                            }}>1. FOOD TITLE</div></div> 
                                            <div class="row"><div style={{
                                                fontSize:"1rem",
                                                fontWeight: "700"
                                            }}>1. FOOD TITLE</div></div>    
                                        </div>
                                    </div>

                                </div>
                                <div class="p-2 col-2">PRICE</div>
                                <div class="p-2 col-2">QUANTITY</div>
                                <div class="p-2 col-2">TOTAL</div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        )
    }
}