import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className=''>
            <div>
                <img src={"https://s3-alpha-sig.figma.com/img/888f/fbfa/7870d09c34fb597298ea2e1bf1dd42a3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ObHOpc0E77E7llivhl5ZLYYCdxWpu5cM2R4AOT1iZVOS5kbEyNVyZMQ5A~V03GqTgLegvLFW16aEksfIkd-V8pm3VJpfnhaap-IQsm0J1j90P3xMhPE0BdAPKZXNHUBiif2O8lC2sb8lsdDgFDtbi0~duiegV83~Vj1z8Zf79FtWDFPaBx7lxasRx1F6tkwe07PL34Nao7D78mdnoC-YHhtjzR8ZTixkrk~-JIqmjeh5E~Q0khiC4s1S5Jd9bPsbDgidznOgDjFQXfstScXD-o70ekqSGdYuWI6yEqG5Ktgpz~Hom4ZqAn817zg131AxG5KTmIMxNaIU4OZQ-9E4Xw__"}
                    alt="hero-section-image" className='px-6 rounded-[50px] h-[80vh] w-full' />
            </div>
            <div className='grid grid-cols-2 items-center px-24 py-16 text-white'>
                <div className=''>
                    <p className='font-medium text-6xl'>ABOUT US</p>
                    <Button variant={"outline"}>READ MORE</Button>
                </div>
                <div>
                    <p>We are team of passionate storytellers and skilled creators dedicated to producing exceptional commercial content. With a shared commitment to quality and innovation, we specialize in crafting compelling visuals that connect brands with their audiences.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
