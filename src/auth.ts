import NextAuth from "next-auth";
import CredentialsProvider from "next"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
} = NextAuth({
    providers:[],
})