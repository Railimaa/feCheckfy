import { styled } from 'styled-components';

export const ContainerTrigger = styled.div`

`;


export const ContainerContent = styled.div`
  padding: 8px;
  background: #fff;
  border-radius: 16px;
  margin-top: 8px;
  box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.10);
`;

export const ContainerItem = styled.div`
  color: ${({ className }) => className ? className : '#343A40' };
  font-size: ${({ className }) => className ? `${className}px` : '14px' };
  display: flex;
  align-items: center;
  padding: 16px;
  min-height: 48px;

  &:hover {
    background: #F8F9FA;
    border-radius: 16px;
    transition: all ease-in 0.1s;
  }
`;
