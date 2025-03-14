import styled from "styled-components";

export const Container = styled.header`
  /* background: #D73035; */
  width: 100%;
  max-width: 1216px;
  margin: 40px auto 72px;
  display: flex;
  justify-content: space-between;
  height: 72px;

  .page-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        width: 32px;
        height: 32px;
      }

      h1 {
        font-size: 24px;
        font-weight: 600;
        line-height: 120%;
        color: #333;
      }
    }

    h2 {
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    }
  }
`;
