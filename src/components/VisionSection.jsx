import React from 'react'
import assets from '../assets/assets'

const VisionSection = () => {
    return (
        <div className='bg-gradient-to-tl from-[50%] to-[#ad89da80]/60 '>
            <div className='grid md:grid-cols-2  max-sm:px-4 sm:px-16 md:px-24 lg:px-32 max-sm:py-12 sm:py-16 gap-8 text-white'>
                <div className='max-md:order-2 order-1'>
                    <p className='font-normal lg:text-6xl md:text-5xl text-4xl leading-[1] tracking-[-0.035em] mb-2'>OUR VISION</p>
                    <p className='font-normal tracking-[-0.03em] text-2xl lg:text-3xl leading-[100%] '>PARTNER WITH BRANDS SEEKING TO TRANSFORM IDEAS INTO POWERFUL VISUAL STORIES. WE STRIVE TO PUSH THE BOUNDARIES OF CREATIVITY, BLENDING ARTISTRY WITH INNOVATION TO CRAFT VIDEOS THAT CAPTIVATE, CONNECT, AND INSPIRE ACTION. BY DELIVERING EXCEPTIONAL QUALITY AND MEASURABLE IMPACT, WE AIM TO ELEVATE OUR CLIENTS’ BRANDS, FOSTERING MEANINGFUL CONNECTIONS WITH THEIR AUDIENCES AND SETTING NEW STANDARDS IN COMMERCIAL VIDEO PRODUCTION.</p>
                </div>
                <div className='max-md:order-1 order-2'>
                    <img className='text-2xl max-md:w-full rounded-4xl' src={assets.vision_image} alt="" />
                </div>
            </div>

        </div>
    )
}

export default VisionSection
