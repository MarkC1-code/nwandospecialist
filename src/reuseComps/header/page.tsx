"use client"
import Sitelogo from '@/resourses/log.png'
import '../reuse.css'
import Image from 'next/image'
import Join from '@/reuseComps/join/page'
import Link from 'next/link'
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import { useState } from 'react'


export default function Page() {
    const [open, setopen] = useState(false)
    const [hidhermb, sethidherm] = useState(false)

    const opencontrol = (e:any) => {
        e.preventDefault(e)
        setopen(!open)
        sethidherm(!hidhermb)
    }
    return (
        <nav className=' sticky top-0 z-50 borderrad text-black bg-neutral-300 flex justify-between pb-4 '>
            <Link href='/' className='flex mr-10 pt-3 pl-2'>
                <Image  src={Sitelogo} className="select-none w-16 h-16 rounded-full" alt="logo" />
                <h1 className=' mt-5 text-nowrap  ml-2 font-bold text-2xl'>
                    Nwando <span className='text-[#098211]'> Specialist</span>
                </h1>
            </Link>
            <div>  
                <ul className='lg:flex xl:flex sm:hidden xs:hidden md:flex'>
                    <Link href='services' className=' mt-[2.5rem] border-r-[1px]  border-green-600  font-bold  h-[2rem] py-0 px-[1rem] mr-[.1rem] ml-[.1rem]'>Services</Link>
                    <Link className='mt-[2.5rem] border-r-[1px] font-bold  border-green-600  h-[2rem] py-0 px-[1rem] mr-[.1rem] ml-[.1rem]' href='about'>About</Link>
                    <Link href='team' className=' mt-[2.5rem] border-r-[1px] border-green-600 font-bold h-[2rem] py-0 px-[1rem] mr-[.1rem] ml-[.1rem]'>Team</Link>
                    <button className=' mt-8 -mr-1'><Join /></button>
                </ul> 
                {!hidhermb ? <div onClick={opencontrol} className='sm:block xs:block md:hidden cursor-pointer lg:hidden xl:hidden mt-8 mr-7  ml-16'>
                    <ListTwoToneIcon sx={{fontSize:35}} />
                    </div> : <div onClick={opencontrol} className='sm:block md:block cursor-pointer lg:hidden xl:hidden mt-8 mr-7  ml-16'>
                    
                    </div>}
                {open && <ul className=' lg:hidden absolute  xl:hidden sm:block xs:block md:hidden bg-black text-white opacity-80 w-[40vw] pb-3 top-24 right-2'>
                    <a onClick={opencontrol} href="about"><Link className='  mt-[2.5rem] block font-bold h-[2rem] py-0 px-[1rem] mr-[.1rem] ml-[.1rem]' href='services'>Services</Link></a>
                    <a onClick={opencontrol} href="about"><Link className=' mt-[2.5rem] block font-bold h-[2rem] py-0 px-[1rem] mr-[.1rem] ml-[.1rem]' href='about'>About</Link></a>
 
                    <button onClick={opencontrol} className=' mt-8 -mr-1'><Join /></button>
                </ul> }
            </div>
        </nav>
    );
}
