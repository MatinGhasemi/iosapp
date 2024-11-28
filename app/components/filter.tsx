'use client'

import React, { useRef } from "react";

const Filter = () => {
    const all = useRef<HTMLDivElement|null>(null);
    const party = useRef<HTMLDivElement|null>(null);
    const camping = useRef<HTMLDivElement|null>(null);
    const filters = [all,party,camping]

    const changeFilter = (e:React.MouseEvent<HTMLParagraphElement>)=>{
        filters.forEach((filter)=>{
            if (filter.current){
                filter.current.classList.remove("bg-lighBlue-light");
                filter.current.classList.remove("text-white");
            }
        })
        e.currentTarget.classList.add("text-white");
        e.currentTarget.classList.add("bg-lighBlue-light");
    }   

    return ( 
        <div className="flex gap-4">
          <div><p onClick={e=>changeFilter(e)} ref={all} className="py-3 px-4 bg-grey-extreme bg-lighBlue-light text-grey-light text-white rounded-xl">All</p></div>
          <div><p onClick={e=>changeFilter(e)} ref={party} className="py-3 px-4 bg-grey-extreme text-grey-light rounded-xl">🎉 Party</p></div>
          <div><p onClick={e=>changeFilter(e)} ref={camping} className="py-3 px-4 bg-grey-extreme text-grey-light rounded-xl">🏕️ Camping</p></div>
        </div>
     );
}
 
export default Filter;