import React, { useCallback, useEffect, useState } from 'react'
import { redirect } from 'react-router-dom'
import Box from '../components/Box'
import Navbar from '../sections/Navbar'
import { baseUrl } from '../utils/constant'

const Error = () => {

    const [cd,setCd] = useState(4)
    
    // Every 1s / 1000 ms, state CD will reduce for timer
    const redirect = useCallback(()=>{
      setInterval(()=>{
        if(cd>0) setCd(cd-1)
      },1000)
      if(cd === 0){
        console.log(cd)
        window.location.replace(baseUrl)
      }
    },[cd])

    useEffect(()=>{
      redirect();
    },[cd])


  return (
    <section className='min-h-screen bg-black text-white flex justify-center items-center'>
        <Navbar/>
        <Box>
          <div className='flex flex-col items-center'>
            <h1 className='text-5xl font-bold'>404</h1>
            <p className='text-center text-sm mt-4'>This page is not avalaible / not developed yet ... </p>
            <p className='text-xs mt-6 text-secondBlue'>you will redirect to "/" in {cd}</p>
          </div>
        </Box>
    </section>
  )
}

export default Error