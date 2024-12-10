'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ClientSideSetup = ({id,len}:{id:string,len:number}) => {

    const router = useRouter();

    useEffect(()=>{
        if (+id > len){
            router.push("/?home")
        }
    },[])
        

    return (<></>);
}
 
export default ClientSideSetup;