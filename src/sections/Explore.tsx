import React from 'react'
import Box from '../components/Box'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

// Data
import data from '../data/explore.json'
import ExploreCard from '../components/Card/ExploreCard'

const Explore = () => {
  return (
    <section className='-mt-24 md:-mt-32'>
        <Box>
            <Swiper
            modules={[Pagination]}
            breakpoints={{
                0 : {
                    slidesPerView : 1,
                    spaceBetween : 10,
                },
                768 : {
                    slidesPerView : 3,
                    pagination : false,
                    spaceBetween : 50,
                }
            }}
            pagination
            >
                {data.map(({image,text,link},i)=>(
                    <SwiperSlide>
                        <ExploreCard
                        image={image}
                        link={link}
                        text={text}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </section>
  )
}

export default Explore