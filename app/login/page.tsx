"use client"
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'
 
function page() { 
  const [email , setEmail] = useState<string>("")
  const [password, setPassowrd] = useState<string>("")
  const [message, setMessage] = useState<{green:boolean, text:string}>({green:false, text:""})
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
      setMessage({green:false, text:"Wrong email or password"})
      console.log(res)
      return;
    }  
    redirect('/')
    
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
        <div className='w-full flex justify-end'>
          don't have account? <Link href={'/register'} className='hover:underline'> register</Link>

        </div>
      </form>
      
    </main>
  )
}

export default page
