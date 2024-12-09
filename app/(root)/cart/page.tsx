import Footer from "@/app/components/footer";
import url from "@/app/production";
import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";

const Star = () => {
    return ( 
        <div>
            <div className="text-white layout">
                <p className="text-4xl">Cart</p>
                <div className="mt-5 mb-10 space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-32 rounded-3xl bg-white overflow-hidden"><Image className="w-20 mx-auto mt-2" src={`${url}Bitmap3.png`} width={100} height={200} alt="woman"/></div>
                        <div className="flex-1 text-lg">
                            <p className="whitespace-nowrap">The North face 100</p>
                            <p>glacier 1/4 zip</p>
                            <p className="font-bold mt-2">$90.00</p>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center border text-lighBlue-light">1x</div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-lighBlue-light">M</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-32 rounded-3xl bg-white overflow-hidden"><Image className="w-20 mx-auto mt-2" src={`${url}Bitmap1.png`} width={100} height={200} alt="woman"/></div>
                        <div className="flex-1 text-lg">
                            <p className="whitespace-nowrap">The North face 100</p>
                            <p>glacier 1/4 zip</p>
                            <p className="font-bold mt-2">$90.00</p>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center border text-lighBlue-light">1x</div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-lighBlue-light">S</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="min-w-14 h-14 bg-lighBlue-light flex flex-col items-center justify-center rounded-xl">
                        <LiaShippingFastSolid size={20}/>
                        <p className="text-[10px]">FREE</p>
                    </div>
                    <div className="border-b border-grey-light w-full">
                        <p className="text-grey-light">Total:</p>
                        <p className="font-bold text-lg">$180.00</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Star;