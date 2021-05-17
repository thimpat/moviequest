import styled from "styled-components";

export const Container = styled.div`
  margin-top: 56px;
  width: 100%;

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
