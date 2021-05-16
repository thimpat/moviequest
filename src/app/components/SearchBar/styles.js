import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .navbar {
    background: #282c34 !important /** Override Bootstrap 4 **/;
    position: fixed;
    width: 100%;

    .navbar-brand {
      color: #dcd8d8;
      user-select: contain;
    }
  }
`;
