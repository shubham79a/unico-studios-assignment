import React from 'react'
import { Button } from './ui/button'
import { ArrowBigLeft, ArrowBigRightDash } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const ConnectSection = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                backgroundImage: `url("https://s3-alpha-sig.figma.com/img/c6a0/1d81/831cfdf7562e44706dd78e4fe3082f06?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jaYD9IT6SKnTo07qsPZaDb1GXDbKHYU-f3LcXR1x5FuOem9YueXVvZdrtuE4NAVHUBgcWzU-32qiqiJxWRBgdlynIDzLDCsWbNqXImVrlcgXqodvDg~TU2U3v~h6TphSHWFRoxCQmV2zfYNuKFftFJr2BcbyEXC8ulMF-pCPuI7lMOK00swpcE4gVuLFPzzogrEYr5VlWMvNXMcZ8boI0uwUSb4z1NKaNP-8gqL~wKLlqAus0bczHUdYvusX1Qv-H1zq~0x93ZBAz1Ex3FdCROBOw-oskW3DMIVOBJKkFVulr2l1ziTxPb46EpQgI94XaPu6t7im9Xt9WDjDe8IsSA__")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='md:h-[490px] md:w-[100%] text-white max-sm:px-4 sm:px-16 md:px-24 lg:px-32 max-sm:py-4 sm:py-16 lg:pt-36'
        >

            <div className='flex'>
                <div className='flex items-left flex-col'>
                    <div>
                        <p className='sm:text-4xl max-sm:2xl pb-2 leading-[1] font-medium'>LET US BRING YOUR <br /> VISION TO LIFE</p>
                    </div>
                    <div >
                        <p className='pb-4 text-sm tracking-wide leading-[1] font-normal'>WHETHER YOU'RE LAUNCHING A BRAND, TELLING A POWERFUL STORY, OR <br /> BUILDING AWARENESS—OUR CREW IS READY TO MAKE IT UNFORGETTABLE. <br />FROM CONCEPT TO CUT, WE’RE YOUR CREATIVE PARTNER EVERY STEP OF <br />THE WAY.</p>
                    </div>
                    <div>
                        <Button onClick={() => navigate("/contact-us")} variant={"outline"} className="bg-[#B886F6] rounded-full border-[#B886F6] hover:scale-105 transition-all duration-600 cursor-pointer">LET'S TALK <span> <ArrowBigRightDash /> </span></Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConnectSection
