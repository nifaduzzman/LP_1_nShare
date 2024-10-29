"use client"
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import Post from '@/components/Post'
type Ob ={
  _id:String,
  userName:String,
  userId:String, 
  email:String
}
function page({params}:any) {
  const [userDetails, setUserDetails] = useState<any>()
  const [userPosts,setUserPosts] = useState<any>()
  const {data:session} = useSession()
  const [shareText,setShareText] = useState<string>("")

  useEffect(()=>{
    try {
   
    const fetchUserData = async ()=>{
      const res = await fetch(`/api/profileData?_id=${params.userId}`)
      if(!res.ok) throw new Error("Data fetch erorr")
      const data = await res.json()
      setUserDetails(data.user)
    }
    fetchUserData()
     
    } catch (error) {
     console.log("Error Fatching userdata") 
    }
    
  },[])
  userDetails && console.log(userDetails._id)
  useEffect(()=>{
    const fetchUserPosts = async()=>{
      const res = await fetch(`/api/oneUserShare?userId=${userDetails?._id}`)
      const data = await res.json()

      setUserPosts(data.res)
    }
    fetchUserPosts()
  },[userDetails])

  console.log(userPosts)
  const handleSubmit =async(e:any)=>{
    e.preventDefault()
    if(!shareText){
      return;
    }
    await fetch('/api/share',{
      method:"POST",
      headers:{
        "Content-Type":"apllication/json"
      },
      body:JSON.stringify({
        text: shareText,
        userId : userDetails._id,
        userName: userDetails.userName
      })
    })
    setShareText("")
  }
  return (
    <div className='bg-slate-200 min-h-screen w-[70%]  mx-auto '>
      {
        userDetails &&(
          
        <div className='w-full min-h-96 bg-slate-50 flex justify-between p-12'>
          <div className='flex flex-col items-center '>
            <p  className='h-32  w-32 rounded-full bg-slate-800 grid place-items-center text-6xl text-orange-400'>{userDetails.userName.charAt(0).toUpperCase()}</p>
            <p className='text-3xl font-semibold'>{userDetails.userName}</p>
          </div>
          <div className='justify-between items-center flex flex-col'>
          <div>
              {
                userPosts&& <p> {userPosts.length} <span className='text-slate-500'> Post(s)</span></p>

              }
            </div>
            {
              session?.user?.email === userDetails.email?<button className='flex bg-orange-200 hover:bg-orange-300 px-4 py-2 rounded-lg' onClick={()=>signOut()}>Log out</button>:null
            }
           
          </div>
        </div>

        )
      }
      {

        session?.user?.email === userDetails?.email?<form className='min-h-32 w-full bg-slate-600 gap-10  flex items-center  justify-center' onSubmit={handleSubmit}>
         <textarea cols={5} className='w-96 px-4 border-2 border-orange-400 rounded-lg '  value={shareText}  onChange={(e)=>setShareText(e.target.value)} />
         <button className='px-6 py-2 rounded-md text-orange-400 bg-white' type='submit'>Share</button>
       </form>:null

      }
     

      <div className='p-12'>
        <h1 className='text-4xl font-semibold'>All posts</h1>
        {
          userPosts?.map((share:any)=>(
            <Post key={share._id} share={share}/>
          ))
        }
      </div>
    
      
    </div>
  )
}

export default page
