import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  margin: 0px auto;
  border-collapse: separate;
  border-radius: 8px;
  overflow: hidden;
  border-spacing: 0;
`;

export const Caption = styled.caption`
  caption-side: top;
  text-align: left;
  position: relative;
  margin-bottom: 1rem;

  strong {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 120%;

    margin-right: 0.5rem;
  }

  button {
    width: fit-content !important;
    position: absolute;
    right: 0px;
    top: calc(0px - 50%);
  }
`;

export const Quantity = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: #ccc;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
`;

export const TableHead = styled.thead`
  background-color: #ccc;
  height: 3rem;
  text-align: left;
  color: #333;

  tr {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    th:first-child {
      border-top-left-radius: 8px;
    }

    th:last-child {
      border-top-right-radius: 8px;
      width: 8rem;
    }

    th {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export const TableBody = styled.tbody`
  font-size: 0.8rem;
  font-weight: 400;
  tr {
    td:last-child {
      display: flex;
      justify-content: space-between;

      button {
        background: none;
        border: none;
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
      }

      button:first-child {
        color: #666666;
      }

      button:last-child {
        color: #d73035;
      }
    }

    td {
      padding: 1rem;
      border-bottom: 1px solid #ccc;
    }
  }
`;
