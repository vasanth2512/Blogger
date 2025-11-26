"use client";
// import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import Blogitem from './Blogitem'
import axios from 'axios';

const BlogList = () => {

    const[menu,Setmenu] = useState("All");
    const[blogs,SetBlogs] = useState([]);

    const fetchblogs =async ()=>{
      const response = await axios.get("/api/blog");
      SetBlogs(response.data.blogs);

    }

    useEffect(()=>{
      fetchblogs();
    },[]);

  return (
    <div>
     <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>Setmenu("All")}  className={menu==="All"?'bg-black text-white rounded-sm px-4 py-1':""} >All</button>
        <button onClick={()=>Setmenu("Technology")} className={menu==="Technology"?'bg-black text-white rounded-sm px-4 py-1':""}>Techonology</button>
        <button onClick={()=>Setmenu("Startup")} className={menu==="Startup"?'bg-black text-white rounded-sm px-4 py-1':""}>StartUp</button>
        <button onClick={()=>Setmenu("Lifestyle")} className={menu==="Lifestyle"?'bg-black text-white rounded-sm px-4 py-1':""}>LifeStyle</button>
     </div>
     <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
     {
       blogs.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
            return <Blogitem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
       })
     }
     </div>
    </div>
  )
}

export default BlogList
