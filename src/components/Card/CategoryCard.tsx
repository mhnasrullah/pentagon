import React, { FC } from 'react'

interface Props {
    image : string,
    name : string
}

const CategoryCard:FC<Props> = ({image,name}) => {
  return (
    <div className='relative group overflow-hidden rounded-2xl'>
        <img src={image} alt={name} className="rounded-2xl w-full h-40 group-hover:scale-110 transition-all object-cover object-center" />
        <div className='flex bg-blue space-x-1 w-fit absolute bottom-0 right-0 px-3 py-1 rounded-tl-xl rounded-br-xl'>
            <p className='text-white font-medium text-sm'>{name}</p>
        </div>
    </div>
  )
}

export default CategoryCard