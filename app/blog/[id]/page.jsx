"use client"
import { assets} from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page =  ({params}) =>  {
  
    const [data,setdata] = useState(null);
    const { id } = React.use(params); 


    const handleclick = async ()=>{
        
      const response = await axios.get('/api/blog',{
        params:{
           id: id
        }
      });
        setdata(response.data);
    }

    // const handleclick = ()=>{
  
    //       const blog = blog_data.find(x => x.id === Number(id));
    //        setdata(blog);
        
    // }

    useEffect(()=>{
       handleclick(); 
    },[]);

    return (
        data?<>
        <div className='bg-gray-200 px-5 py-5 sm:px-28 sm:py-11'>
          <div className=' flex items-center gap-2 justify-between '>
           <Link href={"/"}>
            <Image src={assets.logo} alt='' width={180} className='sm:130px' />
            </Link>
            <button className='flex  border font-semibold border-black gap-2 shadow-[-7px_7px_0px_#000000] sm:px-4 sm:py-4 px-3 py-1' >
              Get Started  <Image src={assets.arrow} alt='' width={15} height={12} />
            </button>
          </div>
            <div className='text-center  my-24'>
                <h1 className='max-w-[700px]  font-semibold text-3xl mx-auto sm:text-5xl'>{data. title}</h1>
                <Image className='border-2 mb-2 border-white rounded-full mx-auto mt-4' src={assets.profile_icon} width={60} height={60} alt='' />
                 <p className='mx-auto font-semibold text-sm sm:text-base'>{data.author}</p>
            </div> 
                 
       </div>
       <div className='mx-5 mb-10 max-w-[800px] mt-[-100px] md:mx-auto'>
               <Image className='mx-w-[700px] border-4 border-white' src={data.image} alt='' height={500} width={1280} />
         {/* NEW CONTENT STARTS HERE */}
  <div className="mt-10 space-y-6 text-lg leading-8 text-gray-800">

    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
    <p>
      {data.description}
    </p>
    <p>
      Curabitur quis justo vel massa viverra consequat. Integer condimentum
      libero a nulla tincidunt, quis placerat risus tincidunt. Sed ut felis
      vitae sem molestie consequat quis eget lorem.
    </p>
    <p>
      Nam non nulla eget sapien maximus consequat. Aliquam erat volutpat. Cras
      id faucibus lorem. Sed pharetra nisi sed ligula tristique, vel pretium
      lorem dictum.
    </p>
    <p>
      Donec bibendum lacus et odio sollicitudin, in sodales ipsum gravida.
      Aliquam sit amet erat at nisl porttitor lobortis sed vitae velit.
    </p>
    <p>
      Pellentesque viverra, leo ut aliquam efficitur, neque mi consectetur
      libero, sit amet cursus tortor justo sit amet neque. Vivamus et augue id
      velit mollis feugiat.
    </p>

    <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
    <p>
      In conclusion, this article demonstrates how structure, layout, and
      content work together to create a readable and visually appealing blog
      post. Continue exploring more ideas and improving your skills.
    </p>

  </div>
  {/* NEW CONTENT ENDS HERE */}
 
   </div> 
  <Footer/>
        </>
        :<></>
    
  )
}

export default page
