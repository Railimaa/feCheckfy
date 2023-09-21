import styled from 'styled-components';

export const ContainerInput = styled.div`
  input {
    width: 100%;
    font-size: 32px;
    color: ${({ color }) => color ? '#C92A2A' : '#343A40'};
    border: none;
    font-weight: bold;
    letter-spacing: -1px;
    outline: none;
  }
`;
