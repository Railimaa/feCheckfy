import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #087F5B;
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

    .title {
      display: block;
      letter-spacing: -0.5px;
      color: #fff;
    }

    .saldo-btn {
      display: flex;
      align-items: center;
      gap: 8px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 32px;
        background: transparent;
        border: none;
      }

      strong {
        color: #fff;
        font-size: 32px;
        letter-spacing: -1px;
      }
    }


    .my-acc {
      display: flex;
      justify-content: end;
      flex-direction: column;
      flex: 1;

      .title-acc {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
          letter-spacing: -1px;
          color: #fff;
          font-size: 18px;
        }

        .actions {

          button {
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 10px;
            padding-right: 14px;
            border: none;
            border-radius: 9999px;
            color: #fff;
            font-weight: bold;
            background: transparent;
            transition: background 0.3s, opacity 0.3s;

            &:hover {
              background: rgba(0, 0, 0, 0.1);
              opacity: 1;
            }

            &:disabled {
              opacity: 0.4;
              background: none;
            }

            span {
              width: 24px;
              height: 24px;
            }
          }
        }


      }

    }

`;
