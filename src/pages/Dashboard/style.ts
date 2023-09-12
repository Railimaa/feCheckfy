import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 16px;
  min-height: calc(100vh - 48px);


  @media(min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-top: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  max-height: calc(100vh - 48px);

  @media(min-width: 768px) {
    flex-direction: row;
  }

  .Left {
    width: 100%;

    @media(min-width: 768px) {
      width: 50%;
    }
  }

  .Right {
    width: 100%;


    @media(min-width: 768px) {
      width: 50%;
    }
  }
`;
