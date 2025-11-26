'use client';
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image,setImage] = useState(false);

  const[data,setdata]=useState({
      title:"",
      description:"",
      category:"Startup",
      author:"Vasanth",
      authorimg:"/author_img.png"

  });

  const OnChangeHandler = (event)=>{
     const name = event.target.name;
     const value = event.target.value;
     setdata(()=>({...data,[name]:value}));
  }

  const Onsubmit = async (e)=>{
      e.preventDefault();
      const formdata = new FormData();
      formdata.append('title',data.title);
      formdata.append('description',data.description);
      formdata.append('category',data.category);
      formdata.append('author',data.author);
      formdata.append('authorimg',data.authorimg);
      formdata.append('image',image);

      const response = await axios.post('/api/blog',formdata);
      if(response.data.success){
         toast.success(response.data.message);
         setImage(false);
         setdata({
      title:"",
      description:"",
      category:"Startup",
      author:"Vasanth",
      authorimg:"/author_img.png"

  });

      }else{
         toast.error("Error");
      }
  }

  return (
     <>
     <form onSubmit={Onsubmit} className='pt-2 sm:pt-12 px-5 sm:pl-16'>
       <p className='text-xl font-medium'>Upload Blogs</p>
       <label htmlFor='image'>
          <Image className='mt-3' src={!image?assets.upload_area:URL.createObjectURL(image)} alt='' height={70} width={140}/>
       </label>
       <input  onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
       <p className='font-medium text-lg mt-2'>Blog Title</p>
       <input   name="title" onChange={OnChangeHandler} value={data.title} className='w-full mt-3 px-3 py-2 sm:w-[500px] border ' type='text' placeholder='Enter title' required/>
      <p className='font-medium text-lg mt-4'>Blog Description</p>
       <textarea   name="description" onChange={OnChangeHandler} value={data.description} className='w-full mt-3 px-3 py-2 sm:w-[500px] border ' type='text' rows={6} placeholder='Enter desc...' required/>
     <p className='font-medium text-lg mt-3'>Blog Category</p>
     <select  onChange={OnChangeHandler} value={data.category} name='category' className='w-40 mt-4 px-3 py-2 border text-gray-500'>
      <option value='Startup'>Startup</option>
      <option value='Technology'>Technology</option>
      <option value='Lifestyle'>Lifestyle</option>
     </select>
     <br/>
     <button type='submit' className='text-white mt-4 py-2 rounded-2xl  bg-black w-40 ' >Add</button>
     </form>
    
     </>
  )
}

export default page
