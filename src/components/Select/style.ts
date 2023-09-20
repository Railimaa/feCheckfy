import styled from 'styled-components';

export const Container = styled.div`

  .relative {
    position: relative;

    label {
      font-size: 11px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 13px;
      padding-top: 20px;
      z-index: 10;
      color: #495057;
      pointer-events: none;
    }

  }



`;

export const ContainerTrigger = styled.div`

    .trigger {
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

      span {
        color: #495057;
        font-size: 16px;
        font-weight: normal;
      }

     .icon {
      position: absolute;
      right: 13px;
      top: 50%;
      transform: translateY(-50%);
     }
    }
`;

export const ContainerContent = styled.div`

  .content {
    z-index: 99;
    overflow: hidden;
    background: #fff;
    border-radius: 16px;
    border: 1px solid #F1F3F5;
    box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.10);

  }

  .scroll-up-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background: #fff;
    color: #343A40;
  }

  .scroll-down-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background: #fff;
    color: #343A40;
  }

  .view-port {
    padding: 8px;
  }

  .item {
    font-size: 14px;
    color: #343A40;
    padding: 8px;
    outline: none;
    cursor: pointer;

    &:hover {
      background: #F8F9FA;
      border-radius: 8px;
      transition: all 0.1s;
    }
  }
`;
