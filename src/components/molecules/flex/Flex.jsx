import { FlexComponent } from "./flex.style"

export default ({ column = false, flex=1, size = "h1", children, ...rest }) => {
  return (
    <FlexComponent column={column} flex={1} {...rest}>
      {children}
    </FlexComponent>
  )
}
