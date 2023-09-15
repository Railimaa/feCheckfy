import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;

  @media(min-width: 768px) {
    bottom: 60px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
    background: #087F5B;
    width: 48px;
    height: 48px;
    border-radius: 999px;
  }
`;
