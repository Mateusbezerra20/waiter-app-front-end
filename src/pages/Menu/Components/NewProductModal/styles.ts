import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  gap: 24px;

  h5 {
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
    color: #666666;
  }

  section {
    width: 416px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .image-input-container {

    h5 {
      margin-bottom: 16px;
    }

    div {
      border: 2px solid #999;
      border-radius: 8px;
      overflow: hidden;

      img {
        height: 160px;
        width: 100%;
      }

      label {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        height: 52px;
        background-color: #fff;
        color: #D73035;
        cursor: pointer;

        span {
          font-size: 16px;
          font-weight: 600;
          line-height: 100%;
        }
      }

      input[type="file"] {
        display: none;
      }
    }
  }

  #category-price-group {
    display: flex;
    justify-content: space-between;
    gap: 14px;
  }

  #categories-selection {
    label {
      display: block;
      margin-bottom: 16px;
    }

    select {
      padding: 14px;
      border-radius: 75px;
      border: none;
      background: none;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
      outline: none;
    }
  }

  .ingredients-selection {
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
    }
  }

  #ingredients-list {
    margin-top: 24px;
    height: 400px;
    border-radius: 8px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #666666;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 8px;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;

      button {
        margin: 0px;
        padding: 0px;
        border: none;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: end;
  margin-top: 48px;

  button {
    width: fit-content;
  }
`;
