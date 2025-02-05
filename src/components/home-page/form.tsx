"use client"

import { FormSchema, FormSchemaType } from "@/lib/validation/formSchema";
import InputFormText from "./inputsFormText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { mockUsers } from "@/data/mockUsers";

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

  const onSubmit = (data: FormSchemaType) => {
    const user = mockUsers.find(
      (user) => user.email === data.email && user.password === data.password && new Date(user.birthData).getTime() === data.birthData.getTime()
    );

    if (user) {
      console.log("Login bem-sucedido!", user);
      setErrorMessage("");

      localStorage.setItem("user", JSON.stringify(user));

      window.location.href = "/dashboard";
    } else {
      setErrorMessage("Email ou senha ou data de nascimento incorretos. Tente novamente");
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
