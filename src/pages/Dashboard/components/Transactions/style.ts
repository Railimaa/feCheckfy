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
