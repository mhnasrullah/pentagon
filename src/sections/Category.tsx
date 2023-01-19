import { Link } from 'react-router-dom'
import { Pagination } from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import Box from '../components/Box'
import CategoryCard from '../components/Card/CategoryCard'

// import data
import data from '../data/category.json'

import 'swiper/css'
import 'swiper/css/pagination'

const Category = () => {
  return (
    <section className='pt-8 md:pt-14'>
        <Box>
            <div className="flex justify-between items-end">
                <h1 className='text-white font-medium text-lg'>Category</h1>
                <Link to={"/"} className="text-secondBlue text-sm">See all category</Link>
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
                {data.map(({image,name},i)=>(
                    <SwiperSlide
                    key={i}>
                        <CategoryCard 
                        image={image}
                        name={name}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </section>
  )
}

export default Category