import { BodyTextComponent } from "./bodyText.style"

export default ({ size = "h1", children }) => {
  return (
    <BodyTextComponent size={size}>
      {children}
    </BodyTextComponent>
  )
}
