import styled from "styled-components";

export const Container = styled.div`
  margin-top: 56px;
  width: 100%;

  align-items: start;
  display: flex;

  .container-media {
    margin-right: 16px;
    width: 400px;
  }

  .container-content {
    flex: 1;
    p {
      display: inline-block;
      text-align: left;
      width: 200px;
      span {
        display: block;
      }
    }
  }

  .table-1,
  .table-2 {
    height: 200px;
    margin: 20px auto;
    overflow: auto;
    min-width: 60%;
    width: 60%;
  }

  .table {
    margin: auto;
  }
`;
