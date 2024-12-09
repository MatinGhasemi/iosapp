'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const User = () => {
    const [username,setUsername] = useState("");
    const router = useRouter();

    useEffect(()=>{
        let name ;
        const cookies = document.cookie.split(";")
        cookies.forEach((i)=>{
            const items = i.split("=");
            if (items[0]===" username" || items[0] === "username"){
                name = items[1]
            }
        })
        if (name === undefined)
            router.push("/signup")
        else setUsername(name)
    },[])

    return ( 
        <div className="text-white flex items-center gap-4">
            <div className="w-16 h-16 bg-lighBlue-transparent flex-center rounded-full"><FaUser size={26}/></div>
            <p className="text-xl font-bold">{username}</p>
        </div>
     );
}
 
export default User;