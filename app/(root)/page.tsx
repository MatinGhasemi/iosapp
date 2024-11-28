import Filter from "../components/filter";
import Footer from "../components/footer";
import ProductWrapper from "../components/productWrapper";

export default function Home() {

  return (
    <div className="">
      <div className="px-5 py-10">
        <Filter />
        <ProductWrapper />
      </div>
      <Footer />
    </div>
  );
}
