import { InputsFormTextProps } from "@/@types/inputFormType";


export default function InputFormText({ placeholder, label }: InputsFormTextProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-slate-400"> {label} </label>
      <input type="text" placeholder={placeholder} className="text-inherit p-2 text-xs w-96 mb-4 border border-slate-300 rounded-md" />
    </div>
  )
}