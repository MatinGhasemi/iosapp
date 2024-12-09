'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaCheckCircle, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import url from "../production";
import { IoTrashOutline } from "react-icons/io5";
import { PiPlus } from "react-icons/pi";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";

interface ImageType{
    src:string
}

interface BuyedItem {
    id:string,
    payed:boolean,
    date:string,
    images:ImageType[]
}


const UserOption = () => {
    const [active,setActive] = useState(false);
    const [favoriteActive,setFavoriteActive] = useState(false);
    const [purchaseActive,setPurchaseActive] = useState(false);
    const [favorite,setFavorite] = useState([
        {src:`${url}Bitmap0.png`},
        {src:`${url}Bitmap1.png`},
        {src:`${url}Bitmap2.png`},
        {src:`${url}Bitmap3.png`},
    ])
    const [purchase,setPurchase] = useState<BuyedItem[]>([])

    const allowMessage = ()=>{
        setActive(!active);
    }

    useEffect(()=>{
        setPurchase([
            {
                id:"23",payed:false,date:"Monday, Januray 05, 2024",images:[
                    {src:`${url}Bitmap1.png`},
                    {src:`${url}Bitmap2.png`},
                ]
            },{
                id:"22",payed:true,date:"Saturday, June 13, 2025",images:[
                    {src:`${url}Bitmap3.png`},
                    {src:`${url}woman_banner.png`},
                    {src:`${url}Bitmap0.png`},
                ]
            }
        ])
    },[])


    const deleteFavorite = (i:number)=>{
        const newList = favorite.filter((_,index)=> index !== i);
        setFavorite(newList);
    }


    return ( 
        <div className="mt-8 divide-y divide-grey-normal">
            <div className="bg-grey-extreme p-4">
                <div onClick={()=>setFavoriteActive(!favoriteActive)} className="text-white flex items-center gap-4">
                    <div className="w-7 h-7 flex-center rounded-lg bg-red-light"><FaHeart size={12}/></div>
                    <p className="flex-1">Favorites</p>
                    <div className=""><BiChevronRight /></div>
                </div>
                <div className={`flex justify-evenly gap-3 flex-wrap ${favoriteActive ? "max-h-96 mt-4" : "max-h-0"} overflow-hidden transition-all duration-300`}>
                    {favorite.length === 0 ? 
                    <div className="text-white my-auto">
                        <p className="text-lg font-bold">There Is No Favorite Products</p>
                        <div className="text-center my-4">
                            <Link className="border-2 border-lighBlue-light px-10 py-2 rounded-2xl text-lighBlue-light" href={'/'}>Explore</Link>
                        </div>
                    </div>
                    : favorite.map((fav,i)=>{
                        return (
                            <div key={i}>
                                <div className="bg-white w-28 h-32 overflow-hidden rounded-lg">
                                    <Image src={fav.src} width={100} height={200} alt={fav.src + i}/>
                                </div>
                                <div className="flex text-white gap-1 py-1">
                                    <div onClick={()=>deleteFavorite(i)} className="p-2 bg-red-normal rounded-xl text-white">
                                        <IoTrashOutline size={24}/>
                                    </div>
                                    <div className="flex bg-lighBlue-normal items-center justify-center w-full rounded-xl">
                                        <p>add</p>
                                        <PiPlus size={24}/>             
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-grey-extreme p-4">
                <div onClick={()=>setPurchaseActive(!purchaseActive)} className="text-white flex items-center gap-4">
                    <div className="w-7 h-7 flex-center rounded-lg bg-yellow-light"><FaCartShopping size={12}/></div>
                    <p className="flex-1">Previous purchase</p>
                    <div className=""><BiChevronRight /></div>
                </div>
                <div className={`text-white gap-3 flex-wrap ${purchaseActive ? "max-h-96 mt-4" : "max-h-0"} overflow-hidden transition-all duration-300`}>
                    {purchase.map((purch,i)=>{
                        return (
                            <div className="mt-2 bg-background" key={i}>
                                <div>
                                    <div className="px-2 py-1">
                                        <div className="text-right">Payment ID : {purch.id}</div>
                                        <div className="flex items-center gap-2 justify-end">
                                            <p className="text-grey-light">{purch.date}</p>
                                            <div>{purch.payed ? <FaCheckCircle className="text-green-500"/> : <IoIosCloseCircle size={19} className="text-red-500"/>}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 px-2 pb-3">
                                        {purch.images.map((img,i)=>{
                                            return (
                                                <div className="bg-white w-24 h-28 overflow-hidden" key={purch.id+i}>
                                                    <Image width={200} height={200} src={img.src} alt={img.src+purch.id}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="text-white flex items-center gap-4 bg-grey-extreme p-4">
                <div className="w-7 h-7 flex-center rounded-lg bg-blue-light"><FaCartShopping size={12}/></div>
                <p className="flex-1">Allow Messages</p>
                <div className={`w-10 h-5 rounded-xl relative ${active ? "bg-lighBlue-light":"bg-black"}`}>
                    <div onClick={allowMessage} className={`absolute w-5 h-5 transition-all bg-white shadow rounded-full ${active ? "left-5":"left-0"}`}></div>
                </div>
            </div>
        </div>
     );
}
 
export default UserOption;