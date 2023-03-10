import {useEffect, useState} from 'react'
import Box from '../components/Box'
import { Link, useLocation } from 'react-router-dom'
import {HiMenuAlt1} from 'react-icons/hi'
import Button from '../components/Button'
import data from '../data/nav.json'

const AuthComponent = () => {
    return (
        <>
            <Button
            className='w-full'
            as='link'
            to='/sign-in'
            styled='primary'>Sign In</Button>
            <Button
            as='link'
            to='/register'
            styled='secondary'>Register</Button>
        </>
    )
}

const Navbar = () => {

    const {pathname} = useLocation()

    const [show,isShow] = useState(false);
    const [bgTrans,setTrans] = useState(true);

    useEffect(()=>{
        window.onscroll = () => {
            if(window.scrollY < 2) setTrans(true)
            else setTrans(false)
        }
    },[bgTrans])

  return (
    <nav className={`${!bgTrans ? 'bg-black lg:top-0' : `${show ? 'bg-black lg:bg-transparent' : `bg-transparent`} lg:top-8`} py-4 transition-all top-0 fixed z-[10000] w-full text-white`}>
        <Box className='lg:flex lg:items-center'>
            {/* Left Side n full on mobile */}
            <div className='flex justify-between lg:w-fit'>
                <Link to={"/"}>
                    <img src='/assets/logo.svg' alt='logo-pentagon' className='w-40 lg:w-44'/>
                </Link>
                <button 
                onClick={()=>isShow(!show)}
                className='p-2 lg:hidden'>
                    <HiMenuAlt1 color='white'/>
                </button>
            </div>

            {/* Menu side w toogle on mobile */}
            <div className={`${show ? "bg-black lg:bg-transparent" : "bg-transparent"} text-sm font-medium lg:ml-8 lg:space-x-8 flex flex-col lg:flex-row lg:justify-start items-center space-y-3 lg:space-y-0 lg:py-0 py-6 ${show ? 'block' : 'hidden lg:block'}`}>
                {data.map(({name,path})=>(
                    <Link key={name} to={path} className={`text-white80 overflow-visible relative after:inset-0 after:translate-y-5 after:absolute after:h-[2px] ${pathname == path ? 'after:w-full' : 'after:w-0'} hover:after:w-full after:transition-all after:bg-blue inline-block`}>{name}</Link>
                ))}
                <div className='flex flex-col space-y-2 w-full lg:hidden'>
                    <AuthComponent/>
                </div>
            </div>

            {/* Right side Auth button side */}
            <div className='ml-auto hidden lg:block lg:space-x-4'>
                <AuthComponent/>
            </div>
        </Box>
    </nav>
  )
}

export default Navbar