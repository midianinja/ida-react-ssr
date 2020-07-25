import { Overlay, ModalBox, ModalContainer, ModalHeader, ModalTitle, ModalExit } from "./modal.style.js";
import Button from "../../atoms/button/Button.jsx";

export default ({ title, children }) => {
  return (
    <Overlay>
      <ModalBox>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalExit>
              {/* <Button type="transparent" onClick={() => true}>X</Button> */}
            </ModalExit>
          </ModalHeader>
          {children}
        </ModalContainer>
      </ModalBox>
    </Overlay>
  )
}
