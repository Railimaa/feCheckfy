import { styled } from 'styled-components';

export const ButtonStyle = styled.button`
  padding-left: 24px;
  padding-right: 24px;
  border: none;
  background: #087F5B;
  color: #fff;
  font-weight: bold;
  height: 48px;
  border-radius: 16px;
  transition: all;
  margin-top: 4px;

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  &:hover {
    background: #099268;
  }

  &:disabled {
    background: #E9ECEF;
    font-weight: 400;
    cursor: not-allowed;
  }
`;
