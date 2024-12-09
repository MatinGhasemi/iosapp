'use client'

import { useState } from "react";

const ChatFilter = () => {
    const [filterOpen,setFilterOpen] = useState(false);
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

    return (<>
        <div onClick={()=>{setFilterOpen(!filterOpen)}} className="bg-lighBlue-light min-w-14 h-14 flex items-center justify-center rounded-xl">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 0C2.55228 0 3 0.447715 3 1V2C3 2.55228 2.55228 3 2 3C1.44772 3 1 2.55228 1 2V1C1 0.447715 1.44772 0 2 0ZM2 5C3.10457 5 4 5.89543 4 7C4 8.10457 3.10457 9 2 9C0.89543 9 0 8.10457 0 7C0 5.89543 0.89543 5 2 5ZM19 8C20.1046 8 21 8.89543 21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8ZM10 11C11.1046 11 12 11.8954 12 13C12 14.1046 11.1046 15 10 15C8.89543 15 8 14.1046 8 13C8 11.8954 8.89543 11 10 11ZM10 17C10.5523 17 11 17.4477 11 18V20C11 20.5523 10.5523 21 10 21C9.44771 21 9 20.5523 9 20V18C9 17.4477 9.44771 17 10 17ZM2 11C2.55228 11 3 11.4477 3 12V20C3 20.5523 2.55228 21 2 21C1.44772 21 1 20.5523 1 20V12C1 11.4477 1.44772 11 2 11ZM19 0C19.5523 0 20 0.447715 20 1V5C20 5.55228 19.5523 6 19 6C18.4477 6 18 5.55228 18 5V1C18 0.447715 18.4477 0 19 0ZM19 13C19.5523 13 20 13.4477 20 14V20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20V14C18 13.4477 18.4477 13 19 13ZM10 0C10.5523 0 11 0.447715 11 1V8C11 8.55229 10.5523 9 10 9C9.44771 9 9 8.55229 9 8V1C9 0.447715 9.44771 0 10 0Z" fill="white"/>
            </svg>
        </div>
        <div className={`fixed text-white bg-grey-extreme z-20 left-0 right-0 w-full pb-14 transition-all ${filterOpen ? "-bottom-1" : "-bottom-72"}`}>
            <div className="flex justify-between border-grey-normal border-y px-5 py-2">
                <p>Mon</p>
                <p>Tue</p>
                <p>Wed</p>
                <p>Thu</p>
                <p>Fri</p>
                <p className="text-grey-light opacity-60">sat</p>
                <p className="text-grey-light opacity-60">sun</p>
            </div>
            <div className="flex flex-wrap justify-center text-center">
                {days.map((day)=>{
                    return (
                        <p className={`w-14 py-[6px] 
                        ${day===10 || day===11 ? "border-b-2 border-lighBlue-light" :""}
                        ${day===14 || day===15 ||day===16 ? "border-b-2 border-red-light" : ""}
                        ${day===4 ? "border-b-2 border-yellow-light" : ""}
                        ${day===25 || day===26 ? "border-b-2 border-blue-light" : ""}`} 
                        key={day}>
                        {day}
                        </p>
                    )
                })}
                <p className="text-grey-light opacity-60 w-14 py-[6px]">1</p>
                <p className="text-grey-light opacity-60 w-14 py-[6px]">2</p>
                <p className="text-grey-light opacity-60 w-14 py-[6px]">3</p>
                <p className="text-grey-light opacity-60 w-14 py-[6px]">4</p>
            </div>
        </div>
        <div onClick={()=>setFilterOpen(false)} className={`fixed w-screen h-screen left-0 top-0 right-0 bottom-0 backdrop-blur-sm ${filterOpen ? "block" : "hidden"}`}>
        </div>
     </>);
}
 
export default ChatFilter;