import { FieldErrors } from "react-hook-form"

export const getFormErrors = (errors: FieldErrors) => {
  return Object.fromEntries(
    Object.entries(errors).map(([key, value]) => {
      if(value && "message" in value) {
        return [key, value.message]
      }
      
      return [key, ""]
    })
  )
}