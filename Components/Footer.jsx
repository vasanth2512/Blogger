import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-around items-center py-5 bg-black gap-6 sm:gap-0 sm:flex-row '>
      <Image src={assets.logo_light} alt='' width={120}/>
      <p className='text-sm text-white '>All rights reserved .copyright @blogger</p>
      <div className='flex gap-1'>
          <Image src={assets.facebook_icon} alt='' width={40}/>
          <Image src={assets.twitter_icon} alt='' width={40}/>
          <Image src={assets.googleplus_icon} alt='' width={40}/>
      </div>
    </div>
  )
}

export default Footer
