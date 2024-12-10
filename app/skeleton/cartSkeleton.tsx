const CartSkeleton = () => {
    return ( 
        <div className="flex items-center gap-4">
            <div className="w-24 h-32 rounded-3xl loading-background overflow-hidden"></div>
            <div className="flex-1 text-lg space-y-2">
                <p className="whitespace-nowrap w-40 h-5 loading-background-fast"></p>
                <p className= "w-24 loading-background-fast h-3"></p>
                <p className="font-bold mt-2 w-8 loading-background-fast h-3"></p>
            </div>
            <div className="space-y-2 text-xs">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border loading-background"></div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center loading-background"></div>
            </div>
        </div>
     );
}
 
export default CartSkeleton;