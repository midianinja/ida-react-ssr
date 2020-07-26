import LogoComponent from "./logo.style"

export default ({ scale = 1, children }) => {
  return (
    <LogoComponent scale={scale}>
      {children}
    </LogoComponent>
  )
}
