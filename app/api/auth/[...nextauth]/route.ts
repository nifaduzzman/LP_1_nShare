
import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const nextOptions:NextAuthOptions={
  providers:[
    CredentialsProvider({
      name:"credential",
      credentials:{},
      async authorize(credential):Promise<any>{
        const user = {id:1, name:"Md Nifad"}
        return user
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