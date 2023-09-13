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

    .loading {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
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
      margin-top: 40px;

      @media(min-width: 768px) {
        margin-top: 0;
      }

      .title-acc {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        strong {
          letter-spacing: -1px;
          color: #fff;
          font-size: 18px;
        }
      }

      .title-acc-0 {
        margin-bottom: 10px;

        strong {
          letter-spacing: -1px;
          color: #fff;
          font-size: 18px;
        }
      }


     .btn-title-acc-0 {
       button {
         color: #fff;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         margin-top: 16px;
         border: 2px dashed #12B886;
         background: transparent;
         height: 204px;
         width: 100%;
         border-radius: 16px;
         gap: 16px;

         .icon {
           display: flex;
           align-items: center;
           justify-content: center;
           width: 44px;
           height: 44px;
           border: 2px dashed #fff;
           border-radius: 999px;
         }
       }

       span {
        display: block;
        text-align: center;
        width: 128px;
        letter-spacing: -0.5px;
        font-weight: 500;
        font-size: 16px;
       }
     }


    }

`;
