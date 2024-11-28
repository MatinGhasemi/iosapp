'use client'

import Link from "next/link";
import { useEffect } from "react";
import { FaBell, FaHeart, FaStar } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoChatboxEllipses } from "react-icons/io5";

const Footer = () => {
    
    useEffect(()=>{
        const route:string = (window.location.pathname).split("/")[1]
        if (route==="")
            document.querySelector(`[name=home]`)?.classList.add("text-lighBlue-light")
        else
            document.querySelector(`[name=${route}]`)?.classList.add("text-lighBlue-light")
    },[])

    return ( 
        <div className="fixed bottom-0 left-0 right-0 w-full h-20
         bg-grey-extreme rounded-t-2xl shadow-2xl">
            <div className="flex justify-around items-center h-20">
                <div><FaHeart size={23} className="text-grey-light" /></div>
                <div><Link href={'/chat'}><IoChatboxEllipses name="chat" size={23} className="text-grey-light" /></Link></div>
                <div><Link href={"/"}><GoHomeFill name="home" size={23} className="text-grey-light" /></Link></div>
                <div><FaBell size={23} className="text-grey-light" /></div>
                <div><FaStar size={23} className="text-grey-light" /></div>
            </div>
         </div>
    );
}
 
export default Footer;