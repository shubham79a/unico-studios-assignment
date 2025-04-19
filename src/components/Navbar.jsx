import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-background/50 bg-[#2A2A2A66] sticky top-0 backdrop-blur border-b z-10 px-8 py-4 '>
            <div className=' flex justify-between items-center'>
                <div>
                    <p className='font-extrabold text-2xl text-white'>tnp</p>
                </div>
                <div>
                    <ul className='flex gap-4 items-center'>
                        <li className='text-white font-bold'>HOME</li>
                        <li className='text-white font-bold'>ABOUT US</li>
                        <li className='text-white font-bold'>OUR WORK</li>
                        <li className='text-white font-bold'>CONTACT US</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
