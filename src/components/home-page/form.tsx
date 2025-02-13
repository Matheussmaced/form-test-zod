"use client"

import { FormSchema, FormSchemaType } from "@/lib/validation/formSchema";
import InputFormText from "./inputsFormText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export default function Form() {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      birthData: new Date,
    },
  });

  const onSubmit = async (data: FormSchemaType) => {
    try {
      const formattedDate = new Date(data.birthData).toLocaleDateString('sv-SE')

      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        birthData: formattedDate
      });

      if(res?.error){
        setErrorMessage(res.error);
      }else {
        window.location.href = "/dashboard";
      }

    } catch (error) {
      setErrorMessage("Ocorreu um erro ao tentar logar.")
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <div>
          <InputFormText
            type="email"
            label="Email do usuário"
            placeholder="Seu email"
            register={register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <InputFormText
            type="password"
            label="Senha"
            placeholder="Sua senha"
            register={register("password")}
          />
          <p className="text-xs text-slate-300 -mt-3">
            Sua senha precisa ter entre 4 e 12 caracteres
          </p>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <InputFormText
            type="date"
            label="Data de nascimento"
            placeholder=""
            register={register("birthData")}
          />
          {errors.birthData && (
            <p className="text-xs text-red-500">{errors.birthData.message}</p>
          )}
        </div>

        <div>
          <button type="button" className="py-2 px-4 w-30 border rounded-md border-slate-300 text-xs mb-3 flex items-center gap-3" onClick={async () => await signIn('github', { callbackUrl: "/dashboard" })}>
            Entrar com GitHub
            <Github size={25} color="white" className="p-1 bg-bgColor rounded-full" />
          </button>
        </div>

        {errorMessage && <p className="text-xs text-red-500 -mt-6">{errorMessage}</p>}

        <div className="justify-between flex">
          <button
            type="button"
            className="py-3 px-6 w-24 border border-bgColor rounded-md text-bgColor text-xs"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="py-3 px-6 w-24 bg-bgColor rounded-md text-white text-xs"
          >
            Entrar
          </button>
        </div>
      </div>
    </form>
  );
}
