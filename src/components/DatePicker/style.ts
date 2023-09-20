import styled from 'styled-components';

export const Container = styled.div`



  .caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.408px;
  }

  .nav {
    display: flex;
    gap: 12px;
  }

  .nav_button_previous {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #087F5B !important;
    background: transparent !important;
  }

  .nav_button_next {
    color: #087F5B !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent !important;
  }

  .head_cell {
    font-size: 12px;
    color: #ADB5BD;
    font-weight: 500;
    padding-top: 4px;
    padding-bottom: 8px;
    text-transform: uppercase;
  }

  .button {
    color: #495057;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: none;
    background: transparent;

    &:hover {
      background: #C3FAE8;
      animation: all 0.5s ease-in-out;
    }
  }

  .day_today {
    background: #F1F3F5;
    font-weight: bold;
    color: #212529;
    border-radius: 999px;
  }

  .day_selected {
    background: #087F5B !important;
    color: #fff;
    font-weight: 500;
    border-radius: 999px;
  }
`;
