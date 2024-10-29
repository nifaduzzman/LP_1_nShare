
import connectDb from "@/libs/config/mongodb"
import Share from "@/libs/models/share"
import { NextResponse } from "next/server"


export const GET = async(request:Request)=>{
  const url = new URL(request.url)
  const userId = url.searchParams.get('userId')
  try {
    await connectDb()
    const res = await Share.find({userId})
    console.log("res:",res)
    return NextResponse.json({res})
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({error})
  }
}

