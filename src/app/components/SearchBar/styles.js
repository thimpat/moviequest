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
      cursor: pointer;
      user-select: contain;
    }
  }

  .table {
    font-size: 12px;
    line-height: 8px;
    position: absolute;
    top: 48px;
    max-width: 203px;
    right: 95px;
    tr {
      cursor: default;
      height: 16px;
      line-height: 16px;
      td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        a {
          color: #c7ccd2;
        }
      }
    }
  }
`;
