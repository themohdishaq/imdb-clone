import React from 'react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from 'next/image'
function UserProfile({
    name,
    image
}:{
    name?: string | null
    image?: string | null
  
}) {
    
  return (
    <Avatar className='bg-white text-black'>
        {
            
            image && (
                <Image
                src={image}
                alt={name || "user avator"}
                width={40}
                height={40}
                className="rounded-full"
                />
            )
        }

</Avatar>

  )
}

export default UserProfile
