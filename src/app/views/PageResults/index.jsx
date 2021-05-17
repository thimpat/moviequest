import React, { useContext } from "react";
import { Container } from "./styles";

import DataContext from "../../context/DataContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function PageResults() {
  const { entries } = useContext(DataContext);

  return (
    <Container>
      <div className="tz-gallery">
        {!entries.length ? <h2>No results</h2> : ""}
        {entries.length ? (
          <div className="block-result">
            <div className="row">
              <div className="text-box">
                <h1>Movies & TV</h1>
                <h1>Movies & TV</h1>
              </div>
              {entries
                .filter(entry => {
                  return entry.media_type === "movie" || entry.media_type === "tv";
                })
                .map(entry => (
                  <div key={`${entry.id}`} className="card-wrapper col-sm-te6x col-md-4 col-xl-3">
                    <Card title={JSON.stringify(entry, null, 2)}>
                      <Link to={`/details?id=${entry.id}`} query={`${entry.id}`}>
                        <Card.Img
                          variant="top"
                          alt="No Image Available"
                          src={
                            entry.poster_path
                              ? `https:\\image.tmdb.org/t/p/original/${entry.poster_path}`
                              : "/puzzle-693873_640.jpg"
                          }
                        />
                      </Link>
                      <Card.Body>
                        <Card.Title>{entry.original_title}</Card.Title>
                        <Card.Text>{entry.overview}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </div>
            <div className="row">
              <div className="text-box">
                <h1>People</h1>
                <h1>People</h1>
              </div>
              {entries
                .filter(entry => {
                  return !(entry.media_type === "movie" || entry.media_type === "tv");
                })
                .map(entry => (
                  <div key={`${entry.id}`} className="card-wrapper col-sm-te6x col-md-4 col-xl-2">
                    <Card title={JSON.stringify(entry, null, 2)}>
                      <Link to={`/details?id=${entry.id}`} query={`${entry.id}`}>
                        <Card.Img
                          variant="top"
                          alt="No Image Available"
                          src={
                            entry.profile_path
                              ? `https:\\image.tmdb.org/t/p/original/${entry.profile_path}`
                              : "/puzzle-693873_640.jpg"
                          }
                        />
                      </Link>
                      <Card.Body>
                        <Card.Title>{entry.name}</Card.Title>
                        <Card.Text>{entry.gender ? "Male" : "Female"}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

export default PageResults;
