import React from 'react'
import classes from './Cart.module.css'
const Cart = ({items}) => {
    const initialValue  = 0
    const totalProductCount = items.reduce((acc,cur) => acc + cur.count, initialValue)

    const cartItmes = items.map((ele,id)=>{
        if(ele.count){
            return <l1 key={ele.id}>
            <div className={classes.cartDetails}>
                <h5>{ele.category}</h5>
                <p> <span>{ele.count}X</span> @{(ele.price).toFixed(2)} {(ele.count * ele.price).toFixed(2) } </p>
            </div>
            <button className={classes.cancelBtn}>
                <img src="../../icon-remove-item.svg" alt="Remove item Btn" />
            </button>
        </l1>
        }
    })
    const cartEmpty  =  <div className={classes.cartOrder}>
    
    <div className={classes.img}>
    <img src="../../illustration-empty-cart.svg" alt="" />
    </div>
    <p>Your added items will appear here</p>
    </div>
    return (
    <div className={classes.cart}>
        <h2>Your Cart ({totalProductCount})</h2>
        {totalProductCount? cartItmes :cartEmpty}
        {totalProductCount? <div className={classes.ConfirmOrder}>
            <button>Confirm Order</button>
        </div>:''}
    </div>
    )
}

export default Cart