import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useLocation } from "react-router-dom";
import { requestMovieDetails } from "../../helpers/tmdb";
import { Card, Table } from "react-bootstrap";

function PageDetails() {
  const location = useLocation();
  // eslint-disable-next-line compat/compat
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get("id");

  const [idMovie] = useState(id);
  const [entry, setEntry] = useState({});

  const populatePage = data => {
    setEntry(() => data);
  };

  useEffect(() => {
    requestMovieDetails(idMovie)
      .then(populatePage)
      .catch(e => console.error(e));
  }, [idMovie]);

  return (
    <Container>
      <div className="container-media">
        <Card title={JSON.stringify(entry, null, 2)}>
          <Card.Img
            variant="top"
            alt="No Image Available"
            src={
              entry.poster_path
                ? `https:\\image.tmdb.org/t/p/original/${entry.poster_path}`
                : "/puzzle-693873_640.jpg"
            }
          />
        </Card>
      </div>

      <div className="container-content">
        <h1>{entry.original_title}</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Key</th>
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
    </Container>
  );
}

export default PageDetails;
