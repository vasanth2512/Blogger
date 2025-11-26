import { assets} from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogitem = ({image,category,title,description,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
    <Link href={`/blog/${id}`}>
     <Image src={image} alt='' className='border-b border-black' height={300} width={300}/>
    </Link>
     <p className='inline-block bg-black text-sm text-white mt-3 ml-5 px-1'>{category}</p>
     <div className='p-5'>
      <h5 className='text-lg mb-2 font-medium tracking-tight text-gray-900 '>{title}</h5>
      <p className='text-sm tracking-tight text-gray-700 mb-1'>{description}</p>
     <Link href={`/blog/${id}`} className='inline-flex items-center py-2 font-semibold text-center '>
            Read More <Image className='ml-2' src={assets.arrow} width={12} alt=''/>
     </Link>
     </div>   
      
     </div>
  )
}

export default Blogitem
