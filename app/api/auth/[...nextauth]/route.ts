
import connectDb from "@/libs/config/mongodb";
import User from "@/libs/models/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const nextOptions:NextAuthOptions={
  providers:[
    CredentialsProvider({
      name:"credential",
      credentials:{},
      async authorize(credential):Promise<any>{
        const {email,password}:any = credential
        await connectDb()
        const newUser = await User.findOne({email}) 


        const user = {email:newUser?.email, userName:newUser.userName, id:newUser._id}
        if(email === newUser.email && password===newUser.password){
          return user
        }else{
          return null
        }
      },
     
    })
  ],pages:{
    signIn:"/login"
  },
  session:{
    strategy:"jwt"
  },
  secret:process.env.NEXTAUTH_SECRET
}


const handler = NextAuth(nextOptions)

export {handler as GET, handler as POST}