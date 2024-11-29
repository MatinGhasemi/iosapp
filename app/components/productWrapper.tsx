"use client"

import Image from "next/image";
import url from "../production";
import React from "react";


const ProductWrapper = () => {
    const products = [{},{},{},{}]

    const fillHeart = (e:React.MouseEvent<SVGPathElement>)=>{
        if (e.currentTarget.getAttribute("fill")==="#FF464F")
            e.currentTarget.setAttribute("fill","#96A7AF")
        else
            e.currentTarget.setAttribute("fill","#FF464F")
    }

    return ( 
        <div className="mt-8 mb-14 grid grid-cols-2 gap-4">
          {products.map((product,i)=>{
            return (
                <div key={i}>
                  <div className="bg-[#EDF1FA] relative flex justify-end h-56 overflow-hidden rounded-3xl">
                    <Image className="object-cove w-[105px]" src={`${url}Bitmap${i}.png`} width={100} height={200} alt="image"/>
                    <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full left-2 bottom-4">
                      <svg  width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path onClick={e=>fillHeart(e)} d="M5.49972 10C-5.23012 4.05393 2.53003 -3.33855 5.49972 1.64013C8.46988 -3.33855 16.2306 4.05393 5.49972 10Z" fill="#96A7AF"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-grey-light mt-3 mb-1">Belt suit blazer</p>
                    <p className="text-white">$ 120</p>
                  </div>
                </div>
            )
          })}
          {products.map((product,i)=>{
            return (
                <div key={i+5}>
                  <div className="bg-[#EDF1FA] relative flex justify-end h-56 overflow-hidden rounded-3xl">
                    <Image className="object-cove w-[105px]" src={`${url}Bitmap${i}.png`} width={100} height={200} alt="image"/>
                    <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full left-2 bottom-4">
                      <svg  width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path onClick={e=>fillHeart(e)} d="M5.49972 10C-5.23012 4.05393 2.53003 -3.33855 5.49972 1.64013C8.46988 -3.33855 16.2306 4.05393 5.49972 10Z" fill="#96A7AF"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-grey-light mt-3 mb-1">Belt suit blazer</p>
                    <p className="text-white">$ 120</p>
                  </div>
                </div>
            )
          })}
        </div>
     );
}
 
export default ProductWrapper;