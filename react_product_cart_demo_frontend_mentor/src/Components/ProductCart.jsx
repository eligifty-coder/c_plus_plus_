import React, { useState,useEffect } from 'react';
import classes from './ProductCart.module.css'
import Products from './Products'
import Cart from './Cart'
import data from './data.json'
import {modifyData, handleResize,handleScreenSizeChange} from './functionFile'

const ProductCart = () => {
    const [items, setItems] = useState(data)
    const [count, setCount] = useState(0)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    
    console.log(screenSize,'screenSize')
    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", ()=>handleResize(screenSize, setScreenSize))
    },[handleResize])
    const modify = (setItems)=>{
        setItems(prev=>{
            return prev.map(data=>{
                return {
                    ...data,
                    count:0,
                    id: data.name+ Math.random() * prev.length,
                }
            })
        })
    }
    useEffect(()=>{
        // add id and count prop to the item state
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
        // ()=>handleScreenSizeChange(items,screenSize,setItems)
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
        
        // map items
        // const newData = items.map(item=>{

        //     if(screenSize <=375){
        //         let singleItem = item
        //         return {
        //             ...item,
        //             display:item.image.mobile
        //         }
        //     }else if (screenSize >375 & screenSize < 1440){
        //         let singleItem = item
        //         console.log(singleItem,singleItem.image.tablet,'singleItem')
        //         return {
        //             ...singleItem,
        //             display:singleItem.image.tablet
        //         }
        //     }else if (screenSize >=1440){
        //         return {
        //             ...item,
        //             display:item.image.desktop
        //         }
        //     }
        // })
        // console.log(items,'homo')
    },[screenSize])
    console.log(items,'prev')
    return (
    <div>
        <Products items={items} setItems={setItems} />
        <Cart/>
    </div>
    )
}

export default ProductCart