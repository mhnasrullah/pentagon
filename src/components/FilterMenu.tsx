import React, { FC, KeyboardEventHandler } from 'react'
import Checkbox from './Checkbox'
import data from '../data/category.json'
import Input from './Input'
import Button from './Button'

interface Props {
    closeFilter : ()=>void
}

const FilterMenu:FC<Props> = ({closeFilter}) => {

    const onlyNumber = (e : any) => {
        if(!/[0-9,.]/.test(e.key) && !(e.key === 'Backspace'))
            e.preventDefault()
    }
  return (
    <div className='bg-secondBlack rounded-xl px-4 py-6 h-fit text-white'>
        <div className='flex justify-between items-center'>
            <div className="flex items-center space-x-2">
                <img src="/assets/icons/filter.svg" alt="filter" className='w-5' />
                <p className='font-medium'>Filter</p>
            </div>
            <button onClick={closeFilter}>
                <img src='/assets/icons/arrow-double.svg' alt='close-filter' className='w-3'/>
            </button>
        </div>

        <div className='mt-6'>
            <p className='text-sm font-medium'>Categories</p>
            <div className='grid grid-cols-2 gap-2 mt-3'>
                {data.map(({name})=>(
                    <Checkbox
                    key={name}
                    label={name}/>
                ))}
            </div>
        </div>

        <div className='mt-6'>
            <p className='text-sm font-medium'>Price</p>
            <div className='flex space-x-2 mt-3'>
                <div>
                    <Input
                    classParent='w-1/2 md:w-28'
                    borderNone
                    background='black'
                    onKeyDown={onlyNumber}
                    placeholder='0.001'/>
                    <p className='text-sm font-medium text-white80 mt-1'>Floor price</p>
                </div>
                <div>
                    <Input
                    borderNone
                    classParent='w-1/2 md:w-28'
                    background='black'
                    onKeyDown={onlyNumber}
                    placeholder='50'/>
                    <p className='text-sm font-medium text-white80 mt-1'>Highest price</p>
                </div>
            </div>
        </div>

        <Button
        as='button'
        className='w-full mt-6'
        styled='primary'>Apply</Button>
    </div>
  )
}

export default FilterMenu