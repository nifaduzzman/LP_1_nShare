"use client"
import { useSession } from "next-auth/react";
export default function Home() {
  const {data:session} = useSession()
  console.log(session)
  return (
   <main className="flex justify-center items-center h-screen text-6xl">
      {
        session?(
          <div >User : {session.user?.email}</div>
        ):(
          <div>Please login</div>
        )
      }
   </main>
  );
}
