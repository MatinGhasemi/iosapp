import Footer from "@/app/components/footer";
import Progress from "@/app/components/progress";
import User from "@/app/components/user";
import UserOption from "@/app/components/userOption";

const UserPage = () => {
    return ( 
        <div className="layout mb-12">
            <User />
            <UserOption />
            <Progress />
            <Footer />
        </div>
     );
}
 
export default UserPage;