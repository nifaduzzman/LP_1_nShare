"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React,{useState} from 'react'

function page() {
  const [userName , setUserName] = useState<string>("")
  const [email , setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [message, setMessage] = useState<{green:boolean, text:string}>({green:false, text:""})
  const handleSubmit =async (e:any)=>{
    e.preventDefault();
    if(!userName && !email && !password){
      setMessage({green:false, text:"All field needed."})
      return
    }
    const res = await fetch('api/user',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        userName,
        email,
        password
      })
    })

    const {resText} = await res.json()
    setMessage({green:true, text:resText})
    redirect('/login')
    
  }
  return (
    <main className='grid h-screen place-items-center'>
      <form  className='min-h-40 min-w-52 shadow-lg p-8 gap-4 grid border-t-4 rounded-xl border-sky-400 ' onSubmit={handleSubmit}>
        <h1 className='text-4xl '>Register</h1>
        <input type="text" 
          spellCheck="false"
          className='w-[500px] py-2 px-4 border'
          placeholder='Enter user name'
          value={userName}
          onChange={e=>setUserName(e.target.value)}

        />
        <input type="email" 
          spellCheck="false"

          className='w-[500px] py-2 px-4 border'
          placeholder='Enter email'
          value={email}
          onChange={e=>setEmail(e.target.value)}

        />
        <input type="password" 
          spellCheck="false"

          className='w-[500px] py-2 px-4 border'
          placeholder='Enter password'
          value={password}
          onChange={e=>setPassword(e.target.value)} 
        />
        {
         message.text && <div className={`${message.green?'bg-green-400':'bg-red-400'} px-4 rounded-lg py-1 font-semibold w-fit`}>
          {message.text}

         </div> 
        }
        <div className='w-full flex justify-end gap-2 text-slate-500'>
          do have account? <Link href={'/login'} className='hover:underline text-slate-900'> login</Link>

        </div>
        <button className='py-2 bg-sky-400 hover:bg-sky-500 rounded-sm ' type='submit'>Sign in</button>
      </form>
      
    </main>
  )
}

export default page
