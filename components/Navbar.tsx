
"use client"
import React from 'react'


import { TiHome } from "react-icons/ti";
import { MdPeople } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { CiFaceSmile } from "react-icons/ci";
import { usePathname } from 'next/navigation';
function Navbar() {
  const {data:session} = useSession()
  console.log(session)
  const pathName = usePathname()
  console.log(pathName)
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
        session?(
          <Link href='/' className=' rounded-full cursor-pointer '>
            {/* <CiFaceSmile className='w-full h-full hover:text-orange-400' onClick={()=>signOut()}/> */}
            <p  className='px-4 py-2 bg-orange-300 hover:bg-orange-400 ' onClick={()=>signOut()}>
              Log out
            </p>
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
