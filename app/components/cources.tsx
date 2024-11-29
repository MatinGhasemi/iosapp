import { IoPlaySharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { TiCreditCard } from "react-icons/ti";

const Cources = () => {
    return ( 
        <div>
            <p className="text-4xl text-white font-bold mb-4 mt-10">Cources</p>
            <div className="flex gap-3 text-white">
                <div className="w-full p-4 bg-red-light rounded-2xl">
                    <div className="flex gap-1">
                        <TiCreditCard size={21}/>
                        <p>Introduce</p>
                    </div>
                    <p className="text-xl mt-7 mb-2">What is it ?</p>
                    <p>20 min</p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="bg-white profile-avater w-10 min-w-10 h-10"><IoPlaySharp className="text-red-light"/></div>
                        <div>Start</div>
                    </div>
                </div>
                <div className="w-full p-3 bg-lighBlue-light rounded-2xl">
                    <div className="flex items-center gap-1">
                        <MdOutlineSettings size={19}/>
                        <p>Introduce</p>
                    </div>
                    <p className="text-xl mt-7 mb-2">What is it ?</p>
                    <p>20 min</p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="bg-white profile-avater w-10 min-w-10 h-10"><IoPlaySharp className="text-lighBlue-light"/></div>
                        <div>Start</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cources;