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

  .table {
    margin: auto;
    max-width: 300px;
  }
`;
