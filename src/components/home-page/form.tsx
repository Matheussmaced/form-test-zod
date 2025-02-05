"use client"

import { FormSchema, FormSchemaType } from "@/lib/validation/formSchema";
import InputFormText from "./inputsFormText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const onSubmit = (data: FormSchemaType) => {
    console.log("Dados enviados", data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
      <div>
        <InputFormText label="Nome do usuário" placeholder="Nome do usuário" register={register("name")} />
        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col">
        <InputFormText type="password" label="Senha" placeholder="Sua senha" register={register("password")} />
        <p className="text-xs text-slate-300 -mt-3">Sua senha precisa ter entre 4 e 12 caracteres</p>
        {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
      </div>
      <div>
        <InputFormText type="email" label="Email do usuário" placeholder="Seu email" register={register("email")} />
        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div className="justify-between flex">
        <button type="button" className="py-3 px-6 w-24 border border-bgColor rounded-md text-bgColor text-xs">
          Cancelar
        </button>
        <button type="submit" className="py-3 px-6 w-24 bg-bgColor rounded-md text-white text-xs">
          Entrar
        </button>
      </div>
    </div>
    </form>
  )
}