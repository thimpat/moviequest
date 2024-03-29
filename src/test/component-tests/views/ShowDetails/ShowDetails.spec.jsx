import React from "react";
import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import ShowDetails from "../../../../app/views/ShowDetails";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

const mockedResponse = {
  itsamock: true,
  adult: false,
  backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
  belongs_to_collection: {
    id: 86311,
    name: "The Avengers Collection",
    poster_path: "/bvjltR2nDuhf1NlnwCrgNwvHuIh.jpg",
    backdrop_path: "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg",
  },
  budget: 300000000,
  genres: [
    { id: 12, name: "Adventure" },
    { id: 28, name: "Action" },
    { id: 878, name: "Science Fiction" },
  ],
  homepage: "https://www.marvel.com/movies/avengers-infinity-war",
  id: 299536,
  imdb_id: "tt4154756",
  original_language: "en",
  original_title: "Avengers: Infinity War",
  overview:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
  popularity: 281.938,
  poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  production_companies: [
    {
      id: 420,
      logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      name: "Marvel Studios",
      origin_country: "US",
    },
  ],
  production_countries: [{ iso_3166_1: "US", name: "United States of America" }],
  release_date: "2018-04-25",
  revenue: 2046239637,
  runtime: 149,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
    { english_name: "Xhosa", iso_639_1: "xh", name: "" },
  ],
  status: "Released",
  tagline: "An entire universe. Once and for all.",
  title: "Avengers: Infinity War",
  video: false,
  vote_average: 8.3,
  vote_count: 21765,
};

// Mock useLocation() for initialising the id required by the ShowDetails component
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "/showdetails", search: `?id=299536`, hash: "" }),
}));

describe("The ShowDetails view", () => {
  beforeAll(() => {
    fetchMock.resetMocks();
  });

  it("should display a detailed page when the id of the entity is given in the URL", async () => {
    // eslint-disable-next-line compat/compat
    fetch.mockResolvedValueOnce({ json: () => mockedResponse });
    render(<ShowDetails />);
    await waitFor(() => {
      expect(screen.getByText("Avengers: Infinity War")).toBeInTheDocument();
    });
  });
});
