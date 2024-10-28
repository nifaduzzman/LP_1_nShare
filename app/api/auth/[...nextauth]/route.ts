
import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const nextOptions:NextAuthOptions={
  providers:[
    CredentialsProvider({
      name:"credential",
      credentials:{},
      async authorize(credential):Promise<any>{
        const {email,password}:any = credential
        if(email === "nifaduzzaman2005@gmail.com" && password==="nifad2005"){
          return {credential}
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