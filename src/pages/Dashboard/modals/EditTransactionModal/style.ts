import styled from 'styled-components';


export const Form = styled.form`
  #saldo {
      font-size: 12px;
      color: #868E96;
      letter-spacing: -0.5px;
    }

  .title-form {
    display: flex;
    align-items: center;
    gap: 8px;

    #rs {
      font-size: 18px;
      color: #868E96;
      letter-spacing: -0.5px;
    }
  }

  .inputs-form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .button-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 40px;

    button {
      width: 100%;
    }
  }
`;
