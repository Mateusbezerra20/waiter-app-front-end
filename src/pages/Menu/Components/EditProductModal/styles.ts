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
      display: block;
      margin-bottom: 1rem;
    }

    select {
      padding: 0.8rem;
      border-radius: 4.69rem;
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
    margin-top: 1.5rem;
    height: 25rem;
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
