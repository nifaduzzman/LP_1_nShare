"use client"
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
 
function page() { 
  const [email , setEmail] = useState<string>("")
  const [password, setPassowrd] = useState<string>("")
  const [message, setMessage] = useState<{green:boolean, text:string}>({green:false, text:"adf"})
  const handleSubmit = async(e:any)=>{
    e.preventDefault();
    if(!email && !password){
      setMessage({green:false,text:"All field needed"})
    }
    const res = await signIn('credentials',{
      email,
      password,
      redirect:false
    })
    if(res?.error){
      setMessage({green:false, text:"Not okey"})
      console.log(res)
      return;
    }  
    setMessage({green:true, text:"Done"})
    
  }

  return (
    <main className='grid h-screen place-items-center'>
      <form  className='min-h-40 min-w-52 shadow-lg p-8 gap-4 grid border-t-4 rounded-xl border-sky-400 ' onSubmit={handleSubmit}>
        <h1 className='text-4xl '>Login</h1>
        <input type="email" 
          className='w-[500px] py-2 px-4 border'
          placeholder='Enter email'
          value={email}
          onChange={e=>setEmail(e.target.value)}

        />
        <input type="password" 
          className='w-[500px] py-2 px-4 border'
          placeholder='Enter password'
          value={password}
          onChange={e=>setPassowrd(e.target.value)} 
        />
        {
         message.text && <div className={`${message.green?'bg-green-400':'bg-red-400'} px-4 rounded-lg py-1 font-semibold w-fit`}>
          {message.text}

         </div> 
        }
        <button className='py-2 bg-sky-400 hover:bg-sky-500 rounded-sm ' type='submit'>Login</button>
      </form>
      
    </main>
  )
}

export default page
