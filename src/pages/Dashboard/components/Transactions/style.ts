import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #E9ECEF;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;

  @media(min-width: 768px) {
    padding: 40px;
  }

  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-mounth {
    position: relative;
    margin-top: 24px;
  }

`;


export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;


   .btn-filter {
    border: none;
    background: transparent;
   }
`;

export const Content = styled.div`
    margin-top: 16px;
    flex: 1;
    overflow-y: auto;

    .empty-transactions {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span {
        color: #495057;
      }
    }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
  background: #fff;
  padding: 16px;
  border-radius: 16px;


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
