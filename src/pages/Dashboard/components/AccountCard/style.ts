import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  height: 200px;
  border-bottom: 4px solid ${({ color }) => color};

  .content {

    span {
      display: block;
      margin-top: 16px;
      color: #343A40;
      font-weight: 500;
      letter-spacing: -0.5px ;
    }
  }

  .saldo {

    span {
      display: block;
      color: #343A40;
      font-weight: 500;
      letter-spacing: -0.5px;
    }

    small {
      color: #868E96;
      font-size: 14px;
    }
  }
`;
