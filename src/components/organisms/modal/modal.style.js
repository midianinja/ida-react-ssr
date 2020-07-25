import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:  100vw;
  background-color: ${({theme}) => theme.dark.modal.overlay.bgColor};
`;

export const ModalBox = styled.div`
  width: 302px;
  height:  513px;
  background-color: ${({theme}) => theme.dark.colors.defaultBg};
  border-radius: ${({theme}) => theme.defaultBox.borderRadius};
  background: rgb(29,29,29);
  background: linear-gradient(0deg, rgba(29,29,29,1) 60%, rgba(48,48,48,1) 100%);
  color: ${({theme}) => theme.dark.colors.secondary};
`;

export const ModalContainer = styled.div`
  width: inherit;
  height: inherit;
  background-image: url('/assets/idaLogo.svg');
  background-repeat: no-repeat;
  background-position-x: 10px;
  background-position-y: -86px;
`
export const ModalHeader = styled.div`
  display: flex;
  flex: 1;
`;

export const ModalTitle = styled.div`
  width: 100%;
`;

export const ModalExit = styled.div``;
