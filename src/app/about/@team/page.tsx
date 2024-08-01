import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function page() {
  return (
    <div className='w-full h-screen relative flex sm:flex-col justify-center items-center'>
        <Image src="/team.jpeg" alt="team" height={1000} width={1000} className='object-cover w-full h-auto'/>
        <div>
            <Link href={'/about/teamdetails'}>
            <span className="absolute flex top-1/2 right-1/2 h-24 w-24">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>

</span>
                <h1 className='text-sm sm:text-xl font-semibold text-slate-200 py-4 px-2 bg-blue-600 hover:bg-blue-500 ring-1 rounded-lg'>
                    Get to know about our team
                </h1>
                
            </Link>
        </div>
      
    </div>
  )
}

export default page
