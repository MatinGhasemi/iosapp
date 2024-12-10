import Image from "next/image";
import url from "../production";
import React from "react";

import product from '../api/products.json'
import ProductLike from "./productLike";
import Link from "next/link";
import { ProductType } from "../interfaces/interFace";



const ProductWrapper = () => {
    const products:ProductType[] = product

    return ( 
        <div className="mt-8 mb-14 grid grid-cols-2 gap-4">
          {products.map((product,i)=>{
            return (
                <div key={i+5}>
                  <div className="bg-[#EDF1FA] relative flex justify-end h-56 overflow-hidden rounded-3xl">
                    <Link href={`/product/${product.id}?home`}>
                      <Image className="w-[105px] h-full object-cover" src={url+product.img} width={100} height={200} alt="image"/>
                    </Link>
                    <ProductLike />
                  </div>
                  <div>
                    <Link href={`/product/${product.id}?home`}>
                      <p className="text-grey-light mt-3 mb-1">{product.title}</p>
                    </Link>
                    <p className="text-white">{product.price}</p>
                  </div>
                </div>
            )
          })}
        </div>
     );
}
 
export default ProductWrapper;