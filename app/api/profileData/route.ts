import { NextResponse } from "next/server";
import connectDb from '@/libs/config/mongodb'
import User from '@/libs/models/user'


export const GET = async(request:Request)=>{
  try {
    
    const url = new URL(request.url)
    const _id = url.searchParams.get('_id')
    console.log(_id)
    await connectDb()
    const user = await User.findOne({_id})
    return NextResponse.json({user},{status:201})
    
  } catch (error) {
    console.log("Error", error)
    return NextResponse.json({error})
  }

}