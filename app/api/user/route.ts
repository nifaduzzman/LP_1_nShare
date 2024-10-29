import { NextResponse } from "next/server";
import connectDb from '@/libs/config/mongodb'
import User from '@/libs/models/user'

export const POST = async (request:Request)=>{
  const {userName,email,password} = await request.json()
  await connectDb();
  await User.create({userName,email,password})
  return NextResponse.json({resText:"User added."})
}


export const GET = async(request:Request)=>{
  try {
    const url = new URL(request.url)
    const email = url.searchParams.get('email')
    const user = await User.findOne({email})
    return NextResponse.json({user},{status:201})
    
  } catch (error) {
    console.log("Error", error)
    return NextResponse.json({error})
  }

}