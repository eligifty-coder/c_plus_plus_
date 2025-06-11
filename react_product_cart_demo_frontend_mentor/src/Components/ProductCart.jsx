import React, { useState,useEffect } from 'react';
import classes from './ProductCart.module.css'
import Products from './Products'
import Cart from './Cart'
import data from './data.json'

const ProductCart = () => {
    const [items, setItems] = useState(data)

    useEffect(()=>{
        const newData = items.map(item=>{
            return {
                ...item,
                id: item.name+ Math.random() * items.length,
                count:0
            }
        })
        setItems(newData)
    },[])
    const handleResize = () => {
        
        const newData = items.map(item=>{
            const itemObj = {...item, display:'none'}
            
            if(window.innerWidth >= 1440){

                return {
                    ...itemObj,
                    display: itemObj.image.desktop
                }
            }else if(window.innerWidth >375 & window.innerWidth < 1280  ){
                return {
                    ...itemObj,
                    display: itemObj.image.tablet
                }
            }else{
                return{
                    ...itemObj,
                    display: itemObj.image.mobile
                }
            }
        })

        setItems(newData)
    }
    
    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[handleResize,items])
    console.log(items, 'items')
    return (
    <div>
        <Products/>
        <Cart/>
    </div>
    )
}

export default ProductCart