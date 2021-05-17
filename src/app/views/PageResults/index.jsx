import React, { useContext } from "react";
import { Container } from "./styles";

import DataContext from "../../context/DataContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getImageUrl } from "../../helpers/tmdb";
import { getDetailsPage } from "../../helpers/utils";

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
                .map((entry, index) => (
                  <div key={`show-${index}`} className="card-wrapper col-sm-te6x col-md-4 col-xl-3">
                    <Card title={JSON.stringify(entry, null, 2)}>
                      <Link to={getDetailsPage(entry.id, "show")}>
                        <Card.Img
                          variant="top"
                          alt="No Image Available"
                          src={getImageUrl(entry.poster_path)}
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
                .map((entry, index) => (
                  <div
                    key={`actor-${index}`}
                    className="card-wrapper col-sm-te6x col-md-4 col-xl-2"
                  >
                    <Card title={JSON.stringify(entry, null, 2)}>
                      <Link to={getDetailsPage(entry.id, "actor")}>
                        <Card.Img
                          variant="top"
                          alt="No Image Available"
                          src={getImageUrl(entry.profile_path)}
                        />
                      </Link>
                      <Card.Body>
                        <Card.Title>{entry.name}</Card.Title>
                        <Card.Text>{entry.biography}</Card.Text>
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
