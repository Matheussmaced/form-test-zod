"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <main className="bg-bgColor bg-opacity-20 h-screen w-screen flex justify-center">
      {user ? 
      (<h1>HOME</h1> )
      : (<p>Redirecionando...</p> )
    }
    </main>
  );
}
