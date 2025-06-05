import React from 'react'

const ProductInfo = () => {
    const product  = {
        name:"laptop",
        price: '1200',
        availability: 'In stock'
    }
    return (
    <div>
        <h1>Name: {product.name} </h1>
        <h2>Price: ${product.price} </h2>
        <h3>availability: {product.availability} </h3>
    </div>
    )
}

export default ProductInfo