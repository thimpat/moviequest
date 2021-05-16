import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .navbar {
    background: #282c34 !important /** Override Bootstrap 4 **/;

    .navbar-toggler.collapsed {
      background: #d0d0d0;
      position: absolute;
      right: 20px;
    }

    .navbar-brand {
      color: #dcd8d8;
      user-select: contain;
    }
  }
`;
