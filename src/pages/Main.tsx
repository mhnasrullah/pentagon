import React from 'react'
import Category from '../sections/Category'
import Explore from '../sections/Explore'
import Header from '../sections/Header'
import Navbar from '../sections/Navbar'
import Popular from '../sections/Popular'

const Main = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Header/>
        <Explore/>
        <Category/>
        <Popular/>
    </div>
  )
}

export default Main