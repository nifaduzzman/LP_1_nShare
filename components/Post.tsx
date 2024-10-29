import Link from 'next/link'
import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
function Post({share}:any) {


  return (
    <div className='w-full min-h-10 py-8 px-4 '>
        <Link href={`/u/${share.userId}`} className='text-md hover:underline py-2'>{share.userName}</Link>
        <Link href={`/share/${share._id}`} className='text-slate-500 text-sm py-4 px-2 block'>{share.text}</Link>
        <div className='flex text-md w-full justify-start items-center gap-12 mt-2'>
          <div className='flex gap-2 items-center'>
            <AiOutlineLike className='cursor-pointer'/>{share.like}
          </div>  

          <FaBookmark className='cursor-pointer'/>
          <FaShare className='cursor-pointer'/>

        </div>
    </div>
  )
}

export default Post
