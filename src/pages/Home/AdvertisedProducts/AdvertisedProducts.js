import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination} from "swiper";



const AdvertisedProducts = () => {

    const {data:products=[], isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res=await fetch('https://new-folder-najmul11.vercel.app/advertisedproducts')
            const data= await res.json()
            return data
        }
    })


    if (isLoading) {
        <div className='flex justify-center h-screen items-center'><progress className=" progress w-56 "></progress></div>
    }

    return (
        <div>
            {
                products.length ?
                <div className='dark:bg-black '>
                    <div className='pt-5 pb-12'>
                        <h2 className='text-5xl font-light dark:text-gray-400 text-center'>People's choice best fragrences</h2>
                        <p className='dark:text-gray-400 text-center'>advertised by sellers</p>
                    </div>
                    <div className='bg-black lg:py-20 '>
                        <Swiper
                            className='md:w-1/2 mx-auto rounded-xl bg-black'
                            spaceBetween={50}
                            loop={true}
                            autoplay={{delay:2500,pauseOnMouseEnter:true, disableOnInteraction:false}}
                            slidesPerView={1}
                            modules={[Autoplay,Pagination]}
                            >
                            {
                                products.map(product=><SwiperSlide key={product._id}>
                                    <img className='lg:h-[600px] mx-auto rounded-xl' src={product.productImage} alt="" />
                                </SwiperSlide>)
                            }
                        </Swiper> 
                    </div>
                </div>
                :''
            }
        </div>

    );
};

export default AdvertisedProducts;