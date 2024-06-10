import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  max-width: 1216px;
  margin: 0px auto;
  border-collapse: separate;
  border-radius: 8px;
  overflow: hidden;
  border-spacing: 0;
`;

export const Caption = styled.caption`
  caption-side: top;
  text-align: left;
  margin-bottom: 16px;

  strong {
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;

    margin-right: 8px;
  }

  div {
    display: inline-block;
    padding: 4px 8px;
    background-color: #ccc;
    border-radius: 4px;

    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
  }
`;

export const TableHead = styled.thead`
  background-color: #ccc;
  height: 48px;
  text-align: left;
  color: #333;

  tr {
    border-top-left-radius: 8xp;
    border-top-right-radius: 8xp;

    th:first-child {
      border-top-left-radius: 8px;
    }

    th:last-child {
      border-top-right-radius: 8px;
    }

    th {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;

export const TableBody = styled.tbody`
  font-size: 14px;
  font-weight: 400;
  tr {
    td:last-child {
      display: flex;
      justify-content: space-around;

      button {
        background: none;
        border: none;
        width: 40px;
        height: 40px;
        padding: 8px;
      }

      button:first-child {
        color: #666666;
      }

      button:last-child {
        color: #D73035;
      }
    }

    td {
      padding: 16px;
      border-bottom: 1px solid #ccc;
    }
  }
`;
