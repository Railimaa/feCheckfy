import {styled, keyframes} from 'styled-components';

const overlayShow = keyframes`
   from {
    opacity: 0;
  }
   to {
    opacity: 1;
    }
`;


export const ContainerStyle = styled.div`

 .overlay {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 50;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.content {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.10);
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  z-index: 51;
  outline: none;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    color: #343A40;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border: none;
      background: none;
      outline: none;
    }

    .right-action {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
    }
  }

  span {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
    color: #212529;
  }


  .main {
    margin-top: 40px;
  }
}

`;

