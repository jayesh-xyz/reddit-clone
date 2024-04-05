import Image from 'next/image'
import React from 'react'
import redditIcon from "@/assets/redditLogo.svg"
import { BeakerIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/16/solid'
import "./header.css"

function Header() {
  return (
    <div id='header' className='sticky top-0 z-10 flex px-4 py-2 drop-shadow-sm '>
     <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer' >
        <Image objectFit='contain' src={redditIcon} alt= "img" layout='fill'/>
     </div>
     <div className='flex items-center mx-7 xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5' />
        <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5'/>
     </div>
    </div>
  )
}

export default Header
