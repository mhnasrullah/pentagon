import React from 'react'
import Box from '../components/Box'
import HelpCard from '../components/Card/HelpCard'
import data from '../data/help.json'

const MainHelp = () => {
  return (
    <section className='pt-24 lg:pt-36 min-h-screen'>
        <Box>
            <h1 className='text-white font-medium text-lg lg:text-xl mb-6'>Help</h1>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 space-y-4 md:space-y-0 md:gap-4'>
                {data.map(({...props},i)=>(
                    <HelpCard
                    key={i}
                    {...props}
                    />
                ))}
            </div>
        </Box>
    </section>
  )
}

export default MainHelp