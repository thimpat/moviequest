import React from "react";
import { render, screen } from "@testing-library/react";

import DataContext from "../../../../app/context/DataContext";
import PageResults from "../../../../app/views/PageResults";
import { BrowserRouter } from "react-router-dom";

function renderPage(entries) {
  return render(
    <DataContext.Provider value={entries}>
      <BrowserRouter>
        <PageResults />
      </BrowserRouter>
    </DataContext.Provider>
  );
}

describe("The PageResults view", () => {
  it("should display No result when no results are returned", () => {
    renderPage({ entries: [] });
    const element = screen.getByText("No result");
    expect(element).toBeInTheDocument();
  });

  it("should display two card when some results are returned", () => {
    const responseServer = {
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

    renderPage({ entries: responseServer.results });
    const element = screen.getByText("Alien Avengers II");
    expect(element).toBeInTheDocument();
  });
});
