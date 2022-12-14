import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Highlights from '../components/Highlights'
import Navbar from '../components/Navbar'
import SiteSection from '../components/SiteSection'
import { homeObjTwo } from '../components/SiteSection/Data'
import Sidebar from '../components/Sidebar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar isOpen={isOpen} toggle={toggle} />
    <HeroSection />
    
    <Highlights />
    
    <SiteSection {...homeObjTwo}/>
    <Contact />
    <Footer />
  
    </>
  )
}

export default Home