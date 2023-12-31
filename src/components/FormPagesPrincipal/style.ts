import { styled } from 'styled-components';

export const Container = styled.div`
   header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;

    h1 {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -1px;
    }

    p {
       color: #595959;
       font-size: 16px;

      span {
        letter-spacing: -0.5px;
      }

      a {
        margin-left: 8px;
        letter-spacing: -0.5px;
        text-decoration: none;
        color: #087F5B;
        font-weight: 500;
      }

    }
  }
`;

export const FormContainer = styled.form`
   margin-top: 60px;
   display: flex;
   flex-direction: column;
   gap: 16px;

  button {
    margin-top: 12px;
    margin-bottom: 12px;
  }

`;
