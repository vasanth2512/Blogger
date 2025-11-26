import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100 '>
        <Link href={"/"} className='border px-5 sm:px-10 py-2 border-black  '>
            <Image src={assets.logo} alt='' width={130}/>
        </Link>
        <div className='border h-screen  border-black font-medium relative py-12 w-28 sm:w-68' >
          <div className='w-[50%] sm:w-[80%] absolute right-0' >
            <Link  href={'/admin/addproduct'} className='flex items-center py-2 px-2  sm:px-6 shadow-[-5px_5px_0px_#000000] border gap-2 border-black '> 
                <Image src={assets.add_icon} alt='' width={25}/> <p> Add Blogs</p>
           </Link>
           <Link  href={'/admin/bloglist'} className='flex items-center py-2 px-2 mt-5 sm:px-6 shadow-[-5px_5px_0px_#000000] border gap-2 border-black '> 
                <Image src={assets.blog_icon} alt='' width={25}/> <p>Blog List</p>
           </Link>
           <Link  href={'/admin/subscription'} className='flex items-center py-2 px-2 mt-5 sm:px-6 shadow-[-5px_5px_0px_#000000] border gap-2 border-black '> 
                <Image src={assets.email_icon} alt='' width={25}/> <p>Subscription</p>
           </Link>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
