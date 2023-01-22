import Footer from '../sections/Footer'
import MainLogin from '../sections/MainLogin'
import Navbar from '../sections/Navbar'

const SignIn = () => {
  return (
    <div className='bg-black min-h-screen'>
        <Navbar/>
        <MainLogin/>
        <Footer/>
    </div>
  )
}

export default SignIn