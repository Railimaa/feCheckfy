import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @media (min-width: 1216px) {
      width: 50%;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;

      @media (min-width: 1216px) {
        margin-top: 0;
      }
    }

    .page {
      margin-top: 64px;
      width: 100%;
      max-width: 504px;
      padding-left: 32px;
      padding-right: 32px;
    }
  }

  .img-container {
    display: none;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 32px;
    position: relative;

    @media (min-width: 1216px) {
      display: flex;
    }

    img {
      border-radius: 32px;
      width: 100%;
      height: 100%;
      max-width: 656px;
      max-height: 656px;
      object-fit: cover;
      user-select: none;
    }
  }

  .footer-img {
    position: absolute;
    bottom: 22px;
    background: white;
    padding: 22px;
    max-width: 600px;
    border-bottom-right-radius: 28px;
    border-bottom-left-radius: 28px;

      p {
        color: #404040;
        font-weight: 500;
        font-size: 18px;
        margin-top: 20px;
      }

  }
`;
