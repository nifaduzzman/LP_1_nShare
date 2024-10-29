"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
  const [userList,setUserList] = useState<any>([])
  useEffect(()=>{
    try {
      const fetchData = async()=>{
        
          const res = await fetch('/api/user/all')
          const users = await res.json()
          setUserList(users.user)
        }
        fetchData()
    } catch (error) {
      console.log(error)  
    }
  },[])
  console.log(userList)
  return (
    <div className='flex flex-col w-[70%] mx-auto px-6 py-12 gap-2 bg-slate-200 min-h-screen'>
      <h1 className='text-3xl font-semibold'>All users</h1>
      {
        userList?.map((user:any)=>(
          <Link href={`/u/${user._id}`} className='py-4 px-2 bg-slate-50 hover:bg-slate-100 rounded-md '>
            {user.userName}

          </Link>
        ))
      }
      
    </div>
  )
}

export default page
