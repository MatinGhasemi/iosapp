import Blog from "@/app/components/blog";
import Cources from "@/app/components/cources";
import Footer from "@/app/components/footer";


const Bell = () => {
    return ( 
        <div>
            <div className="layout mb-14">
                <Blog />
                <Cources />
            </div>
            <Footer />
        </div>
     );
}
 
export default Bell;