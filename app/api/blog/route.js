import { NextResponse } from "next/server";
import ConnectDb from "@/lib/config/db.js";
import blogmodel from "@/lib/Models/blogmodel";
import { writeFile } from 'fs/promises';

// get all data from the api
export async function GET(req) {
  await ConnectDb();
  const blogid = await req.nextUrl.searchParams.get('id');

  if(blogid){
       const blog = await blogmodel.findById(blogid);
       return NextResponse.json(blog);
  }else{
     const blogs = await blogmodel.find({});
     return NextResponse.json({blogs});
  }
}

//Post data to the api
export async function POST(req){
    
      await ConnectDb();
      const formData =  await req.formData();
      const datetime = Date.now();

      const image = await formData.get("image");  //get image from form
      const byteimage = await image.arrayBuffer(); //get image bytes
      const buffer = Buffer.from(byteimage);    //form the byte in to image
      const path = `./public/${datetime}_${image.name}`  // file path
      await writeFile(path,buffer);     // create image file 
      const imageurl = `/${datetime}_${image.name}`;

      const blogdata = {
           title:`${formData.get('title')}`,
           description:`${formData.get('description')}`,
           category:`${formData.get('category')}`,
           author:`${formData.get('author')}`,
           image:`${imageurl}`,
           authorimg:`${formData.get('authorimg')}`
      }

      await blogmodel.create(blogdata);
      console.log(blogdata);

      return NextResponse.json({success:true,message:"Blog Added"})
}