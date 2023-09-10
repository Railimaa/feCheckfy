import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  width: 100%;
  height: 100%;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  padding-top: 24px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
`;

export const Content = styled.main`
  display: flex;
  gap: 16px;
  flex: 1;

  .Left {
    width: 50%;
  }

  .Right {
    width: 50%;
  }
`;
