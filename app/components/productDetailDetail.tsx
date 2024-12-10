'use client'

import React, { useRef } from "react";

const ProductDetailDetail = () => {
    const yellow = useRef<SVGSVGElement|null>(null);
    const blue = useRef<SVGSVGElement|null>(null);
    const perple = useRef<SVGSVGElement|null>(null);
    const red = useRef<SVGSVGElement|null>(null);
    const colors = [yellow,blue,perple,red]

    const s = useRef<HTMLDivElement|null>(null);
    const m = useRef<HTMLDivElement|null>(null);
    const lg = useRef<HTMLDivElement|null>(null);
    const xl = useRef<HTMLDivElement|null>(null);
    const twoxl = useRef<HTMLDivElement|null>(null);
    const threexl = useRef<HTMLDivElement|null>(null);
    const sizes = [s,m,lg,xl,twoxl,threexl]

    const fillCheck = (e:React.MouseEvent<HTMLDivElement>)=>{
        colors.map((color)=>{
            color.current?.classList.add("hidden");
        })
        const child = e.currentTarget.childNodes[0] as SVGAElement
        child.classList.remove("hidden");
    }
    
    const changeSize = (e:React.MouseEvent<HTMLDivElement>)=>{
        sizes.forEach((size)=>{
            size.current?.classList.add("opacity-60");
        })
        e.currentTarget.classList.remove("opacity-60");
    }

    return ( 
        <div className="my-8 space-y-6">
            <div className="flex gap-2 justify-center">
                <div onClick={e=>fillCheck(e)} className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-extreme">
                    <svg ref={yellow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <div onClick={e=>fillCheck(e)} className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-extreme">
                    <svg ref={blue} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 hidden">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <div onClick={e=>fillCheck(e)} className="flex items-center justify-center w-9 h-9 rounded-full bg-perple-extreme">
                    <svg ref={perple} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 hidden">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <div onClick={e=>fillCheck(e)} className="flex items-center justify-center w-9 h-9 rounded-full bg-red-extreme">
                    <svg ref={red} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5 hidden">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-center gap-2">
                <div ref={s} onClick={e=>changeSize(e)} className="bg-grey-light w-10 h-10 flex-center opacity-60">s</div>
                <div ref={m} onClick={e=>changeSize(e)} className="bg-grey-light w-10 h-10 flex-center opacity-60">m</div>
                <div ref={lg} onClick={e=>changeSize(e)} className="bg-grey-light w-10 h-10 flex-center">lg</div>
                <div ref={xl} onClick={e=>changeSize(e)} className="bg-grey-light w-10 h-10 flex-center opacity-60">xl</div>
                <div ref={twoxl} onClick={e=>changeSize(e)} className="bg-grey-light w-10 h-10 flex-center opacity-60">2xl</div>
                <div ref={threexl} onClick={e=>changeSize(e)} className="bg-grey-light w-10 h-10 flex-center opacity-60">3xl</div>
            </div>
        </div>
     );
}
 
export default ProductDetailDetail;