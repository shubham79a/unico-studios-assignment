import React from 'react'
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


const Navbar = () => {
    return (
        <div className='bg-background/50 bg-[#2A2A2A66] sticky top-0 backdrop-blur border-b z-10 max-sm:px-4 sm:px-8 md:px-16 lg:px-20 py-4 overflow-hidden'>
            <div className=' flex justify-between items-center'>
                <div>
                    <p className='font-extrabold text-2xl text-white'>tnp</p>
                </div>
                <div className='max-sm:hidden'>
                    <ul className='flex gap-4 items-center'>
                        <li className='text-white font-bold'>HOME</li>
                        <li className='text-white font-bold'>ABOUT US</li>
                        <li className='text-white font-bold'>OUR WORK</li>
                        <li className='text-white font-bold'>CONTACT US</li>
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
                            <ul className='flex flex-col items-start gap-4'>
                                <li className='text-white font-bold px-4'>HOME</li>
                                <li className='text-white font-bold px-4'>ABOUT US</li>
                                <li className='text-white font-bold px-4'>OUR WORK</li>
                                <li className='text-white font-bold px-4'>CONTACT US</li>
                            </ul>
                            
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Navbar
