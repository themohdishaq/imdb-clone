import React from 'react'
import Menuitems from './Menuitems'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Header: React.FC = () => {
  return (
    <div className='flex justify-between items-center p-3  mx-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <Menuitems title="home" address="/" Icon={AiFillHome} />
        <Menuitems title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center gap-4'>
        <DarkModeSwitch />
      <Link href={"/"} className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            IMDb
        </span>
        <span  className='text-xl hidden sm:inline'>
            Clone
        </span>
      </Link>
      </div>
    </div>
  )
}

export default Header
