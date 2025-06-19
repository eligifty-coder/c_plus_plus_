import React, {useState} from 'react'
import classes from './Cards.module.css'
const Card = ({item,setCount,count,items,setItems}) => {
    const [toggleBtn, setToggleBtn] = useState(false)
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
    }
    
    return (
        
        <li className={classes.card}>
            <div className={classes.positionedEle}>
            <img src={item.display} alt="load" />
            
            <button className={classes.cartBtn} onClick={(e) => handleCartButton(e, item)}>
                <img src="../../icon-add-to-cart.svg" alt="" />Add to Cart
            </button>
            <div className={classes.btnStyle }>
            <button  onClick={(e) => handleCartButton(e, item)}>
                <img src="../../icon-decrement-quantity.svg" alt="Remove Btn" />
            </button>
            <span>0</span>
            <button  onClick={(e) => handleCartButton(e, item)}>
                <img src="../../icon-increment-quantity.svg" alt="Add Btn" />
            </button>
            </div>
            
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