"use client"

import { signOut, useSession } from "next-auth/react"

export default function Dashboard () {
  const { data: session, status } = useSession();

  if(status === "loading") return <p>Carregando...</p>
  if(!session) return window.location.href = "/login"
  
  return (
    <div>
      <h1>Bem-vindo, {session.user?.name || session.user?.email}!</h1>
      <button onClick={() => signOut()}>
        Sair
      </button>
    </div>
  )
}