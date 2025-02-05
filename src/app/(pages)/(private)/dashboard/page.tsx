"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user ? (
        <>
          <h1 className="text-2xl font-bold">Bem-vindo, {user.name}!</h1>
          <button
            className="mt-5 py-2 px-4 bg-red-500 text-white rounded-md"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
          >
            Sair
          </button>
        </>
      ) : (
        <p>Redirecionando...</p>
      )}
    </div>
  );
}
