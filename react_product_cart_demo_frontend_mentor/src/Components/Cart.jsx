import React from 'react'
import classes from './Cart.module.css'
const Cart = ({items,setItems}) => {
    const handleDecrement = (e, item)=>{
        e.preventDefault()
        setItems(prev=>prev.map(ele=>{
            if(item.id === ele.id){
                const newCount = ele.count >0 ? ele.count - 1 :0
                return {
                    ...ele,
                    count:newCount
                }
            }
            return ele
        }))
    }
    const initialValue  = 0
    const totalProductCount = items.reduce((acc,cur) => acc + cur.count, initialValue)
    const totalOrder = items.reduce((acc,cur) => acc + (cur.count * cur.price), initialValue)

    const cartItems = items.map((ele,id)=>{
        if(ele.count){
            return <li key={ele.id} className={classes.cartList}>
            <div className={classes.cartDetails}>
                <h5>{ele.category}</h5>
                <p> <span className={classes.redSpan}>{ele.count}x</span> @{(ele.price).toFixed(2)} <span className={classes.total}>${(ele.count * ele.price).toFixed(2) }</span> </p>
            </div>
            <button className={classes.cancelBtn} onClick={(e) => handleDecrement(e, ele)}>
                <img src="../../icon-remove-item.svg" alt="Remove item Btn" />
            </button>
        </li>
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
        {totalProductCount? cartItems :cartEmpty}
        {totalProductCount? <div className={classes.ConfirmOrder}>
            <div className={classes.orderTotal}>
                <span>Order Total</span>
                <h3>${totalOrder} </h3>
            </div>
            <div className={classes.carbon}> <p>  <img src="../../../icon-carbon-neutral.svg" alt="" />This is  a <span> carbon-neutral </span> delivery</p> </div>
            <button>Confirm Order</button>
        </div>:''}
    </div>
    )
}

export default Cart