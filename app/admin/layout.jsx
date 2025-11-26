import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponent/Sidebar";
import Image from "next/image";
  import { ToastContainer, toast } from 'react-toastify';

export default function Layout({children}){
  
    return ( <>
    <div className="flex">
      <ToastContainer theme="dark"/>
      <Sidebar/>
      <div className="flex flex-col w-full" >
         <div className="flex justify-between py-3 w-full max-h-[55px] border border-black px-12 items-center ">
              <h3 className="font-medium ">Admin Panal</h3>
              <Image width={40} src={assets.profile_icon} alt="" />
         </div>
         {children}
      </div>
    </div>
    </>
       )
}