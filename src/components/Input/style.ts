import { styled } from 'styled-components';


export const Container = styled.div`
 position: relative;

.show-password {
  position: absolute;
  top: 5%;
  right: 0;
  transform: translateY(-50%);
  transform: translateX(-50%);
  background: transparent;
  border: none;
}

`;


export const InputContainer = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 8px;
    border: 1px solid ${({ color }) => (color ? '#C92A2A' : '#ADB5BD')};
    padding-left: 12px;
    padding-right: 12px;
    height: 52px;
    color: #262626;
    outline: none;

   &:focus {
    border-color: ${({ color }) => color ? '#C92A2A' : '#495057'};
    transition: all;
   }
  `;
