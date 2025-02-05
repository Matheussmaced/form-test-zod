import { UseFormRegisterReturn } from "react-hook-form";

export interface InputsFormTextProps {
  label: string,
  placeholder: string,
  type?: string,
  register: UseFormRegisterReturn
}