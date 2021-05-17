import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { getImageUrl, requestActorDetails, requestMovies } from "../../helpers/tmdb";
import { Card, Table } from "react-bootstrap";
import { getDetailsPage } from "../../helpers/utils";

function ActorDetails() {
  const location = useLocation();
  // eslint-disable-next-line compat/compat
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get("id");

  const [idActor] = useState(id);
  const [entry, setEntry] = useState({});
  const [cast, setCast] = useState([]);

  const populateInfoActor = data => {
    setEntry(() => data || {});
  };

  const populateMovieList = data => {
    setCast(data.cast || []);
  };

  useEffect(() => {
    requestActorDetails(idActor)
      .then(populateInfoActor)
      .catch(e => console.error(e));

    requestMovies(idActor)
      .then(populateMovieList)
      .catch(e => console.error(e));
  }, [idActor]);

  return (
    <Container>
      <div className="container-media">
        <Card title={JSON.stringify(entry, null, 2)}>
          <Card.Img variant="top" alt="" src={getImageUrl(entry.profile_path)} />
        </Card>
      </div>

      <div className="container-content">
        <h1>{entry.name}</h1>
        <div className="table-1">
          <Table className="table-details" striped bordered hover>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Properties</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(entry)
                .filter(k => {
                  return typeof k !== "object";
                })
                .map((keyName, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{keyName}</td>
                    <td>{JSON.stringify(entry[keyName])}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <div className="table-2">
          <Table className="table-cast" striped bordered hover>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Release Date</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {cast.map((show, index) => (
                <tr key={index} title={JSON.stringify(show)}>
                  <td>{index}</td>
                  <td>
                    <Link to={getDetailsPage(show.id, "show")}>{show.title}</Link>
                  </td>
                  <td>
                    <Link to={getDetailsPage(show.id, "show")}>{show.release_date}</Link>
                  </td>
                  <td>
                    <Link to={getDetailsPage(show.id, "show")}>
                      <img
                        className="img-thumbnail"
                        alt="No Image Available"
                        src={getImageUrl(cast.poster_path)}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}

export default ActorDetails;
