import mongoose from "mongoose"

const connectDb = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)
    console.log("Connected To DB.")
  } catch (error) {
    console.log("Failed to connect db.")
    console.log(error)
    
  }
}
export default connectDb;