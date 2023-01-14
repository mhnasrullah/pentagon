import React from 'react'
import Box from '../components/Box'
import Input from '../components/Input'

const Header = () => {
  return (
    <div
    className='min-h-screen bg-cover bg-bottom'
    style={{
        backgroundImage : 'url(/assets/background.jpg)'
    }}>
        <Box className='flex pt-24'>
            <div className="w-full">
                <h1 className='text-white text-4xl font-semibold leading-tight'>Discover Collect and Sale Rare Masterpiece NFTs</h1>
                <p className='font-medium text-sm mt-2 leading-relaxed text-halfWhite'>The biggest marketplace that sells digital asset from crypto, ethereum, etc.</p>
                <Input/>
            </div>

        </Box>
    </div>
  )
}

export default Header