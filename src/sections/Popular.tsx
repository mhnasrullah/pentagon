import React from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Box from '../components/Box'
import NFTCard from '../components/Card/NFTCard'

import data from '../data/popular.json'

const Popular = () => {
  return (
    <section className='pt-8 md:pt-14'>
        <Box>
            <div className="flex justify-between items-end">
                <h1 className='text-white font-medium text-lg lg:text-xl'>Popular</h1>
                <Link to={"/"} className="text-secondBlue text-sm">See all items</Link>
            </div>
            <Swiper
            className='swiperCustom mt-6 md:mt-8'
            modules={[Pagination]}
            breakpoints={{
                0 : {
                    slidesPerView : 1,
                    spaceBetween : 10
                },
                768 : {
                    slidesPerView : 2,
                    spaceBetween : 20,
                },
                992 : {
                    slidesPerView : 4,
                    spaceBetween : 20
                }
            }}
            pagination
            >
                {data.map(({image,name,by,price},i)=>(
                    <SwiperSlide key={i}>
                        <NFTCard
                        by={by}
                        name={`${name} #${i+1}`}
                        image={image}
                        price={price}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </section>
  )
}

export default Popular