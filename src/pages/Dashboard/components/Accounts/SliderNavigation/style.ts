import { styled } from 'styled-components';

export const Container = styled.div `
   button {
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 10px;
            padding-right: 14px;
            border: none;
            border-radius: 9999px;
            color: #fff;
            font-weight: bold;
            background: transparent;
            transition: background 0.3s, opacity 0.3s;

            &:hover {
              background: rgba(0, 0, 0, 0.1);
              opacity: 1;
            }

            &:disabled {
              opacity: 0.4;
              background: none;
            }
      }
`;
