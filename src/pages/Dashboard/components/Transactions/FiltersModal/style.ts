import styled from 'styled-components';

export const ContainerAccounts = styled.div`
  .actions {
    margin-top: 8px;

    button {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: left;
      padding: 8px;
      border-radius: 16px;
      border: none;
      outline: none;
      color: #343A40;
      background: none;

      &:hover {
        background: #F8F9FA;
        transition: all 0.1s;
      }
    }

    .btn-active {
          background: #E9ECEF !important;
      }

    span {
      color: #343A40;
    }

     button + button {
        margin-top: 8px;
      }
  }
`;


export const ContainerYears = styled.div`
  margin-top: 40px;
  color: #343A40;


  .years {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 210px;
    margin-top: 8px;

    .year {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border: none;
      background: none;
      outline: none;
    }
  }
`;


