import { styled } from 'styled-components';


export const Container = styled.div`

  .icon {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 8px;
    color: #C92A2A;

    span {
      font-size: 12px;
    }
  }

`;


export const InputContainer = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 8px;
    border: 1px solid ${({ error }) => (error ? '#C92A2A' : '#ADB5BD')};
    padding-left: 12px;
    padding-right: 12px;
    height: 52px;
    color: #262626;
    outline: none;




   &:focus {
    border-color: ${({ error }) => error ? '#C92A2A' : '#495057'};
    transition: all;
   }
  `;
