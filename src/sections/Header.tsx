import React, { ComponentProps } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import NFTCard from '../components/Card/NFTCard'
import Input from '../components/Input'
import {HTMLMotionProps, motion} from 'framer-motion'

interface StatsProps extends HTMLMotionProps<"div">{
  position : string,
  value : string,
  name : string,
  motion? : any
}
const Stats = ({position,name,value,...props} : StatsProps) => (
  <motion.div 
  {...props}
  className={`absolute ${position}`}>
    <h1 className='text-white lg:text-2xl font-bold'>{value}</h1>
    <p className='text-halfWhite text-sm font-medium'>{name}</p>
  </motion.div>
)

const Header = () => {

  const StatsMotion = {
    animate : {
      scale : [0.8,1.1,0.8]
    },
    transition : {
      duration : 10,
      repeat : Infinity,
      type : 'spring',
      stiffness : 1000
    }
  }

  return (
    <div
    className='min-h-screen bg-cover bg-center pb-32 md:pb-52'
    style={{
        backgroundImage : 'url(/assets/background.jpg)',
        backgroundAttachment : 'fixed'
    }}>
        <Box className='flex flex-col-reverse pt-32 lg:pt-40 md:items-center md:flex-row'>
            <div className="w-full pt-10 md:py-0 md:w-1/2 lg:w-5/12">
                <h1 className='text-white text-4xl font-semibold leading-tight lg:leading-snug lg:text-5xl'>Discover Collect and Sale Rare Masterpiece NFTs</h1>
                <p className='font-medium text-sm mt-5 leading-relaxed lg:leading-[1.8] text-white'>The biggest marketplace that sells digital asset from crypto, ethereum, etc.</p>
                <div className='flex mt-10'>
                  <Input
                  placeholder='Find Something...'
                  />
                  <Button
                  as='button'
                  className='ml-2'
                  smallPadding
                  styled='primary'>Search</Button>
                </div>
            </div>
            <div className='flex md:w-1/2 lg:w-7/12'>
              <div className='relative w-full mx-auto h-80 lg:h-[360px]'>
                <NFTCard
                _for='header'
                className='top-0 -left-5 lg:left-32 md:left-0'
                image='/assets/nft/mobile-monster.jpg'
                name='#MobileMonster'
                by='Alex Sanchez'
                price={0.2}/>
                <NFTCard
                _for='header'
                className='bottom-0 lg:bottom-0 -right-4 md:right-0'
                image='/assets/nft/night-wolf.jpg'
                name='#NightWolf'
                by='Joao Pereira'
                price={0.4}/>
                <Stats 
                {...StatsMotion}
                name='Aucations'
                position='-top-12 left-5 lg:top-24 lg:left-12'
                value='51K+'/>
                <Stats
                {...StatsMotion}
                name='Artist'
                position='top-8 right-10 lg:top-0 lg:right-16'
                value='99K+'/>
                <Stats
                {...StatsMotion}
                name='Artworks'
                position='bottom-0 left-4 lg:bottom-0 lg:left-52'
                value='101K+'/>
              </div>
            </div>
        </Box>

        {/* Partner list */}
        <Box className='flex flex-wrap items-center justify-center gap-3 lg:space-x-8 py-8 mt-10 lg:mt-14'>
            <img src={`/assets/logo/bitgo.svg`} className="h-7 lg:h-9" alt="bitgo" />
            <img src={`/assets/logo/meta.svg`} className="h-8 lg:h-10" alt="meta" />
            <img src={`/assets/logo/google.svg`} className="h-7 lg:h-9" alt="google" />
            <img src={`/assets/logo/coinbase.svg`} className="h-6 lg:h-8" alt="coinbase" />
            <img src={`/assets/logo/trustwallet.svg`} className="h-7 lg:h-9" alt="trustwallet" />
        </Box>
    </div>
  )
}

export default Header