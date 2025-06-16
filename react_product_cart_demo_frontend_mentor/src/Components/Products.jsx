import React from 'react'
import classes from './Products.module.css'
import Card from './Card'

const Products = ({items,setItems}) => {
    const mappedItems = items.map((item, index)=>{
        return <Card item={item}   key = {index}/>
    })
    return (
    <section className={classes.products}>
        <h2>Desserts</h2>
        <div className={classes.productDisplay}>
            {mappedItems}
        </div>
    </section>
    )
}

export default Products