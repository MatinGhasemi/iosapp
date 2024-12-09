'use client'

import Link from "next/link";
import { useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";

const Footer = () => {
    
    useEffect(()=>{
        const route:string = (window.location.href).split("?")[1].split("=")[0]
        if (route=== undefined || null || "")
            document.querySelector(`[name=home]`)?.classList.add("text-lighBlue-light")
        else
            document.querySelector(`[name=${route}]`)?.classList.add("text-lighBlue-light")
    },[])

    return ( 
        <div className="fixed -bottom-1 left-0 right-0 w-full h-20
         bg-grey-extreme rounded-t-2xl shadow-2xl">
            <div className="flex justify-around items-center h-20">
                <div><Link href={'/userpage?userpage'}><FaUser size={20} name="userpage" className="text-grey-light" /></Link></div>
                <div><Link href={'/chat?chat'}><IoChatboxEllipses name="chat" size={23} className="text-grey-light" /></Link></div>
                <div><Link href={"/?home"}><GoHomeFill name="home" size={23} className="text-grey-light" /></Link></div>
                <div><Link href={"/news?news"}><FaBell size={23} name="news" className="text-grey-light" /></Link></div>
                <div><Link href={"/cart?cart"}><IoMdCart size={23} name="cart" className="text-grey-light" /></Link></div>
            </div>
         </div>
    );
}
 
export default Footer;