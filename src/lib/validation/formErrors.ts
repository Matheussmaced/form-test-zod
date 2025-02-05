export const getFormErrors = (errors: any) => {
  return Object.fromEntries(
    Object.entries(errors).map(([key, value]) => [key, value.message])
  )
}