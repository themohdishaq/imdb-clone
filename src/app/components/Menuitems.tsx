import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  title: string,
  address: string,
  Icon: React.ComponentType<any>
}

function Menuitems({ title, address, Icon }: MenuItemProps) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon  className="text-2xl sm:hidden "/>
        <p className='uppercase hidden sm:inline text-sm '>{title}</p>
    </Link>
  )
}

export default Menuitems
