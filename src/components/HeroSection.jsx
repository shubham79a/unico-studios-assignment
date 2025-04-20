import React from 'react'
import { Button } from './ui/button'
import { ArrowBigRightDash } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-gradient-to-tr from-[45%] to-[#B886F680] pt-3 max-sm:pt-1'>
            <div>
                <img src={"https://s3-alpha-sig.figma.com/img/888f/fbfa/7870d09c34fb597298ea2e1bf1dd42a3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ObHOpc0E77E7llivhl5ZLYYCdxWpu5cM2R4AOT1iZVOS5kbEyNVyZMQ5A~V03GqTgLegvLFW16aEksfIkd-V8pm3VJpfnhaap-IQsm0J1j90P3xMhPE0BdAPKZXNHUBiif2O8lC2sb8lsdDgFDtbi0~duiegV83~Vj1z8Zf79FtWDFPaBx7lxasRx1F6tkwe07PL34Nao7D78mdnoC-YHhtjzR8ZTixkrk~-JIqmjeh5E~Q0khiC4s1S5Jd9bPsbDgidznOgDjFQXfstScXD-o70ekqSGdYuWI6yEqG5Ktgpz~Hom4ZqAn817zg131AxG5KTmIMxNaIU4OZQ-9E4Xw__"}
                    alt="hero-section-image" className='max-sm:px-1 max-sm:h-60 sm:px-6 sm:h-96 md:h-[400px]  md:px-8  rounded-4xl md:rounded-[80px] lg:h-[80vh] w-full' />
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center max-sm:px-4 sm:px-16 md:px-24 lg:px-32 max-sm:py-12 sm:py-16 text-white'>
                <div className=' max-md:pb-7'>
                    <p className='font-medium lg:text-6xl md:text-4xl text-3xl pb-3 leading-[1] tracking-normal'>ABOUT US</p>
                    <Button onClick={() => navigate("/our-work")} variant={"outline"} className="bg-[#B886F6] rounded-full border-[#B886F6] cursor-pointer hover:scale-105 transition-all duration-600">READ MORE <span><ArrowBigRightDash /></span></Button>
                </div>
                <div>
                    <p className='font-normal text-2xl'>We are team of passionate storytellers and skilled creators dedicated to producing exceptional commercial content. With a shared commitment to quality and innovation, we specialize in crafting compelling visuals that connect brands with their audiences.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
