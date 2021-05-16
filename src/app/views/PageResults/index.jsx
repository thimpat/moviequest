import React, { useContext } from "react";
import { Container } from "./styles";

import DataContext from "../../context/DataContext";
import { Card } from "react-bootstrap";

function PageResults() {
  const { entries } = useContext(DataContext);

  return (
    <Container>
      <div className="tz-gallery">
        <div className="row">
          {entries.length ? (
            entries.map((entry, index) => (
              <div key={`item-${index}`} className="card-wrapper col-sm-te6x col-md-4 col-xl-2">
                <Card>
                  <Card.Img
                    variant="top"
                    alt="No Image Available"
                    src={
                      entry.poster_path
                        ? `https:\\image.tmdb.org/t/p/original/${entry.poster_path}`
                        : "/puzzle-693873_640.jpg"
                    }
                  />
                  <Card.Body>
                    <Card.Title>{entry.original_title}</Card.Title>
                    <Card.Text>{entry.overview}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <span>No result</span>
          )}
        </div>
      </div>
    </Container>
  );
}

export default PageResults;
