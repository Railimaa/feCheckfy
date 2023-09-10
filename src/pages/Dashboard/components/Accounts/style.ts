import { styled } from 'styled-components';

export const Container = styled.div`
  background: #087F5B;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;

  @media(min-width: 768px) {
    padding: 40px;
  }
`;
