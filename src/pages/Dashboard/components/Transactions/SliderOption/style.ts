import { styled } from 'styled-components';

export const Container = styled.div`
   button {
      width: 100%;
      height: 48px;
      border: none;
      border-radius: 999px;
      background: transparent;
      font-size: 14px;
      color: #343A40;
      font-weight: 600;
      letter-spacing: -0.5;

      &:active,
      &:focus {
        background: #fff;
      }

    }
`;
