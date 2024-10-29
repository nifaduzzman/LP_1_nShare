
import connectDb from "@/libs/config/mongodb"
import Share from "@/libs/models/share"
import { NextResponse } from "next/server"



export const GET = async(request:Request)=>{
  const url = new URL(request.url)
  const _id = url.searchParams.get('_id')
  try {
    console.log("Id " ,_id)
    await connectDb()
    const res = await Share.findOne({_id}) 
    return NextResponse.json({res})
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({error})
  }
}
