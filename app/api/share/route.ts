import connectDb from "@/libs/config/mongodb"
import Share from "@/libs/models/share"
import { NextResponse } from "next/server"

export const POST = async(request:Request)=>{
  try {
    const res = await request.json()
    console.log(res)
    await connectDb()
    await Share.create(res);
    return NextResponse.json({message:"Share done"})
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({error})
  }
}
export const GET = async()=>{
  try {
    const res = await Share.find()
    return NextResponse.json({res})
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({error})
  }
}

