import { Overlay, ModalBox, ModalContainer, ModalHeader, ModalTitle, ModalExit } from "./modal.style.js";
import Button from "../../atoms/button/Button.jsx";
import Flex from "../../molecules/flex/Flex.jsx";
import Icon from "../../atoms/icon/Icon.jsx";

export default ({ header, children }) => {
  return (
    <Overlay>
      <ModalBox>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>
              <Flex>
                {header}
              </Flex>
            </ModalTitle>
            <ModalExit>
              <Flex>
                <Icon name="close" />
              </Flex>
            </ModalExit>
          </ModalHeader>
          {children}
        </ModalContainer>
      </ModalBox>
    </Overlay>
  )
}
