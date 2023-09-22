import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 24px;


  .trash {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF5F5;
    width: 52px;
    height: 52px;
    border-radius: 999px;
  }

  p {
    font-weight: bold;
  }

  #sub-title {
    font-weight: normal;
  }

  .btn {
    width: 100%;

    button {
      width: 100%;
      background: #C92A2A;
    }

    .cancel {
      margin-top: 12px;

      button {
        background: #fff;
        color: #343A40;
        border: 1px solid #343A40;
        border-radius: 16px;
      }
    }
  }
`;
