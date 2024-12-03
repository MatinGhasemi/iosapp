import Image from "next/image";

import { IoPlaySharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { TiCreditCard } from "react-icons/ti";


const Cources = () => {
    return ( 
        <div>
            <p className="text-4xl text-white font-bold mb-4 mt-10">Cources</p>
            <div className="flex gap-3 text-white">
                <div className="w-full px-4 py-6 bg-red-light rounded-2xl">
                    <div className="flex gap-1">
                        <TiCreditCard size={21}/>
                        <p>Introduce</p>
                    </div>
                    <p className="text-xl mt-7 mb-2">What is it ?</p>
                    <p>20 min</p>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="bg-white profile-avater w-10 min-w-10 h-10"><IoPlaySharp className="text-red-light"/></div>
                        <div>Start</div>
                    </div>
                </div>
                <div className="w-full px-4 py-6 bg-lighBlue-light rounded-2xl">
                    <div className="flex items-center gap-1">
                        <MdOutlineSettings size={19}/>
                        <p>Introduce</p>
                    </div>
                    <p className="text-xl mt-7 mb-2">What is it ?</p>
                    <p>20 min</p>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="bg-white profile-avater w-10 min-w-10 h-10"><IoPlaySharp className="text-lighBlue-light"/></div>
                        <div>Start</div>
                    </div>
                </div>
            </div>
            <div className="mt-3 space-y-3">
                <div className="bg-lighBlue-extreme rounded-3xl text-lighBlue-normal p-4">
                    <div className="flex justify-between items-center">
                        <div className="w-16 h-16 bg-lighBlue-normal rounded-2xl flex-center"><Image className="w-10 h-10" src={`/course.png`} width={100} height={100} alt="bitmap10"/></div>
                        <div>
                            <p className="font-bold">Booked for 8 PM</p>
                            <p className="text-lighBlue-transparent">Booked for 8 PM</p>
                        </div>
                        <div className="w-10 h-10 relative">
                            <div className="w-10 h-10 rounded-full bg-lighBlue-transparent border-[3px] border-r-lighBlue-normal border-l-transparent border-t-lighBlue-normal border-b-lighBlue-normal rotate-45">
                            </div>
                            <IoPlaySharp className="text-lighBlue-normal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-extreme rounded-3xl text-yellow-normal p-4">
                    <div className="flex justify-between items-center">
                        <div className="w-16 h-16 bg-yellow-normal rounded-2xl flex-center"><Image className="w-10 h-10" src={`/course1.png`} width={100} height={100} alt="bitmap10"/></div>
                        <div>
                            <p className="font-bold">Booked for 8 PM</p>
                            <p className="text-yellow-transparent">Booked for 8 PM</p>
                        </div>
                        <div className="w-10 h-10 relative">
                            <div className="w-10 h-10 rounded-full bg-yellow-transparent border-[3px] border-r-yellow-normal border-l-transparent border-t-yellow-normal border-b-yellow-normal rotate-45">
                            </div>
                            <IoPlaySharp className="text-yellow-normal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                </div>
                <div className="bg-red-extreme rounded-3xl text-red-normal p-4">
                    <div className="flex justify-between items-center">
                        <div className="w-16 h-16 bg-red-normal rounded-2xl flex-center"><Image className="w-10 h-10" src={`/course.png`} width={100} height={100} alt="bitmap10"/></div>
                        <div>
                            <p className="font-bold">Booked for 8 PM</p>
                            <p className="text-red-transparent">Booked for 8 PM</p>
                        </div>
                        <div className="w-10 h-10 relative">
                            <div className="w-10 h-10 rounded-full bg-red-transparent border-[3px] border-r-red-normal border-l-transparent border-t-red-normal border-b-red-normal rotate-45">
                            </div>
                            <IoPlaySharp className="text-red-normal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cources;