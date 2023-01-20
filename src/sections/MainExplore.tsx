import React, { useState } from 'react'
import Box from '../components/Box'
import NFTCard from '../components/Card/NFTCard'
import FilterMenu from '../components/FilterMenu'

import data from '../data/nft.json'

const MainExplore = () => {
    
    const [showFilter,setShowFilter] = useState(false)

  return (
    <section className='pt-24 lg:pt-36'>
        <Box>
            <button 
            onClick={()=>setShowFilter(true)}
            className='flex space-x-2 mb-6'>
                <img src="/assets/icons/arrow-double.svg" className={`rotate-180 w-3 ${showFilter ? 'hidden' : 'block'}`} alt="open filter" />
                <h1 className='text-white font-medium text-lg lg:text-xl'>Explore</h1>
            </button>

            <div className='flex flex-col lg:flex-row'>
            {/* Filter Menu */}
                {showFilter && (
                    <FilterMenu
                    closeFilter={()=>setShowFilter(false)}/>
                )}

            {/* All Items */}
                <div className={`w-full space-y-4 mt-6 md:grid md:grid-cols-4 lg:mt-0 ${showFilter ? 'lg:ml-4 lg:grid-cols-3' : 'lg:grid-cols-4'} md:gap-4 md:space-y-0`}>
                    {data.map(({id,...e})=>(
                        <NFTCard
                        key={id}
                        idNFT={id}
                        {...e}
                        />
                    ))}
                </div>
            </div>
        </Box>
    </section>
  )
}

export default MainExplore