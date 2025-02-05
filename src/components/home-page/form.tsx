import InputFormText from "./inputsFormText";

export default function Form() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <InputFormText label="Nome do usuário" placeholder="Nome do usuário" />
      </div>
      <div className="flex flex-col">
        <InputFormText label="Nome do usuário" placeholder="Nome do usuário" />
        <p className="text-xs text-slate-300 -mt-3">Sua senha precisa ter entre 4 e 12 caracteres</p>
      </div>
      <div>
        <InputFormText label="Nome do usuário" placeholder="Nome do usuário" />
      </div>

      <div className="justify-between flex">
        <button className="py-3 px-6  w-24 border border-bgColor rounded-md text-bgColor text-xs">Cancelar</button>
        <button className="py-3 px-6 w-24 bg-bgColor rounded-md text-white text-xs">Criar</button>
      </div>
    </div>
  )
}