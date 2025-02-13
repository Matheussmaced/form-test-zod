import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { mockUsers } from "@/data/mockUsers";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        birthData: { label: "Birth Date", type: "text" }
      },
      async authorize(credentials){
        if(!credentials) return null;

        const user = mockUsers.find(
          (user) => 
            user.email === credentials?.email &&
            user.password === credentials?.password &&
            new Date(user.birthData).toLocaleDateString('sv-SE')
        );
        if(user) {
          return {
            id: String(user.id),
            name: user.name,
            email: user.email
          }
        }

        throw new Error("Email, senha ou data de nascimento incorretos.")
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }