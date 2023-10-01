import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
  background: #fff;
  padding: 16px;
  border-radius: 16px;
  cursor: pointer;


  #expense {
    color: #E03131;
    letter-spacing: -0.5px;
    font-weight: 500;
  }

  #income {
    color: #2F9E44;
    letter-spacing: -0.5px;
    font-weight: 500;
  }

  .content-transaction {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;

      .title-and-date {
        strong {
          letter-spacing: -0.5;
          display: block;
        }

        span {
          font-size: 14px;
          color: #868E96;
        }
      }
  }
`;
