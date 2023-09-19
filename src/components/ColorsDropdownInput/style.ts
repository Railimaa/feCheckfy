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
    }

    .icon-chevron-down {
      position: absolute;
      top: 50%;
      right: 13px;
      transform: translateY(-50%);
    }
`;
