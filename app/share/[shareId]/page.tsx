"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page({params}:any) {
  const [post, setPost] = useState<any>()
  console.log("id",params.shareId)

  useEffect(()=>{
    const fetchData = async ()=>{ 
      console.log("Hello")
      const res = await fetch(`/api/share/single?_id=${params.shareId}`)
      const data = await res.json()
    
      setPost(data.res)
    }
    fetchData()
  },[])
  console.log("post" , post)
  return (
    <div className='w-[70%]  min-h-screen py-20 px-6 mx-auto bg-slate-200 '>
      {
          post &&(
            <div className='w-full flex flex-col gap-10'>

            <Link href={`/u/${post.userId}`} className='text-3xl hover:underline'>{post.userName}</Link>
            <p>
              {
                post.text
              }

            </p>
            </div>

          )
      }
     
      
    </div>
  )
}

export default page
