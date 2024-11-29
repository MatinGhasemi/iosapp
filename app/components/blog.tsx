import Image from "next/image";

import { IoChatboxEllipses, IoLinkSharp } from "react-icons/io5";
import { FaHeart, FaShareAlt } from "react-icons/fa";

import nature from '@/public/nature.png';
import nature1 from '@/public/nature1.png';
import nature2 from '@/public/nature2.png';
import nature3 from '@/public/nature3.png';
import nature4 from '@/public/nature4.png';
import mask from '@/public/Mask.png'


const Blog = () => {
    return ( 
        <div>
            <div className="flex gap-4 justify-between">
                <div className="relative rounded-[32px] overflow-hidden">
                    <Image className="w-40 rounded-[32px] absolute left-0 bottom-0 right-0 top-0" src={mask} width={100} height={200} alt="mask"/>
                    <Image className="rounded-[32px] w-40 object-cover" src={nature} width={100} height={200} alt="nature"/>
                    <p className="text-white absolute text-xl bottom-6 left-3 px-3">When you wake up</p>
                </div>
                <div className="relative rounded-[32px] overflow-hidden">
                    <Image className="w-40 rounded-[32px] absolute left-0 bottom-0 right-0 top-0" src={mask} width={100} height={200} alt="mask"/>
                    <Image className="rounded-[32px] w-40 object-cover" src={nature1} width={100} height={200} alt="nature1"/>
                    <p className="text-white absolute text-xl bottom-6 left-3 px-3">When you wake up</p>
                </div>
            </div>
            <div>
                <div className="text-white my-6 bg-grey-extreme rounded-2xl shadow">
                    <div className="p-5">
                        <div className="flex gap-5 items-center">
                            <div className="bg-red-light profile-avater">👩🏻</div>
                            <div>
                                <p className="font-bold">Alice Smith</p>
                                <p className="text-grey-light">20 April at 4:20 PM</p>
                            </div>
                        </div>
                        <p className="text-sm my-3">We&rsquo;re interested in your ideas and would be glad to build something bigger out of it. </p>
                        <div className="flex gap-2 items-center">
                            <div><Image className="rounded-2xl w-40 h-52" src={nature2} alt="nature2" width={100} height={200}/></div>
                            <div>
                                <div><Image className="rounded-2xl w-40 h-24" src={nature3} alt="nature3" width={100} height={50}/></div>
                                <div className="mt-2"><Image className="rounded-2xl w-40 h-24" src={nature4} alt="nature4" width={100} height={50}/></div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-grey-normal mx-5"/>
                    <div className="mx-5 flex gap-1 justify-between">
                        <div className="flex gap-1 items-center py-4">
                            <IoChatboxEllipses size={19} className="text-grey-light" />
                            <p className="whitespace-nowrap">7 Comments</p>
                        </div>
                        <div className="flex gap-1 items-center py-4">
                            <FaHeart size={19} className="text-grey-light" />
                            <p className="whitespace-nowrap">49 Likes</p>
                        </div>
                        <div className="flex gap-1 items-center py-4">
                            <FaShareAlt size={19} className="text-grey-light" />
                            <p className="whitespace-nowrap">Share</p>
                        </div>
                    </div>
                    <hr className="border-grey-normal"/>
                    <div className="flex gap-4 px-5 py-4">
                        <div className="bg-lighBlue-light profile-avater">👨🏻</div>
                        <div className="flex items-center bg-backgroundTransparent w-full rounded-xl overflow-hidden px-3">
                            <input type="text" className="bg-transparent w-full focus:outline-none" placeholder="Write comment..." />
                            <IoLinkSharp className="rotate-90 text-grey-light" size={19} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Blog;