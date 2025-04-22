import styled from "styled-components";

export const Container = styled.header`
  /* background: #D73035; */
  width: 100%;
  margin: 2.5rem auto 4.68rem;
  display: flex;
  justify-content: space-between;
  height: 4.5rem;

  .page-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        width: 2rem;
        height: 2rem;
      }

      h1 {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 120%;
        color: #333;
      }
    }

    h2 {
      font-size: 1rem;
      font-weight: 500;
      line-height: 150%;
    }
  }
`;
