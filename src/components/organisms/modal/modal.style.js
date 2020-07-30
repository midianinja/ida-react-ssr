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
  background-color: ${({ theme }) => theme.colors.defaultBg};
  border-radius: ${({ theme }) => theme.default.borderRadius}px;
  background: ${({ theme: { modal } }) => modal.gradientColors.bottom()};
  background: linear-gradient(0deg, ${({ theme }) => theme.modal.gradientColors.bottom} 60%, ${({ theme }) => theme.modal.gradientColors.top} 100%);
  color: ${({ theme }) => theme.colors.secondary};

  /* Media */
  @media only screen and (max-width: ${({ theme }) => theme.media.desktop[0]}px) {
    width: ${({ theme }) => theme.modal.sizes.mobile[0].width}px;
    height:  ${({ theme }) => theme.modal.sizes.mobile[0].bigHeight}px;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.desktop[0] + 1}px) {
    width: ${({ theme }) => theme.modal.sizes.desktop[0].width}px;
    height:  ${({ theme }) => theme.modal.sizes.desktop[0].bigHeight}px;
  }
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
