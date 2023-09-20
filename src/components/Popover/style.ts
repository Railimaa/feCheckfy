import {  styled, keyframes  } from 'styled-components';


const slideUpAndFade = keyframes`
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
`;

export const ContainerContent = styled.div`
  animation: ${slideUpAndFade} 0.2s ease-in-out;
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  margin-top: 8px;
  box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.10);
`;
