import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .text-box {
    margin-bottom: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  h1 {
    color: #3d3c3c;
    margin: 20px;
  }

  h1 {
    font-size: 8vw;
    font-weight: 900;
    background-color: #000;
    color: #fff;
    display: block;
    padding: 0.5em;
  }

  h1:nth-child(2) {
    position: absolute;
    background-color: #fff;
    color: #000;
    clip-path: inset(
      -1% -1% 50% -1%
    ); // Added the negative values to prevent icky "bleed" in Chrome
  }

  h2 {
    margin-top: 56px;
    padding: 20px;
  }

  .card-wrapper {
    margin-bottom: 20px;
    overflow: hidden;

    .card {
      display: block !important;
      height: 400px;
      font-size: 11px;
      margin: auto;
      overflow: hidden;
      width: 100%;

      img {
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25), 0 3px 10px 0 rgba(0, 0, 0, 0.2) !important;
        border-radius: 0.25rem;
        object-fit: cover;
        width: 100%;
        height: 250px;
      }

      .card-body {
        max-height: 148px;
        overflow: auto;
      }
    }

    .gallery-container h1 {
      text-align: center;
      margin-top: 70px;
      font-family: "Droid Sans", sans-serif;
      font-weight: bold;
      color: #58595a;
    }

    .gallery-container p.page-description {
      text-align: center;
      margin: 30px auto;
      font-size: 18px;
      color: #85878c;
    }

    .baguetteBox-button {
      background-color: transparent !important;
    }
  }

  .tz-gallery {
    margin: 0;
    padding: 0;

    > .row {
      padding: 40px;
    }

    .thumbnail {
      padding: 0;
      margin-bottom: 30px;
      background-color: #fff;
      border-radius: 4px;
      border: none;
      transition: 0.15s ease-in-out;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.06);
    }

    .thumbnail:hover {
      transform: translateY(-10px) scale(1.02);
    }

    .lightbox img {
      border-radius: 4px 4px 0 0;
    }

    .caption {
      padding: 26px 30px;
      text-align: center;
    }

    .caption h3 {
      font-size: 14px;
      font-weight: bold;
      margin-top: 0;
    }

    .caption p {
      font-size: 12px;
      color: #7b7d7d;
      margin: 0;
    }
  }
`;
