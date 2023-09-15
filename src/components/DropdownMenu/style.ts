import { styled, keyframes } from 'styled-components';


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

export const ContainerTrigger = styled.div`

`;


export const ContainerContent = styled.div`
  animation: ${slideUpAndFade} 0.1s ease-in-out;
  padding: 8px;
  background: #fff;
  border-radius: 16px;
  margin-top: 8px;
  box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.10);
`;

export const ContainerItem = styled.div`
  color: '#343A40' ;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 40px;
  cursor: pointer;

  &:hover {
    background: #F8F9FA;
    border-radius: 16px;
    transition: all ease-in 0.1s;
  }



`;
