import ChatFilter from "@/app/components/chatFilter";
import Footer from "@/app/components/footer";

const Chat = () => {
    const messages = [
        {name:"Amoo Matin",Avatar:"👨🏻",message:"Hello There !",time:"4:30 PM",seen:false,notSeen:2,bg:"bg-red-light"},
        {name:"Alice Smith",Avatar:"👩🏾",message:"Great. I will have a look",time:"7:30 PM",seen:true,notSeen:0,bg:"bg-yellow-light"},
        {name:"Alireze",Avatar:"👴🏽",message:"My Brother do you have some money ?",time:"7:00 AM",seen:true,notSeen:0,bg:"bg-blue-light"},
        {name:"Mahya",Avatar:"👩🏻",message:"Thats realy awesome !",time:"10:30 AM",seen:false,notSeen:3,bg:"bg-perple-light"},
        {name:"Amoo Matin",Avatar:"👨🏻",message:"Hello There !",time:"4:30 PM",seen:false,notSeen:2,bg:"bg-red-light"},
        {name:"Alice Smith",Avatar:"👩🏾",message:"Great. I will have a look",time:"7:30 PM",seen:true,notSeen:0,bg:"bg-yellow-light"},
        {name:"Alireze",Avatar:"👴🏽",message:"My Brother do you have some money ?",time:"7:00 AM",seen:true,notSeen:0,bg:"bg-blue-light"},
        {name:"Mahya",Avatar:"👩🏻",message:"Thats realy awesome !",time:"10:30 AM",seen:false,notSeen:3,bg:"bg-perple-light"},
    ]

    return (
        <div>
            <div className="layout">
                <div className="flex justify-between gap-4">
                    <div className="w-full"><input type="text" className="bg-backgroundTransparent text-white px-4 h-14 w-full focus:outline-none rounded-xl" placeholder="search" /></div>
                    <ChatFilter />
                </div>
                <div className="mt-6 mb-14 space-y-4">
                    {messages.map((message,i)=>{
                        return (
                        <div className="flex items-center gap-4" key={i}>
                            <div className={`${message.bg} profile-avater`}>{message.Avatar}</div>
                            <div className="text-white flex justify-between w-full pb-3 border-grey-light border-b">
                                <div>
                                    <p className="font-bold">{message.name}</p>
                                    {message.seen ?
                                    <p className="text-sm text-grey-light">{message.message.substring(0,20)}...</p>
                                    :
                                    <p className="text-sm">{message.message.substring(0,20)}...</p>
                                    }
                                </div>
                                <div>
                                    <p className="text-grey-light">{message.time}</p>
                                    {message.seen ? <></> :
                                    <div className="flex justify-end">
                                        <p className="bg-lighBlue-light w-4 h-4 text-xs rounded-full flex justify-center">{message.notSeen}</p>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Chat;