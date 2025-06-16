import React from 'react'
import classes from './Cards.module.css'
const Card = ({item}) => {
    console.log(item.display)
    return (
        
        <li className={classes.card}>
            <img src={item.display} alt="load" />
            <section className={classes.text}>
                <span className={classes.category}>{item.category}</span>
                <h5>{item.name}</h5>
                <span className={classes.name}>${item.price}</span>
            </section>
        </li>
    )
}

export default Card