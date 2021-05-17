import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .navbar {
    background: rgb(40 44 52 / 83%) !important /** Override Bootstrap 4 **/;

    .navbar-toggler.collapsed {
      position: absolute;
      right: 20px;
    }

    .navbar-brand {
      color: #dcd8d8;
      user-select: contain;
    }
  }
`;
