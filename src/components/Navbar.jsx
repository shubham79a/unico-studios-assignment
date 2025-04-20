import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    const [showGradient, setShowGradient] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowGradient(false);
            } else {
                setShowGradient(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`bg-background/50 bg-[#2A2A2A66] sticky top-0 backdrop-blur border-b z-10 max-sm:px-4 sm:px-8 md:px-16 lg:px-20 py-4 overflow-hidden ${showGradient ? 'bg-gradient-to-br from-45% to-[#B886F680]' : ''}`}>
            <div className=' flex justify-between items-center'>
                <div>
                    <Link to="/" className='font-extrabold text-3xl text-white'>tnp</Link>
                </div>
                <div className='max-sm:hidden'>
                    <ul className='flex gap-4 items-center text-white'>
                        <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'bg-[#B886F6] px-3.5 py-1 rounded-full' : ""}`}>HOME</NavLink>
                        <NavLink to="/about-us" className={({ isActive }) => `font-bold ${isActive ? 'bg-[#B886F6] px-3.5 py-1 rounded-full' : ""}`}>ABOUT US</NavLink>
                        <NavLink to="/our-work" className={({ isActive }) => `font-bold ${isActive ? 'bg-[#B886F6] px-3.5 py-1 rounded-full' : ""}`}>OUR WORK</NavLink>
                        <NavLink to="/contact-us" className={({ isActive }) => `font-bold ${isActive ? 'bg-[#B886F6] px-3.5 py-1 rounded-full' : ""}`}>CONTACT US</NavLink>
                    </ul>
                </div>
                <div className='sm:hidden '>
                    <Sheet >
                        <SheetTrigger asChild>
                            <MenuIcon className='text-white' />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                                <SheetDescription>
                                </SheetDescription>
                            </SheetHeader>
                            <ul className='flex flex-col items-start gap-4 px-6 text-white'>
                                <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'bg-[#B886F6] px-3.5 py-1 rounded-full' : ""}`}>HOME</NavLink>
                                <NavLink to="/about-us" className={({ isActive }) => `font-bold ${isActive ? 'bg-[#B886F6] px-3.5 py-1 rounded-full' : ""}`}>ABOUT US</NavLink>
                                <NavLink to="/our-work" className={({ isActive }) => `font-bold ${isActive ? 'bg-[#B886F6] px-3.5 py-1 rounded-full' : ""}`}>OUR WORK</NavLink>
                                <NavLink to="/contact-us" className={({ isActive }) => `font-bold ${isActive ? 'bg-[#B886F6] px-3.5 py-1 rounded-full' : ""}`}>CONTACT US</NavLink>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Navbar
