import Footer from "../sections/Footer"
import MainStats from "../sections/MainStats"
import Navbar from "../sections/Navbar"

const Stats = () => {
  return (
    <section className="bg-black min-h-screen">
        <Navbar/>
        <MainStats/>
        <Footer/>
    </section>
  )
}

export default Stats