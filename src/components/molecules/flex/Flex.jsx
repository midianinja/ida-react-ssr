import { FlexComponent } from "./flex.style"

export default ({ column = false, size = "h1", children, ...rest }) => {
  return (
    <FlexComponent column={column} {...rest}>
      {children}
    </FlexComponent>
  )
}
