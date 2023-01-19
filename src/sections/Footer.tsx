import React from 'react'
import { Link } from 'react-router-dom'
import Box from '../components/Box'

import data from '../data/footer.json'

const Footer = () => {
  return (
    <footer className='py-10'>
        <Box className='flex flex-wrap'>
            {/* Logo */}
            <div className='w-full lg:w-1/6'>
                <img src='/assets/logo.svg' alt='logo-pentagon' className='w-32 lg:w-36'/>
            </div>

            {/* Explore */}
            {/* Account */}
            {/* Company */}
            {/* Stats */}
            {data.map(({title,menu},i)=>(
                <div className='text-sm font-medium flex flex-col space-y-4 w-1/2 md:w-1/5 lg:w-1/6 mt-8 lg:mt-0' key={i}>
                    <p className='text-blue'>{title}</p>
                    {menu.map((e)=>(
                        <Link to={"/"} key={e} className="text-white">{e}</Link>
                    ))}
                </div>
            ))}

            {/* Contact */}
            <div className='text-sm font-medium flex flex-col space-y-4 w-full md:w-1/5 lg:w-1/6 mt-8 lg:mt-0'>
                <p className='text-blue'>Contact</p>
                <Link to={"/"}  className="text-white">(022) 012 3456</Link>
                <Link to={"/"}  className="text-white">hello@nfteverywhere.com</Link>
                <div className="flex space-x-2">
                    {["ig","tw","yt"].map((e)=>(
                        <a href="/" target={'_blank'} key={e} rel="noopener noreferrer">
                            <img src={`/assets/icons/${e}.svg`} alt={e} />
                        </a>
                    ))}
                </div>
            </div>

        </Box>
    </footer>
  )
}

export default Footer