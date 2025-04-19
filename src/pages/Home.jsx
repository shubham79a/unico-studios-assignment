import React from 'react'
import HeroSection from '../components/HeroSection'
import BrandAdvertisement from '../components/BrandAdvertisement'
import ImageCollection from '../components/ImageCollection'
import VisionSection from '../components/VisionSection'
import ConnectSection from '../components/ConnectSection'

const Home = () => {
  return (
    <div className='pb-80'>
      <HeroSection />
      <BrandAdvertisement />
      <ImageCollection />
      <VisionSection />
      <ConnectSection />
    </div>
  )
}

export default Home
