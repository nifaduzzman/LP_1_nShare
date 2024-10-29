
"use client"
import React, { useEffect, useState } from 'react'


import { TiHome } from "react-icons/ti";
import { MdPeople } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { CiFaceSmile } from "react-icons/ci";
import { usePathname } from 'next/navigation';

type Ob ={
  _id:String,
  userName:String,
  userId:String, 
  email:String
}
function Navbar() {
  const {data:session} = useSession()

  const [userDetails , setUserDetails] = useState<Ob>()
  useEffect(() => {
    const fetchData = async()=>{
      const res = await fetch(`api/user?email=${session?.user?.email}`)
      const data = await res.json()
      setUserDetails(data.user)
   
    }
    session&&fetchData()
  }, [session])
  const pathName = usePathname()

  const navLinks = [
    {
      name:"Home",
      title:<TiHome />,
      path:"/",
    },{
      name:"People",
      title:<MdPeople/>,
      path:"/peoples"
    },{
      name:"Book marks",
      title:<FaBookmark />,
      path:"/bookmars"
    }
  ]
  console.log("userDetails :" ,userDetails)
  const noNav = ["/login","/register"]
  return (
    <nav className={`w-full px-8 min-h-10 bg-slate-300 flex justify-between items-center py-4 pl-[30%] ${noNav.includes(pathName)?"hidden":null}`}>

      <div className='flex gap-12 *:px-12 '>
        {
          navLinks.map((link)=>(
            <Link href={link.path} key={link.path} className={`text-2xl ${pathName===link.path?"text-orange-400":null} `}>{link.title}</Link>
          ))
        }
      </div>
      {
        session && userDetails?(
          <Link href={`/u/${userDetails?._id}`} className=' rounded-full cursor-pointer '>
            {/* <CiFaceSmile className='w-full h-full hover:text-orange-400' onClick={()=>signOut()}/> */}
            <p className='h-12 w-12 bg-slate-700 rounded-full flex items-center justify-center text-4xl text-orange-400'>{session.user?.email?.charAt(0).toUpperCase()}</p>
          </Link>

        ):(
          <Link href={"/login"} className='px-4 py-2 bg-orange-300 hover:bg-orange-400 '>
            Login
            

          </Link>
        )


      }
    </nav>
  )
}

export default Navbar
