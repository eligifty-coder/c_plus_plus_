import React from 'react'
import classes from './Cart.module.css'
const Cart = () => {
    return (
    <div className={classes.cart}>
        <h2>Your Cart (0)</h2>
        <div className={classes.img}>
        <img src="../../illustration-empty-cart.svg" alt="" />
        </div>
        <p>Your added items will appear here</p>
    </div>
    )
}

export default Cart