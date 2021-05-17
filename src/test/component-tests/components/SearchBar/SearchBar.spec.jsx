import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import App from "../../../../app/App";
import DataContext from "../../../../app/context/DataContext";

function renderPage() {
  const entries = {
    page: 2,
    results: [
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [35, 878, 10770],
        id: 223291,
        media_type: "movie",
        original_language: "en",
        original_title: "Alien Avengers II",
        overview: "Weird things are happening in the town of Justice, Arizona",
        popularity: 2.559,
        poster_path: "/4L3ajGP3ZsnM8xIrXjwEZOLYBjb.jpg",
        release_date: "1997-10-25",
        title: "Alien Avengers II",
        video: false,
        vote_average: 5.5,
        vote_count: 2,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [16, 28],
        id: 487555,
        media_type: "movie",
        original_language: "en",
        original_title: "The Avengers: Earth's Mightiest Heroes - Prelude",
        overview: "A 110 minute prelude to the 2010 animated series.",
        popularity: 4.545,
        poster_path: "/3o7MpOaDkeAcvxqEjgbIcXrcepB.jpg",
        release_date: "2010-09-22",
        title: "The Avengers: Earth's Mightiest Heroes - Prelude",
        video: false,
        vote_average: 7.5,
        vote_count: 2,
      },
    ],
    total_pages: 3,
    total_results: 60,
  };

  return render(
    <DataContext.Provider value={entries}>
      <App />
    </DataContext.Provider>
  );
}

describe("The SearchBar component", () => {
  beforeEach(() => {
    renderPage();
  });

  it("should render a button containing the 'Search' text", () => {
    const linkElement = screen.getByText("Search");
    expect(linkElement).toBeInTheDocument();
  });

  it("should render a text box containing the 'Search' text", () => {
    const linkElement = screen.getByPlaceholderText("Search");
    expect(linkElement).toBeInTheDocument();
  });

  it("should have its text box focused", () => {
    const linkElement = screen.getByPlaceholderText("Search");
    expect(linkElement).toHaveFocus();
  });

  it("should initiate a search when the search button is pressed", () => {
    // Add a text to the input
    const inputBox = screen.getByPlaceholderText("Search");
    fireEvent.change(inputBox, { target: { value: "Avengers" } });
    fireEvent.blur(inputBox);

    // Press the search button
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    const linkElement = screen.getByText("Searching... Avengers");
    expect(linkElement).toBeInTheDocument();
  });

  it("should initiate a search when the Enter key is pressed", () => {
    // Add a text to the input
    const inputBox = screen.getByPlaceholderText("Search");
    fireEvent.change(inputBox, { target: { value: "My second phrase" } });
    fireEvent.keyDown(inputBox, { key: "Enter", keyCode: 13 });

    const linkElement = screen.getByText("Searching... My second phrase");
    expect(linkElement).toBeInTheDocument();
  });
});
