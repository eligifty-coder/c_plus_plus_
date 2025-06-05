import React from 'react'

const Greetings = () => {
    const greet = "Good day"
    const date = new Date()
    const name = 'John'

    const currentDate = date.getDate()+ '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    
    return (
    <div>
        <h1>{greet}</h1>
        <h1>{name}</h1>
        <p>Date: {currentDate}</p>

    </div>
    )
}

export default Greetings