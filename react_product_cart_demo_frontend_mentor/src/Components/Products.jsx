import React from 'react'

const Products = ({items,setItems}) => {

    const mappedItems = items.map((item, index)=>{
        return <li key = {index}>
            {item.display}
        </li>
    })
    return (
    <div>{mappedItems}</div>
    )
}

export default Products