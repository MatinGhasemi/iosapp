import Image from "next/image";
import url from "../production";

const Progress = () => {
    return ( 
        <div>
            <div className="bg-grey-extreme w-full my-8 py-5 rounded-xl flex items-center justify-around">
                <div><Image className="h-24 w-24" src={`${url}Graph.png`} width={200} height={200} alt="Graph"/></div>
                <div>
                    <p className="text-white text-lg tracking-widest mb-2 font-bold">Weekly progress</p>
                    <div className="text-grey-light">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-3 rounded bg-lighBlue-normal"></div>
                            <p>to start working</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-3 rounded bg-yellow-normal"></div>
                            <p>to start working</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-3 rounded bg-red-normal"></div>
                            <p>to start working</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-grey-extreme w-full rounded-xl py-6">
                <div className="text-white text-center flex justify-around">
                    <div className="bg-background w-16 h-16 rounded-xl">
                        <div className="border-4 border-red-normal flex-center w-16 h-16 rounded-xl" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 20% 100%, 0 100%)'}}>🔍</div>
                        <p>Explore</p>
                    </div>
                    <div className=" bg-background w-16 h-16 rounded-xl">
                        <div className="border-4 border-yellow-normal flex-center w-16 h-16 rounded-xl" style={{clipPath: 'polygon(0 0, 100% 50%, 100% 90%, 100% 100%, 0 100%)'}}>🛒</div>
                        <p>Purchase</p>
                    </div>
                    <div className="bg-background w-16 h-16 rounded-xl">
                        <div className="border-4 border-blue-normal flex-center w-16 h-16 rounded-xl" style={{clipPath: 'polygon(35% 35%,10% 10%, 100% 50%, 100% 100%, 0 100%)'}}>📢</div>
                        <p>News</p>
                    </div>
                    <div className="bg-background w-16 h-16 rounded-xl">
                        <div className="border-4 border-lighBlue-normal flex-center w-16 h-16 rounded-xl" style={{clipPath: 'polygon(0 0, 70% 40%, 40% 100%, 100% 100%, 0 100%)'}}>😴️</div>
                        <p>Relax</p>
                    </div>
                </div>
                <div className="mt-12 px-4 text-white">
                    <div>
                        <div className="flex justify-between mb-4">
                            <p className="text-lg font-bold">Statistics</p>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-red-normal"></div>
                                    <p>Explore</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-yellow-normal"></div>
                                    <p>Purchase</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-36 relative px-2">
                            <Image className="absolute bottom-0 w-full h-[100px] rounded-[60px]" src={`${url}Group 12.png`} width={400} height={200} alt="feedback"/>
                            <div className="absolute top-3 left-20 bg-red-normal py-1 px-3 rounded-xl">
                                12 View
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Progress;