import React from 'react'
import classes from './Products.module.css'
import Card from './Card'

const Products = ({items,setItems,setCount, count}) => {
    const mappedItems = items.map((item, index)=>{
        return <Card item={item} setItems={setItems} items={items} key = {index} setCount={setCount}  count ={count}/>
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