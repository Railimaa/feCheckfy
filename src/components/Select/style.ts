import styled from 'styled-components';

export const Container = styled.div`

  .relative {
    position: relative;

    label {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 12px;
      padding-top: 10px;
      z-index: 10;
      color: #262626;
      pointer-events: none;
    }


    .selected-value {
        font-size: 12px;
        left: 13px;
        top: 4px;
        transition: all 0.2s;
      }

  }


  .error {

    span {
      color: #C92A2A;
      font-size: 12px;
      font-weight: normal;
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



     .icon {
      position: absolute;
      right: 0;
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
