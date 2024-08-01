"use client";
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

interface NavbarItemProps {
    title: string;
    param: string;
}

function NavbarItem({ title, param }: NavbarItemProps) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre'); 


    return (
        <div>
            <Link 
                href={`/?genre=${param}`}
                className={`cursor-pointer hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-amber-500 decoration-4 rounded-lg ' : ''}`}
            >
                {title}
            </Link>
        </div>
    );
}

export default NavbarItem;
