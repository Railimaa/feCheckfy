import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }

    .logo {
      margin-top: 40px;

      @media (min-width: 768px) {
        margin-top: 100px;
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

    @media (min-width: 768px) {
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



    img {
      width: 138px;
      height: 32px;
    }

      p {
        color: #404040;
        font-weight: 500;
        font-size: 18px;
        margin-top: 20px;
      }

  }
`;
