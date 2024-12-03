'use client'

import React, { useRef } from "react";

const ProductFilter = () => {

    const hot = useRef<HTMLDivElement|null>(null);
    const woman = useRef<HTMLDivElement|null>(null);
    const man = useRef<HTMLDivElement|null>(null);
    const undies = useRef<HTMLDivElement|null>(null);
    const filters = [hot,woman,undies,man]

    const hoverFilter = (e:React.MouseEvent<HTMLDivElement>)=>{
        disableAllFilter()
        const childTarget = e.currentTarget.childNodes[0] as HTMLDivElement;
        
        e.currentTarget.classList.add("bg-red-normal");
        childTarget.classList.add("bg-white");
        childTarget.classList.remove("border-grey-normal");
    }

    const disableAllFilter = ()=>{
        filters.forEach((filter)=>{
            const childTarget = filter.current?.childNodes[0] as HTMLDivElement

            filter.current?.classList.remove("bg-red-normal")
            filter.current?.classList.add("bg-grey-extreme")
            childTarget.classList.remove("bg-white")
        })
    }

    return ( 
        <div className="flex gap-3 overflow-auto">
            <div ref={hot} onClick={e=>hoverFilter(e)} className="min-w-20 h-36 bg-red-normal rounded-[40px]">
                <div className="w-16 h-16 mx-auto my-2 rounded-full border bg-white flex items-center justify-center">🔥</div>
                <p className="text-center text-white">Hot</p>
            </div>
            <div ref={woman} onClick={e=>hoverFilter(e)} className="min-w-20 h-36 bg-grey-extreme rounded-[40px]">
                <div className="w-16 h-16 mx-auto my-2 rounded-full border border-grey-normal bg-transparent flex items-center justify-center">👚</div>
                <p className="text-center text-white">Woman</p>
            </div>
            <div ref={man} onClick={e=>hoverFilter(e)} className="min-w-20 h-36 bg-grey-extreme rounded-[40px]">
                <div className="w-16 h-16 mx-auto my-2 rounded-full border border-grey-normal bg-transparent flex items-center justify-center">👕</div>
                <p className="text-center text-white">Man</p>
            </div>
            <div ref={undies} onClick={e=>hoverFilter(e)} className="min-w-20 h-36 bg-grey-extreme rounded-[40px]">
                <div className="w-16 h-16 mx-auto my-2 rounded-full border border-grey-normal bg-transparent flex items-center justify-center">👙</div>
                <p className="text-center text-white">Undies</p>
            </div>
        </div>
     );
}
 
export default ProductFilter;