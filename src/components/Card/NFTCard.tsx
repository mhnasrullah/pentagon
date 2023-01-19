import React, { ComponentProps, FC } from 'react'
import Button from '../Button'

interface Props extends ComponentProps<"div">{
    image : string,
    price : number,
    name : string,
    by : string,
    _for? : "header" | "items"
}

const NFTCard:FC<Props> = ({image,price,name,by,_for = "items",className}) => {

    if(_for === "header"){
        return (
            <div 
            className={`absolute w-fit ${className ? className : " "}`}
            >
                <div className='flex bg-blue space-x-1 w-fit absolute right-0 px-3 py-1 rounded-bl-xl rounded-tr-xl'>
                    <img src="/assets/icons/eth.svg" className='w-2' alt="ETH" />
                    <p className='text-white font-medium text-sm'>{price}</p>
                </div>
                <img src={image} alt={name} className="rounded-xl w-48 lg:w-64 lg:h-72 h-56 object-cover object-center"/>
                <div className='absolute w-full bottom-0 p-4'>
                    <p className="font-medium text-white text-sm lg:text-base">{name}</p>
                    <p className='text-xs font-medium text-white80 lg:text-sm'>{by}</p>
                </div>
            </div>
        )
    }

  return (
    <div className='bg-secondBlack p-4 rounded-2xl'>
        <img src={image} alt={name} className="rounded-xl w-full h-72 object-cover object-center"/>
        <div className="flex text-white my-4 justify-between">
            {/* name n by */}
            <div className='w-2/3'>
                <p className='text-sm'>{by}</p>
                <p className='font-semibold text-lg mt-2'>{name}</p>
            </div>
            {/* price */}
            <div className='w-fit mt-[2px]'>
                <p className='text-xs'>price</p>
                <div className="flex items-center mt-3 space-x-1">
                    <img src="/assets/icons/eth.svg" alt="ETH" />
                    <p className='text-sm'>{price}</p>
                </div>
            </div>
        </div>
        <Button 
        as='link'
        styled='primary'
        to='/'
        className='w-full block'>Collect Now</Button>
    </div>
  )
}

export default NFTCard