'use client'

import Footer from "@/app/components/footer";
import { ProductType } from "@/app/interfaces/interFace";
import url from "@/app/production";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import products from '@/app/api/products.json';
import { FiTrash2 } from "react-icons/fi";
import { removeFromCart } from "@/app/action/cartAction";
import CartSkeleton from "@/app/skeleton/cartSkeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Star = () => {
    const router = useRouter();

    const [product,setProduct] = useState<ProductType[]>([]);
    const [quantity,setQuantity] = useState<number[]>([]);
    const [reload,setReload] = useState(false);
    const [total,setTotal] = useState<number>(0)
    const [cartEmpty,setCartEmpty] = useState(false);

    const fetchData = (id_list:string[])=>{
        const newProducts = [...product];
        id_list.forEach((id) => { 
            const newProduct = products.find(item => item.id === id);
            if (newProduct)
                newProducts.push(newProduct)
        }); 
        setProduct(newProducts);

    }

    useEffect(()=>{
        const cart = localStorage.getItem("cart");
        if (cart){
            const cartItems = JSON.parse(decodeURIComponent(cart))
            const ids:string[] = Object.keys(cartItems)
            if (ids.length === 0){
                setCartEmpty(true)
            }
            fetchData(ids)

            const newQuantities = [...quantity]
            ids.forEach((id:string)=>{
                newQuantities.push(cartItems[id].q)
            })
            setQuantity(newQuantities);
            countTotal(newQuantities);
        }else 
            setCartEmpty(true)
    },[reload])

    const reloadCart = (id:string)=>{
        removeFromCart(id);
        setProduct([]);
        setQuantity([]);
        setReload(!reload);
    }

    const countTotal = (quan:number[])=>{
        let totalPrice = 0 ;
        quan.forEach((q)=>{
            totalPrice += q*120
        })
        setTotal(totalPrice)
    }

    const payCart = ()=>{
        const id_list:string[] = [];
        product.forEach((p)=>{
            id_list.push(p.id);
        })
        const payment = localStorage.getItem("payment")
        if (payment === null || undefined){
            localStorage.setItem(
                "payment",
                JSON.stringify([{"p_21":JSON.stringify(id_list)}])
            )
        }else{
            const listPayment = JSON.parse(payment)
            const lastKey = Object.keys(listPayment[listPayment.length-1])[0]
            const lastID = `p_${+lastKey.split("_")[1]+1}`
            
            const obj: { [lastID: string]: string } = {};
            obj[lastID] = JSON.stringify(id_list)
            
            localStorage.setItem("payment",JSON.stringify([...listPayment,obj]))
        }
        localStorage.removeItem("cart")
        router.push('/userpage?userpage')
    }
    
    return ( 
        <div className="mb-16">
            <div className="text-white layout">
                <p className="text-4xl">Cart</p>
                <div className="mt-5 mb-10 space-y-4">
                    {product.length > 0 ?
                    product.map((p,i)=>{
                        return (
                            <div key={i} className="flex items-center gap-4">
                                <Link href={`/product/${p.id}`}>
                                    <div className="w-24 h-32 rounded-3xl bg-white overflow-hidden"><Image className="min-h-32 w-full mx-auto mt-2" src={url+p.img} width={100} height={200} alt="woman"/></div>
                                </Link>
                                <div className="flex-1 text-lg">
                                    <p className="whitespace-nowrap">{p.title}</p>
                                    <p>glacier 1/4 zip</p>
                                    <p className="font-bold mt-2">{p.price}</p>
                                </div>
                                <div className="space-y-2 text-xs">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center border text-lighBlue-light">{quantity[i]}</div>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-lighBlue-light" onClick={()=>reloadCart(p.id)}><FiTrash2 size={16}/></div>
                                </div>
                            </div>
                        )
                    })
                    : cartEmpty ? 
                    <div className="w-full h-52 flex-center flex-col px-6 space-y-3">
                        <p className="text-4xl">Cart Is Empty</p>
                        <Link className="bg-lighBlue-light w-full h-10 flex-center rounded-xl gap-4" href='/products'>
                            <LiaShippingFastSolid size={20}/>
                            <p>Lets go shoping</p>
                        </Link>
                    </div>
                    :
                    <>
                        <CartSkeleton />
                        <CartSkeleton />
                    </>
                    }
                    
                </div>
                {cartEmpty ? <></>
                :
                    <div>
                        <div className="border-b border-grey-light w-full flex gap-4 items-center py-2">
                            <p className="text-grey-light">Total:</p>
                            <p className="font-bold text-lg">${total}</p>
                        </div>
                        <div className="flex h-14 gap-2 mt-2">
                            <div className="min-w-14 h-14 bg-lighBlue-light flex-center rounded-xl">
                                <LiaShippingFastSolid size={20}/>
                                <p className="text-[10px]">FREE</p>
                            </div>
                            <div className="w-full">
                                <button onClick={payCart} className="bg-lighBlue-light h-full w-full rounded-xl">Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
     );
}
 
export default Star;