import { TitleComponent } from "./title.style"

export default ({ type, children }) => {
  return (
    <TitleComponent type={type}>
      {children}
    </TitleComponent>
  )
}
