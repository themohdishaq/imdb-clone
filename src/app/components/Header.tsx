
"use client"
import React from 'react';
import Menuitems from './Menuitems';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiTeamLine } from "react-icons/ri";

import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useSession } from "next-auth/react";
import UserButton from './Userbutton';

const Header: React.FC = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <div className='flex gap-4'>
                <Menuitems title="home" address="/" Icon={AiFillHome} />
                <Menuitems title="about" address="/about" Icon={BsFillInfoCircleFill} />
            </div>
            <div className='flex items-center gap-4'>
                <DarkModeSwitch />
                { session && (<>
                <Link href={"/"} className='flex gap-1 items-center'>
                    <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
                        IMDb
                    </span>
                    <span className='text-xl hidden sm:inline'>
                        Clone
                    </span>
                </Link>
                </>
                )}
                <div>
                    <UserButton session={session} />
                </div>
                

            </div>
        </div>
    );
}

export default Header;
