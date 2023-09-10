import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #087F5B;

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
  }
`;
