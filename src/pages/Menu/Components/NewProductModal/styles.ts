import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  gap: 1.5rem;

  h5 {
    font-size: 1.12rem;
    font-weight: 600;
    line-height: 120%;
    color: #666666;
  }

  section {
    width: 24rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .image-input-container {
    h5 {
      margin-bottom: 1rem;
    }

    div {
      border: 2px solid #999;
      border-radius: 8px;
      overflow: hidden;

      img {
        height: 9rem;
        width: 100%;
        object-fit: cover;
      }

      label {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        height: 3.25rem;
        background-color: #fff;
        color: #d73035;
        cursor: pointer;

        span {
          font-size: 1rem;
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
    gap: 0.8rem;
  }

  #categories-selection {
    label {
      position: relative;
      display: block;

      font-size: 0.8rem;
      line-height: 200%;
      font-weight: 500;

      div.arrow {
        position: absolute;
        right: 1rem;
        top: 2.8rem;
        pointer-events: none;
        width: 0.5rem;
        height: 0.5rem;
        border-left: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
        transform: rotate(-45deg);
      }

      select {
        padding: 1rem 0.8rem;
        width: 100%;
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 8px;
        border: solid 1px #ccc;
        background: none;
        outline: none;
        appearance: none;
        box-sizing: border-box;

        -moz-appearance: none;
        -moz-appearance: none;
      }
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
    margin-top: 1.5rem;
    height: 22rem;
    border-radius: 8px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: #666666;

    ::-webkit-scrollbar {
      width: 0.5rem;
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
      padding: 1rem;
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
  margin-top: 3rem;

  button {
    width: fit-content;
  }
`;
