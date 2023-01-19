import React from 'react'
import Explore from '../sections/Explore'
import Header from '../sections/Header'
import Navbar from '../sections/Navbar'

const Main = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Header/>
        <Explore/>
    </div>
  )
}

export default Main