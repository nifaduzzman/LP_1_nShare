import React from 'react'

function page() {
  const handleSubmit =(e:any)=>{
    e.preventDefault();
  }
  return (
    <main className='grid h-screen place-items-center'>
      <form  className='min-h-40 min-w-52 shadow-lg p-8 gap-4 grid ' onSubmit={handleSubmit}>
        <h1 className='text-4xl '>Login</h1>
        <input type="email" 
          className='w-[500px] py-2 px-4 border'
          placeholder='Enter email'
        />
        <input type="password" 
          className='w-[500px] py-2 px-4 border'
          placeholder='Enter password'
        />
        <button className='py-2 bg-sky-400 hover:bg-sky-500 rounded-sm ' type='submit'>Login</button>
      </form>
      
    </main>
  )
}

export default page
