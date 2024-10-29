import { NextResponse } from "next/server";
import connectDb from '@/libs/config/mongodb'
import User from '@/libs/models/user'



export const GET = async()=>{
  try {

    await connectDb()
    const user = await User.find()
    return NextResponse.json({user},{status:201})
    
  } catch (error) {
    console.log("Error", error)
    return NextResponse.json({error})
  }

}