import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:  100vw;
  background-color: ${({ theme }) => theme.modal.overlaybgColor};
`;

export const ModalBox = styled.div`
  width: 80vw;
  height: 80vh;
  /* Tamanho provisório */
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: ${({ theme }) => theme.default.borderRadius}px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  background: linear-gradient(0deg, ${({ theme }) => theme.colors.bgPrimary} 60%, ${({ theme }) => theme.modal.gradientColorsTop} 100%);
  color: ${({ theme }) => theme.colors.secondaryNormal};
`;

export const ModalContainer = styled.div`
  width: inherit;
  height: inherit;
  padding: ${({ theme }) => theme.modal.padding}px;
  /* background-image: url('/assets/icons/ida_black.svg'); */
  background-repeat: no-repeat;
  background-position-x: 10px;
  background-position-y: -86px;
`;
export const ModalHeader = styled.div`
  display: flex;
  flex: 1;
`;

export const ModalTitle = styled.div`
  width: calc(100% - 37px);
`;

export const ModalExit = styled.div`
  width: 37px;
`;
