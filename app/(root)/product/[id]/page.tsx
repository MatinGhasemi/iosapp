import Link from 'next/link';
import Image from 'next/image';

import { FaArrowLeftLong } from 'react-icons/fa6';

import url from '@/app/production';
import Footer from '@/app/components/footer';
import products from '@/app/api/products.json';
import AddToCart from '@/app/components/addToCart';
import { ProductType } from '@/app/interfaces/interFace';
import ProductDetailDetail from '@/app/components/productDetailDetail'


type PageProps = {
    params:Promise<{id:string}>
}

const ProductDetail = async ({params}:PageProps) => {
    const { id } = await params;
    
    const product:ProductType[] = products.filter(item=>item.id === id);

    return ( 
        <div className='mb-16'>
            <div className='layout'>
                <Link href='/products?home' className='flex gap-2 items-center text-white mb-3'>
                    <FaArrowLeftLong size={18} />
                    <p>products</p>
                </Link>
                <div>
                    <div className='w-full rounded bg-white flex justify-between px-4 items-center'>
                        <div>
                            <p className='text-xl text-grey-light'>{product[0].title}</p>
                            <p className='font-bold'>{product[0].price}</p>
                        </div>
                        <div className=''><Image className='min-h-56 w-full' src={url+product[0].img} width={100} height={100} alt={"img detail"+product[0].id}/></div>
                    </div>
                    <div className='text-white text-center'>
                        <p className='px-1 text-lg'>{product[0].description}</p>
                        <p className='text-grey-light text-2xl my-2'>{product[0].price}</p>
                        <div className='text-grey-light'>
                            <div className='flex gap-2 justify-center'>Sales taxes may apply at checkout <div className='w-5 flex items-center justify-center h-5 rounded-full text-white bg-blue-light'>!</div></div>
                            <p>$20 shipping & import fees deposit to your place</p>
                        </div>
                    </div>
                    <div>
                        <ProductDetailDetail />
                    </div>
                    <div className='px-6 mt-8'>
                        <AddToCart id={product[0].id}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 

export default ProductDetail;