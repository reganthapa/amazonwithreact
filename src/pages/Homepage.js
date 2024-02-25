import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Slider from '../component/Slider'
import Latest from '../component/Latest'
import Trending from '../component/Trending'



const Homepages = () => {
  return (
   <>
   <Navbar />
   <Slider/>
   <Latest/>
   <Trending/>


   <Footer/>
 
   </>
  )
}

export default Homepages