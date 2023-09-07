import { styled } from 'styled-components';

export const Container = styled.div`
  .loader {
    width: 24px;
    height: 24px;
    border: 5px solid #087F5B;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;
