import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProjectSection from '../components/ProjectSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/ProjectSection/Data'
import Sidebar from '../components/Sidebar'

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
    <ProjectSection {...homeObjOne}/>
    <ProjectSection {...homeObjTwo}/>
    <ProjectSection {...homeObjThree}/>
    </>
  )
}

export default Home