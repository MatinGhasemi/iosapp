'use client';

import ValidationCode from "@/app/components/validationCode";
import url from "@/app/production";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiChevronDown } from "react-icons/fi";

interface Flag {
    code:string,
    src:string
}

const SignUp = () => {
    const flagsList = useRef<HTMLDivElement|null>(null);
    const validation = useRef<HTMLDivElement|null>(null);
    const blurPage = useRef<HTMLDivElement|null>(null);

    const flags = [
        {code:"+1",src:`${url}flag_icon/usa.png`},
        {code:"+98",src:`${url}flag_icon/Iran.png`},
        {code:"+41",src:`${url}flag_icon/Switzerland.png`},
        {code:"+54",src:`${url}flag_icon/Argentina.png`},
        {code:"+44",src:`${url}flag_icon/England.png`},
        {code:"+39",src:`${url}flag_icon/Italy.png`},
        {code:"+53",src:`${url}flag_icon/Cuba.png`},
        {code:"+82",src:`${url}flag_icon/South Korea.png`},
        {code:"+90",src:`${url}flag_icon/Turkey.png`},
        {code:"+20",src:`${url}flag_icon/Egypt.png`},
        {code:"+31",src:`${url}flag_icon/Netherlands.png`},
    ]
    const [currentFlag,setCurrentFlag] = useState<Flag>({code:"+1",src:`${url}flag_icon/usa.png`});
    const [digit,setDigit] = useState("20 666 13 13")

    const openDropDown = ()=>{
        flagsList.current?.classList.remove("hidden");
    }
    const closeDropDown = ()=>{
        setTimeout(()=>{
            flagsList.current?.classList.add("hidden");
        },50)
    }

    const changeFlag = (flag:Flag)=>{
        setCurrentFlag(flag)
    }
    const openValidation = ()=>{
        if (validation.current){
            validation.current.style.bottom = '-4px';
            blurPage.current?.classList.remove("hidden");
        }
    }
    const maxLimit = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.currentTarget.value.length < 11)
            setDigit(e.currentTarget.value)
    }


    return ( 
        <>
            <div className="layout">
                <div className="mt-24">
                    <div className="w-8 h-8 bg-lighBlue-light rounded-lg mb-6"></div>
                    <p className="text-white font-bold text-3xl mb-1">Sign Up</p>
                    <p className="text-grey-light tracking-wider">to start working</p>
                    <div className="flex gap-4 items-center mt-8 mb-16">
                        <div className="bg-lighBlue-transparent text-white rounded-xl relative">
                            <div onClick={openDropDown} onMouseLeave={closeDropDown} className="flex h-12 w-24 items-center justify-between px-2">
                                <Image className="w-5 h-5" src={currentFlag.src} width={25} height={25} alt="currentflag"/>
                                <p className="text-lighBlue-light">{currentFlag.code}</p>
                                <div>
                                    <FiChevronDown className="text-lighBlue-light"/>
                                </div>
                            </div>
                            <div ref={flagsList} className="w-24 hidden absolute top-14 bg-lighBlue-extreme rounded-xl">
                                {flags.map((flag,i)=>{
                                    return (
                                        <div onClick={()=>changeFlag(flag)} className="flex justify-between items-center p-2" key={i}>
                                            <Image src={flag.src} width={24} height={24} alt={`flag${i}`}/>
                                            <p>{flag.code}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="h-12 w-full">
                            <input onChange={e=>maxLimit(e)} value={digit} type="number" className="bg-transparent h-full w-full focus:outline-none text-grey-light" placeholder="20 666 13 13"/>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link href={'/?home'}>
                            <div className="bg-lighBlue-transparent min-w-14 h-14 rounded-xl flex items-center justify-center"><FiArrowLeft size={24} className="text-lighBlue-light"/></div>
                        </Link>
                        <div onClick={openValidation} className="w-full h-14 rounded-xl bg-lighBlue-light text-white flex items-center justify-center gap-2 text-xl">
                            <p>Next</p>
                            <FiArrowRight size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>            
                <div ref={validation} style={{bottom:'-300px'}} className="fixed w-full left-1/2 -translate-x-1/2 transition-all z-20">
                    <ValidationCode />
                </div>
                <div ref={blurPage} className="absolute hidden w-full h-full top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm"></div>
            </div>
        </>
     );
}
 
export default SignUp;