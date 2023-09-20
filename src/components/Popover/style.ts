import {  styled, keyframes  } from 'styled-components';


const slideUpAndFade = keyframes`
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const ContainerContent = styled.div`
  animation: ${slideUpAndFade} 0.2s ease-in-out;
  padding: 8px;
  background: #fff;
  border-radius: 16px;
  margin-top: 8px;
  box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.10);
`;
