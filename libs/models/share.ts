import { model, models, Schema } from "mongoose";


const shareSchema = new Schema({
  text:{
    required: true,
    type:String,
  },
  userId:{
    type:String,
    required:true
  },
  userName:{
    type:String,
    required:true
  },
  like:{
    type:Number,
    default:0
  }
},
{
  timestamps:true
})

const Share = models?.Share || model("Share",shareSchema)
export default Share;