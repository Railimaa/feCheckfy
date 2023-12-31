import styled from 'styled-components';

export const Container = styled.div`
  button {
      position: relative;
      text-align: left;
      width: 100%;
      background: #fff;
      border-radius: 8px;
      border: 1px solid ${({ color }) => color ? '#C92A2A' : '#ADB5BD'};
      padding-left: 12px;
      padding-right: 12px;
      height: 52px;
      color: #262626;
      outline: none;
      display: flex;
      flex-direction: column;

      span {
        font-size: 12px;
        color: #495057;
        padding-top: 3px;
        padding-bottom: 9px;
        font-size: 11px;
      }
  }
`;
