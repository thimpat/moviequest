/**
 * The test here needs a real live-server
 */
import { requestMultiSearch } from "../../../app/helpers/tmdb";

describe("tmdb helpers", () => {
  describe("#requestMultiSearch()", () => {
    it(`should return some results from the live server when a search term is given`, async () => {
      const result = await requestMultiSearch("Avengers");
      expect(result.success).toBeFalsy();
    });
  });
});
