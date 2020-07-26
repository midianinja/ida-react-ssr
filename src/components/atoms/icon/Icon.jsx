import IconComponent from "./icon.style"

export default ({ scale = 1, name, children }) => {
  if(!name){
    console.error("Nenhum icone definido no componente 'icon'")
    return;
  }
  return (
    <IconComponent scale={scale} name={name}>
      {children}
    </IconComponent>
  )
}
