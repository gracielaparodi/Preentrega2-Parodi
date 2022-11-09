import React from 'react'
import ShoppingCart from './Assets/Imagenes/shopping-cart.png';


export default function CartWidget() {
    return (
        <div>
            <a href="Cart"> <img src={ShoppingCart} width={35} alt="Carrito" /></a>

        </div>
    )
}