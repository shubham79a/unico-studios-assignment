import React from 'react'
import assets from '../assets/assets'

const VisionSection = () => {
    return (
        <div>
            <div className='grid grid-cols-2 px-24 py-20 gap-8 text-white'>
                <div className=''>
                    <p className='font-normal sm:text-6xl tracking-[-0.035em]'>OUR VISION</p>
                    <p className='font-normal tracking-[-0.03em] text-3xl leading-[100%]'>PARTNER WITH BRANDS SEEKING TO TRANSFORM IDEAS INTO POWERFUL VISUAL STORIES. WE STRIVE TO PUSH THE BOUNDARIES OF CREATIVITY, BLENDING ARTISTRY WITH INNOVATION TO CRAFT VIDEOS THAT CAPTIVATE, CONNECT, AND INSPIRE ACTION. BY DELIVERING EXCEPTIONAL QUALITY AND MEASURABLE IMPACT, WE AIM TO ELEVATE OUR CLIENTS’ BRANDS, FOSTERING MEANINGFUL CONNECTIONS WITH THEIR AUDIENCES AND SETTING NEW STANDARDS IN COMMERCIAL VIDEO PRODUCTION.</p>
                </div>
                <div>
                    <img src={assets.vision_image} alt="" />
                </div>
            </div>

        </div>
    )
}

export default VisionSection
