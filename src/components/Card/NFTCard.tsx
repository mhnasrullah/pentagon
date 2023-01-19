import React, { ComponentProps, FC } from 'react'

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
                    <p className='text-xxs font-medium text-white80 lg:text-xs'>{by}</p>
                </div>
            </div>
        )
    }

  return (
    <div>NFTCard</div>
  )
}

export default NFTCard