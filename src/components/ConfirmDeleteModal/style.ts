import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 24px;

  .title {
    font-weight: bold;
    width: 180px;
  }

  .description {
    color: #343A40;
    }

  .trash {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF5F5;
    width: 52px;
    height: 52px;
    border-radius: 999px;
  }


  .btn {
    width: 100%;

    button {
      width: 100%;
      margin-top: 16px;
    }
  }
`;
