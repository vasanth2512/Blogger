import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px28'>
      <div className='flex justify-between items-center'>
       <Image src={assets.logo}  width={180} alt='' className='w-[130px] sm:w-auto'/>
      <Link href={'/admin/addproduct'}>
       <button className='flex items-center font-medium px-3 py-1 border border-solid border-black shadow-[-7px_7px_0px_#000000] sm:py-3 sm:px-6 gap-2'>
               Get Start <Image alt='' src={assets.arrow}/></button>
      </Link>
      </div>
      <div className='text-center my-8 '>
         <h1 className='sm:text-5xl font-medium  text-3xl '>Latest Blogs </h1>
         <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta architecto tempore velit hic, cupiditate error temporibus consequuntur aut, rerum quidem alias. Quod sint facilis deleniti eius accusamus, perferendis quia!</p>
      </div>
      <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border shadow-[-7px_7px_0px_#000000] border-black ' action=''>
         <input type='email' placeholder='Enter ur Email' className='pl-4 outline-none'/>
        <button type='submit' className=' border-l border-black px-4 py-4 sm:px-8 active:bg-gray-600 active:text-white'>subscribe</button>
      </form>
    </div>
  )
}

export default Header
