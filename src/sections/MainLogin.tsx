import React from 'react'
import { Link } from 'react-router-dom'
import Box from '../components/Box'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Input from '../components/Input'

const MainLogin = () => {
  return (
    <section className='py-24 lg:py-36'>
        <Box>
            <div className="bg-secondBlack relative flex flex-col-reverse md:flex-row rounded-2xl md:items-center">
                
                {/* Form */}
                <form className='w-full md:w-3/5 md:px-5 lg:px-10 h-fit lg:w-1/2'>
                  <div className='text-white px-4 py-6 w-full'>
                    <h1 className='font-semibold text-lg lg:text-xl'>Login</h1>
                    <div className='mt-4 md:mt-6 lg:mt-10'>
                      <label htmlFor='' className="text-sm font-medium">Username or email</label>
                      <Input
                      classParent='mt-1 md:mt-2'
                      background='black'
                      type={"email"}
                      borderNone
                      placeholder='input your username/email...'
                      />
                    </div>
                    <div className='mt-2 md:mt-4 lg:mt-6'>
                      <label htmlFor='' className="text-sm font-medium">Password</label>
                      <Input
                      classParent='mt-1 md:mt-2'
                      background='black'
                      type={"password"}
                      borderNone
                      placeholder='input your password...'
                      />
                    </div>
                    <div className="mt-2 md:mt-4 lg:mt-6 md:flex md:justify-between md:items-center">
                      <Checkbox
                      label='Remember me'/>
                      <a href="/" target={"_blank"} className="text-secondBlue text-sm mt-4 md:mt-0 block text-center" rel="noopener noreferrer">Forgot password?</a>
                    </div>
                    <Button
                    as='button'
                    type='submit'
                    styled='primary'
                    className='w-full mt-4 md:mt-6'>Login</Button>
                    <p className='text-sm font-medium mt-4 md:text-start md:mt-6 text-center'>Don't have an account ? <Link to={"/register"} className="text-blue">Register</Link></p>
                  </div>
                </form>
                <img src="/assets/image/login.jpg" className='w-full lg:h-[500px] lg:w-1/2 md:w-2/5 h-24 md:h-[400px] md:rounded-t-none md:rounded-tr-2xl md:rounded-r-2xl object-cover object-center rounded-t-2xl' alt="login-page" />
            </div>
        </Box>
    </section>
  )
}

export default MainLogin