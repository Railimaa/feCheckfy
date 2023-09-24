import { styled } from 'styled-components';

export const ButtonStyle = styled.button<{ variant?: 'danger' | 'ghost' }>`
  padding-left: 24px;
  padding-right: 24px;
  border: none;
  background: #087F5B;
  color: ${({ variant }) => variant === 'ghost' ? '#343A40' : '#fff'};
  font-weight: bold;
  height: 48px;
  border-radius: 16px;
  transition: all;
  margin-top: 4px;
  background: ${({ variant }) => {
        switch(variant) {
        case 'danger':
            return '#C92A2A';
        case 'ghost':
            return '#fff';
        default:
            return '#087F5B';
        }
    }};
  border: ${({ variant }) => variant === 'ghost' ? '1px solid  #343A40' : 'none'};

  &:hover {
    transition: all 0.2s;
    background: ${({ variant }) => {
        switch(variant) {
        case 'danger':
            return '#E03131';
        case 'ghost':
            return 'rgba(52, 58, 64, 0.1)';
        default:
            return '#099268';
        }
    }}
  }

  &:disabled {
    background: #E9ECEF;
    font-weight: 400;
    cursor: not-allowed;
  }

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
