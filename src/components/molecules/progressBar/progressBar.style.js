import styled from "styled-components";

export const Ball = styled.span`
  display: inline-block;
  margin: 3px;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme: { colors }, done }) =>
    done ? colors.success : colors.muted};

  @media (min-width: ${({ theme }) => theme.media.desktop[0]}px) {
    height: 0.8rem;
    width: 0.8rem;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
`

export const Counter = styled.span`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;

  @media (min-width: ${({ theme }) => theme.media.desktop[0]}px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const ProgressArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
