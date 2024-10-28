
import { model, models, Schema } from "mongoose";


const userSchema = new Schema({
  email:{
    type:String,
    required:true,
  },
  userName:{
    type:String,
    required:true,
  },
  passwor:{
    type:String,
    required:true,
  }
},{
  timestamps:true
}
)

const User = models.User || model("User",userSchema)

export default User;