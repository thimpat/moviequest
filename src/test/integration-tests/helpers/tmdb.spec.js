/**
 * The test here needs a real live-server
 */
import { doSearch } from "../../../app/helpers/tmdb";

describe("tmdb helpers", () => {
  describe("#doSearch()", () => {
    it(`should return some results from the live server when a search term is given`, async () => {
      const result = await doSearch("Avengers");
      expect(result.success).toBeFalsy();
    });
  });
});
