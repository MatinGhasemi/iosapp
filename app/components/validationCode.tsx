'use client'

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const ValidationCode = () => {
    const router = useRouter();

    const first = useRef<HTMLInputElement|null>(null);
    const second = useRef<HTMLInputElement|null>(null);
    const third = useRef<HTMLInputElement|null>(null);
    const forth = useRef<HTMLInputElement|null>(null);
    const inputFields = [first,second,third,forth]

    const typedValue = (e:React.KeyboardEvent<HTMLInputElement>,i:number)=>{
        if (e.key === "Backspace"){
            if (i > 1){
                e.currentTarget.value = ""
                inputFields[i-2].current?.focus();
            }
        }else{
            e.preventDefault()
            e.currentTarget.value = e.key
            if (i < inputFields.length)
                inputFields[i].current?.focus();
            else 
                router.push("/signup/identity")
        }
    }
    
    return ( 
        <div className="w-layout">
            <div className="bg-lighBlue-transparent relative -bottom-8 h-24 -z-10 rounded-xl">
                <div className="pt-3 text-center">
                    <p className="text-lighBlue-normal">PASTE FROM SMS</p>
                    <p className="text-lighBlue-light font-bold">0349</p>
                </div>
            </div>
            <div className="bg-background h-48 rounded-t-3xl z-10">
                <div className="flex justify-around pt-12 text-white">
                    <input ref={first} onKeyDown={e=>{typedValue(e,1)}} className="w-14 bg-transparent border-grey-normal text-center focus:outline-none border-b" type="number" />
                    <input ref={second} onKeyDown={e=>{typedValue(e,2)}} className="w-14 bg-transparent border-grey-normal text-center focus:outline-none border-b" type="number" />
                    <input ref={third} onKeyDown={e=>{typedValue(e,3)}} className="w-14 bg-transparent border-grey-normal text-center focus:outline-none border-b" type="number" />
                    <input ref={forth} onKeyDown={e=>{typedValue(e,4)}} className="w-14 bg-transparent border-grey-normal text-center focus:outline-none border-b" type="number" />
                </div>
                <p className="text-center text-grey-light pt-7">Enter Any Code You Like This App is Demo</p>
            </div>
        </div>
     );
}
 
export default ValidationCode;