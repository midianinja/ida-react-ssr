import { TitleComponent } from "./title.style"

export default ({ size = "h1", children }) => {
  return (
    <TitleComponent size={size}>
      {children}
    </TitleComponent>
  )
}
