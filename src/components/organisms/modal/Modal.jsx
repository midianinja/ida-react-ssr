import { Overlay, ModalBox, ModalContainer, ModalHeader, ModalTitle, ModalExit } from "./modal.style.js";

import Flex from "../../molecules/flex/Flex.jsx";
import { CloseIcon } from '../../atoms/icon'

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
                <CloseIcon color='secondary' />
              </Flex>
            </ModalExit>
          </ModalHeader>
          {children}
        </ModalContainer>
      </ModalBox>
    </Overlay>
  )
}
