'use client'

import { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../action/cartAction";

const AddToCart = ({id}:{id:string|undefined}) => {

    const [component,setComponent] = useState(
        <div className="w-8 h-8 border mx-auto border-r-grey-normal rounded-full animate-spin"></div>
    )

    const cartDetail = ()=>{
        const cart = localStorage.getItem("cart"); 
        if (cart){
            const count = JSON.parse(decodeURIComponent(cart))
            if (id)
                if (count[id])
                    setComponent(
                        <>
                            <p onClick={()=>updateAdd(id,"decrement")}>Remove</p>
                            <p>{count[id].q}</p>
                            <p onClick={()=>{updateAdd(id,"increment")}}>+Add</p>
                        </>
                    )
                else 
                    setComponent(
                        <button onClick={()=>updateAdd(id,"increment")} className="text-center w-full">Add to cart</button>
                    )
        }else
            setComponent(<button onClick={()=>updateAdd(id,"increment")} className="text-center w-full">Add to cart</button>)
    }

    useEffect(()=>{
        cartDetail()
    },[])

    const updateAdd = (id:string|undefined,type:string)=>{
        setComponent(
            <div className="w-8 h-8 border mx-auto border-r-grey-normal rounded-full animate-spin"></div>
        )
        if (id)
            if (type==="increment")
                addToCart(id)
            else removeFromCart(id)
            cartDetail()
    }
    
    return ( 
        <div className="flex justify-between px-2 bg-black text-white w-full py-3 rounded mx-auto">
            {component}
        </div>
     );
}
 
export default AddToCart;