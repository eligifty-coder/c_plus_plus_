export const modifyData = (items, setItems)=>{
    setItems(prev=>{
        return prev.map(data=>{
            return {
                ...data,
                id: data.name+ Math.random() * prev.length,
                count:0,
            }
        })
    })
    // const newData = items.map(item=>{
    //     return {
    //         ...item,
    //         id: item.name+ Math.random() * items.length,
    //         count:0,
    //         display:'none'

    //     }
    // })
    // setItems(newData)
    
}

export const  modify = (setItems)=>{
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

export const handleResize = (screenSize, setScreenSize) => {
    
    // items.map(item=>{
        if(window.innerWidth >= 1440){
            setScreenSize(window.innerWidth)
            // setItems(prev=>{return {
            //     ...prev,
            //     display: prev.image.desktop
            // }})
            
        }else if(window.innerWidth >375 & window.innerWidth < 1280  ){
            setScreenSize(window.innerWidth)
            // setItems(prev=>{return {
            //     ...prev,
            //     display: prev.image.tablet
            // }})
        }else if(window.innerWidth <=375){
            setScreenSize(window.innerWidth)
            // setItems(prev=>{return {
            //     ...prev,
            //     display: prev.image.mobile
            // }})
        }
        // setItems(items)
    // })


}

export  const  handleScreenSizeChange = (items,screenSize,setItems)=>{
    const newData = items.map(item=>{
        if(screenSize <=375){
            return {
                ...item,
                display:item.image.mobile
            }
        }else if (screenSize >375 & screenSize < 1440){
            return {
                ...item,
                display:item.image.tablet
            }
        }else if (screenSize >=1440){
            return {
                ...item,
                display:item.image.desktop
            }
        }
    })

    setItems(newData)
}

// working functions
export const totalOrder = (items, initialValue) => {

    return items.reduce((acc,cur) => acc + (cur.count * cur.price), initialValue)
}

// confirm Order
export const confirmOrder = (setOrderModal) =>{
    setOrderModal(val=> !val )
}