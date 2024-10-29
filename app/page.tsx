"use client"
import PostList from "@/components/PostList";
import { useSession } from "next-auth/react";
export default function Home() {
  const {data:session} = useSession()
  
  return (
   <main className="w-[70%] bg-slate-100 min-h-screen mx-auto">
      <PostList/>
   </main>
  );
}
