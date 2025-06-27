import React from 'react'
import classes from './OrderModal.module.css'
import { totalOrder,confirmOrder } from './functionFile'
const OrderModal = ({items, setItems, setOrderModal}) => {
    const ordereditems = items.map((ele,id)=>{
        if(ele.count){
            return <li key={ele.id} className={classes.orderList}>
            <div className={classes.orderDetails}>
                <img src={ele.display} alt="order Image" />
                <div className={classes.details} >
                <h5>{ele.category}</h5>
                <p className={classes.price}> <span className={classes.redSpan}>{ele.count}x</span> @{(ele.price).toFixed(2)}  </p>
                </div>
                <span className={classes.total}>${(ele.count * ele.price).toFixed(2) }</span>
            </div>
        </li>
        }
    })
    const totalOrders = totalOrder(items,0)
    const handleNewOrder = (e)=>{
        e.preventDefault()
        setItems(prev=>prev.map(ele=>{
            return {
                ...ele,
                count:0
            }
        }))
        confirmOrder(setOrderModal)
    }
    return (
    <div className={classes.orderModal}>
        <div className={classes.header}>
            <img src="../../../icon-order-confirmed.svg" alt="" />
            <h2>Order Confirmed</h2>
            <span>we hope you enjoy your food!</span>
        </div>
        <div className={classes.orderLists} >
            {ordereditems}
            <div className={classes.orderTotal}>
                <span>Order Total</span>
                <h3>${totalOrders.toFixed(2)} </h3>
            </div>
        </div>
        <button className={classes.confirmOrder} type="button" onClick={e=>handleNewOrder(e,setOrderModal)}>Start New Order</button>
    </div>
    )
}

export default OrderModal