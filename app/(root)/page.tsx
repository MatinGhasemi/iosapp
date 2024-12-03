import Image from "next/image";
import ProductFilter from "../components/productFilter";
import ProductWrapper from "../components/productWrapper";
import Footer from "../components/footer";
import Link from "next/link";

const HomePage = () => {
    return (<>
        <div className="layout">
            <ProductFilter />
            <Link href={'/products?home'}>
            <div className="w-full h-[220px] bg-white rounded-[40px] relative mt-8">
                <div className="absolute right-7 bottom-0"><Image className="h-[220px] w-full object-cover rounded-lg" src={'/woman_banner.png'} width={100} height={400} alt="woman_banner" /></div>
                <div className="px-6 pt-14">
                    <div className="">
                        <p className="text-xl font-bold">Join our</p>
                        <p className="text-xl font-bold">awesome community</p>
                    </div>
                    <p className="text-grey-normal text-xl mt-2">Belt suit blazer</p>
                </div>
            </div>
            </Link>
            <ProductWrapper />
        </div>
        <Footer />
    </>
    );
}
 
export default HomePage;