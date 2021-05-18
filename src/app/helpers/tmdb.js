import CONSTANTS from "../constants.json";

const API_KEY = "0814fa5dfd6ac4b485ec5ed13f7eabdd";

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

const doRequestV3 = async (uri, options = {}) => {
  try {
    if (!uri) {
      return { success: false };
    }

    let url = `${uri}?api_key=${API_KEY}`;

    if (options.query) {
      url += `&query=${options.query}`;
      url = encodeURI(url);
    }

    if (options.page) {
      url += `&page=${options.page}`;
    }

    if (options.include_adult !== undefined) {
      url += `&include_adult=${options.include_adult ? "true" : "false"}`;
    }

    // eslint-disable-next-line compat/compat
    const response = await fetch(url);

    if (!response) {
      return { success: false };
    }

    return response.json();
  } catch (e) {
    console.error(e);
  }

  return { success: false };
};

/**
 * `${uri}?api_key=0814fa5dfd6ac4b485ec5ed13f7eabdd&language=en-US&query=avengers&page=1&include_adult=true`;
 * @param str
 * @returns {Promise<any|null|{success: boolean}>}
 */
export const requestMultiSearch = async (str = "") => {
  const uri = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.MULTI_SEARCH);
  return await doRequestV3(uri, { query: str, page: 1, include_adult: false });
};

export const requestActors = async personID => {
  const uri = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.ACTORS_IN_THIS_SHOW, { id: personID });
  return await doRequestV3(uri);
};

export const requestMovies = async movieID => {
  const uri = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.SHOWS_FOR_THIS_ACTOR, { id: movieID });
  const res = await doRequestV3(uri);
  return res;
};

/**
 * Return image url from TMDB' server
 * @param id
 * @returns {string}
 */
export const getImageUrl = id => {
  if (!id) {
    return "/puzzle-693873_640.jpg";
  }
  return `${CONSTANTS.TMDB.IMAGE_LINK_BASE}/${id}`;
};

/**
 * NOTE: Look Like
 * https://api.themoviedb.org/3/movie/223291?api_key=0814fa5dfd6ac4b485ec5ed13f7eabdd&language=en-US
 * @param id
 */
export const requestMovieDetails = async (id = null) => {
  if (!id) {
    // Empty query
    return { success: false };
  }
  const uri = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.MOVIE_DETAILS, { id });
  return await doRequestV3(uri, {});
};

export const requestActorDetails = async (id = null) => {
  if (!id) {
    // Empty query
    return { success: false };
  }
  const uri = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.ACTOR_DETAILS, { id });
  const res = await doRequestV3(uri, {});
  return res;
};
