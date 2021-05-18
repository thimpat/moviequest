import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { getImageUrl, requestActors, requestMovieDetails } from "../../helpers/tmdb";
import { Card, Table } from "react-bootstrap";

import { getDetailsPage } from "../../helpers/utils";

function ShowDetails() {
  const location = useLocation();
  // eslint-disable-next-line compat/compat
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get("id");

  const [idMovie, setIdMovie] = useState(id);
  const [entry, setEntry] = useState({});
  const [cast, setCast] = useState([]);

  const populateInfoMovie = data => {
    setEntry(() => data || {});
  };

  const populateActorList = data => {
    if (!data) {
      return;
    }
    setCast(data.cast || []);
  };

  useEffect(() => {
    requestMovieDetails(idMovie)
      .then(populateInfoMovie)
      .catch(e => console.error(e));

    requestActors(idMovie)
      .then(populateActorList)
      .catch(e => console.error(e));
  }, [idMovie]);

  return (
    <Container>
      <div className="container-media">
        <Card title={JSON.stringify(entry, null, 2)}>
          <Card.Img variant="top" alt="" src={getImageUrl(entry.poster_path)} />
        </Card>
      </div>

      <div className="container-content">
        <h1>{entry.original_title}</h1>
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
                <th>Character</th>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {cast.map((actor, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>
                    <Link to={getDetailsPage(actor.id, "actor")}>{actor.character}</Link>
                  </td>
                  <td>
                    <Link to={getDetailsPage(actor.id, "actor")}>{actor.name}</Link>
                  </td>
                  <td>
                    <Link to={getDetailsPage(actor.id, "actor")}>
                      <img
                        className="img-thumbnail"
                        alt="No Image Available"
                        title={getImageUrl(actor.profile_path)}
                        src={getImageUrl(actor.profile_path)}
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

export default ShowDetails;
