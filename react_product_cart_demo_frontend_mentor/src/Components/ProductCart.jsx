import React, { useState,useEffect } from 'react';
import classes from './ProductCart.module.css'
import Products from './Products'
import Cart from './Cart'
import data from './data.json'
import {modify, handleResize,} from './functionFile'
import BackDrop from './BackDrop';
import OrderModal from './OrderModal';

const ProductCart = () => {
    const [items, setItems] = useState(data)
    const [count, setCount] = useState(0)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [orderModal, setOrderModal] = useState(false)
    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", ()=>handleResize(screenSize, setScreenSize))
    },[handleResize])
    useEffect(()=>{
        // add id and count prop to the item state
        // trying to outsource this into a function in the functionFIle, is causing an abnormal behavior
        setItems(prev=>{
            return prev.map(data=>{
                return {
                    ...data,
                    count:0,
                    id: data.name+ Math.random() * prev.length,
                }
            })
        })
        
    },[setItems])
    useEffect(()=>{
        setItems(prev=>{
            return prev.map(data=>{
                
                if(screenSize >=1440){
                    
                    return {...data, display:data.image.desktop, }
                }else if(screenSize < 1440  & screenSize > 375){
                    
                    return {...data, display:data.image.tablet, }
                }else if(screenSize <= 375){
                    
                    return {...data, display:data.image.mobile, }
                }
            })
        })
    },[screenSize])
    return (
    <div className={classes.productBg}>
        {orderModal && <BackDrop/>}
        {orderModal && <OrderModal setOrderModal={setOrderModal} items={items} setItems={setItems}  />}
        
        <div className={classes.products}>
        <Products items={items} setItems={setItems} count ={count} setCount= {setCount}  />
        <Cart items={items} setItems={setItems} setOrderModal={setOrderModal} />
    </div>
    </div>
    )
}

export default ProductCart