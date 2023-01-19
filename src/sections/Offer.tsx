import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'

const Offer = () => {
  return (
    <section className='py-8 md:py-14'>
        <Box>
            <div className='bg-[#10131A] rounded-2xl p-4 py-10 md:py-16 lg:py-24 md:flex md:justify-center'>
                <div className="md:text-center md:w-1/2">
                    <h1 className='text-white text-4xl font-semibold leading-tight lg:leading-snug lg:text-5xl'>Ready to collect NFT??</h1>
                    <p className='text-sm font-medium text-halfWhite mt-2'>You can collect NFT from sells out digital assets in here around the world.</p>
                    <Button
                    as='link'
                    to='/'
                    className='block w-full md:w-fit md:mx-auto mt-6 md:mt-8'
                    styled='primary'>Collect Now</Button>
                </div>
            </div>
        </Box>
    </section>
  )
}

export default Offer