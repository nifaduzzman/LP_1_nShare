import { NextResponse } from "next/server";
import connectDb from '@/libs/config/mongodb'
import User from '@/libs/models/user'

export const POST = async (request:Request)=>{
  const {userName,email,password} = await request.json()
  await connectDb();
  await User.create({userName,email,password})
  return NextResponse.json({resText:"User added."})
}
