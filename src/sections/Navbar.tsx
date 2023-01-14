import {useState} from 'react'
import Box from '../components/Box'
import { Link } from 'react-router-dom'
import {HiMenuAlt1} from 'react-icons/hi'
import Button from '../components/Button'

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

    const [show,isShow] = useState(false);

  return (
    <nav className={`${show ? "bg-black lg:bg-transparent" : "bg-transparent"} fixed w-full text-white`}>
        <Box className='lg:flex lg:items-center'>
            {/* Left Side n full on mobile */}
            <div className='flex justify-between lg:w-fit'>
                <img src='/assets/logo.svg' alt='logo-pentagon' className='w-32 lg:w-44'/>
                <button 
                onClick={()=>isShow(!show)}
                className='p-2 lg:hidden'>
                    <HiMenuAlt1 color='white'/>
                </button>
            </div>

            {/* Menu side w toogle on mobile */}
            <div className={`${show ? "bg-black lg:bg-transparent" : "bg-transparent"} text-sm lg:ml-8 lg:space-x-8 flex flex-col lg:flex-row lg:justify-start items-center space-y-2 lg:py-0 py-6 ${show ? 'block' : 'hidden lg:block'}`}>
                <Link to={'/'} className="text-white80">Explore</Link>
                <Link to={'/'} className="text-white80">Help</Link>
                <Link to={'/'} className="text-white80">Stats</Link>
                <Link to={'/'} className="text-white80">About Us</Link>
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