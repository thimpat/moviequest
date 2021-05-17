import { doSearch, extractResult, getUriEndpoint } from "../../../app/helpers/tmdb";
import CONSTANTS from "../../../app/constants.json";

describe("tmdb helpers", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    jest.spyOn(window, "fetch");
  });

  describe("#getUriEndpoint()", () => {
    it(`should return an empty string when no parameter is given`, async () => {
      const result = getUriEndpoint();
      expect(result).toEqual("");
    });

    it(`should return a valid endpoint when given the multi-search ID`, async () => {
      const result = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.MULTI_SEARCH);
      expect(result).toEqual("https://api.themoviedb.org/3/search/multi");
    });
  });

  describe("#extractResult()", () => {
    it(`should return an empty array when an invalid server response is passed`, async () => {
      const result = extractResult(null);
      expect(result.length).toEqual(0);
    });

    it(`should return an array with two elements when the response contains two results`, async () => {
      // Arrange
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

      // Act
      const results = extractResult(responseServer);

      // Assert
      expect(results.length).toEqual(2);
    });

    it(`should return an empty array when the server response status is false`, async () => {
      // Arrange
      const responseServer = {
        status: false,
      };

      // Act
      const results = extractResult(responseServer);

      // Assert
      expect(results.length).toEqual(0);
    });
  });

  describe("#doSearch()", () => {
    it(`should return an empty object when no search terms are given`, async () => {
      const result = await doSearch();
      expect(result.success).toBeFalsy();
    });

    it(`should invoked the search server with the correct parameter`, async () => {
      await doSearch("Avengers");
      expect(fetch).toHaveBeenCalledWith(
        "https://api.themoviedb.org/3/search/multi?api_key=0814fa5dfd6ac4b485ec5ed13f7eabdd&query=Avengers&page=1&include_adult=false"
      );
    });
  });
});
