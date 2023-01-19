import React from 'react'
import Category from '../sections/Category'
import Explore from '../sections/Explore'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import Navbar from '../sections/Navbar'
import Offer from '../sections/Offer'
import Popular from '../sections/Popular'

const Main = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Header/>
        <Explore/>
        <Category/>
        <Popular/>
        <Offer/>
        <Footer/>
    </div>
  )
}

export default Main