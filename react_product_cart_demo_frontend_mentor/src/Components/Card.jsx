import React from 'react'
import classes from './Cards.module.css'
const Card = ({item,setCount,count,items,setItems}) => {
    const handleCartButton = (e, item)=>{
        e.preventDefault()
        setItems(prev=>prev.map(ele=>{
            if(item.id === ele.id){
                const newCount = ele.count + 1 
                return {
                    ...ele,
                    count:newCount
                }
            }
            return ele
        }))
        console.log(item.count, item.name, )
        console.log(items)
    }
    
    return (
        
        <li className={classes.card}>
            <div className={classes.positionedEle}>
            <img src={item.display} alt="load" />
            <button onClick={(e) => handleCartButton(e, item)}>
                <img src="../../icon-add-to-cart.svg" alt="" />Add to Cart
            </button>
            </div>
            <section className={classes.text}>
                <span className={classes.category}>{item.category}</span>
                <h5 className={classes.name}>{item.name}</h5>
                <span className={classes.price}>${item.price}</span>
            </section>
        </li>
    )
}

export default Card