import { styled } from 'styled-components';

export const Container = styled.div`
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

  .slider-mounth {
    margin-top: 24px;

    button {
      width: 100%;
      height: 48px;
      border: none;
      border-radius: 999px;
      background: transparent;
      font-size: 14px;
      color: #343A40;
      font-weight: 600;
      letter-spacing: -0.5;

      &:active,
      &:focus {
        background: #fff;
      }

    }
  }
`;


export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

  .btn-transactions {
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background: transparent;

    span {
      font-size: 14px;
      color: #343A40;
      font-weight: 600;
      letter-spacing: -0.5;
    }
   }

   .btn-filter {
    border: none;
    background: transparent;
   }



`;

export const Content = styled.div`
  margin-top: 16px;

`;
