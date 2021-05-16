import CONSTANTS from "../constants.json";

const API_KEY = "0814fa5dfd6ac4b485ec5ed13f7eabdd";

export const getUriEndpoint = (endpointName = "", apiVersion = 3) => {
  if (!endpointName) {
    return "";
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
    const url = `${uri}?api_key=${API_KEY}&page=2&include_adult=${
      options.include_adult ? "true" : "false"
    }&query=${options.query}`;

    // eslint-disable-next-line compat/compat
    const response = await fetch(url);

    return response.json();
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const doSearch = async (str = "") => {
  if (!str) {
    // Empty query
    return { success: false };
  }
  const uri = getUriEndpoint(CONSTANTS.TMDB.ENDPOINTS.MULTI_SEARCH);
  `${uri}?api_key=0814fa5dfd6ac4b485ec5ed13f7eabdd&language=en-US&query=avengers&page=1&include_adult=true`;
  return await doRequestV3(uri, { query: str, page: 1, include_adult: false });
};
