import CONSTANTS from "../constants.json";

const API_KEY = "";

export const getUriEndpoint = (endpointName = "", { id } = { id: null }, apiVersion = 3) => {
  if (!endpointName) {
    return "";
  }

  if (id !== null) {
    endpointName = endpointName.replace(/\:id/g, id);
  }

  const prefix = `https://api.themoviedb.org/${apiVersion}`;
  return `${prefix}/${endpointName}`;
};

export const extractResult = (response = null) => {
  if (!response) {
    // No response from server
    return [];
  }

  if (response.status === false) {
    // No response from server
    // console.error(response.status_message);
    return [];
  }

  response = response || [];
  return response.results || [];
};

const doRequestV3 = async (uri, options) => {
  try {
    let url = `${uri}?api_key=${API_KEY}`;

    if (options.query) {
      url += `&query=${options.query}`;
    }

    if (options.page) {
      url += `&page=${options.page}`;
    }

    if (options.include_adult !== undefined) {
      url += `&include_adult=${options.include_adult ? "true" : "false"}`;
    }

    // eslint-disable-next-line compat/compat
    const response = await fetch(url);

    return response.json();
  } catch (e) {
    console.error(e);
  }

  return null;
};

/**
 * `${uri}?api_key=0814fa5dfd6ac4b485ec5ed13f7eabdd&language=en-US&query=avengers&page=1&include_adult=true`;
 * @param str
 * @returns {Promise<any|null|{success: boolean}>}
 */
export const doSearch = async (str = "") => {
  if (!str) {
    // Empty query
    return { success: false };
  }
  const uri = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.MULTI_SEARCH);
  return await doRequestV3(uri, { query: str, page: 1, include_adult: false });
};

/**
 * NOTE: Look Like
 * https://api.themoviedb.org/3/movie/223291?api_key=0814fa5dfd6ac4b485ec5ed13f7eabdd&language=en-US
 * @param id
 */
export const requestMovieDetails = async id => {
  const uri = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.MOVIE_DETAILS, { id });
  return await doRequestV3(uri, {});
};
