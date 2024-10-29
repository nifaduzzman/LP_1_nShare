import React, { useEffect, useState } from 'react'
import Post from './Post'


function PostList() {
  const [shares,setShares] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch('api/share')
      const posts = await res.json()
      setShares(posts.res)
      
      
      setLoading(false)
    }
    fetchData()
  },[])
  return (
    <div className='w-full px-4 py-8 font-bold divide-y'>
      <h1 className='text-4xl '>Post list</h1>
       

      {
        loading?(
          <div className='text-4xl h-screen gird place-content-center w-full'>Loading...</div>
        ):(
        shares?.map((share:any)=>(
          <Post share={share} key={share?._id}/> 
        )))
      }
      
    </div>
  )
}

export default PostList


