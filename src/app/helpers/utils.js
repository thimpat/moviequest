export const getDetailsPage = (id, type = "show") => {
  const str = type.toLowerCase().indexOf("actor") > -1 ? "actordetails" : "showdetails";
  return `/${str}?id=${id}`;
};
