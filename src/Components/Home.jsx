import React from 'react'
import Navbar from './Navbar'
import Kids from './Kids'
import Men from './Men'
import Women from './Women'
import MenAccessories from './MenAccessories'
import WomenAccessories from './WomenAccessories'
import './Home.css'
import Footer from './Footer'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <h1 className='category-title'>Category</h1>
      <h2 className='subcategory-title'>Kids</h2>
      <Kids />
      <h2 className='subcategory-title'>Men</h2>
      <Men />
      <h2 className='subcategory-title'>Women</h2>
      <Women />
      <h2 className='subcategory-title'>Accessories</h2>
        <h3 className='accessory-title'>Men Accessories</h3>
        <MenAccessories />
        <h3 className='accessory-title'>Women Accessories</h3>
        <WomenAccessories />

     <Footer />
    


    </div>
  )
}

export default Home
