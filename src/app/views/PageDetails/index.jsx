import React, { useContext } from "react";
import { Container } from "./styles";
import { useHistory, useParams } from "react-router-dom";

function PageDetails(props) {
  const { id } = useParams();
  debugger;
  return (
    <Container>
      <span>
        Details Page <pre>{JSON.stringify(props, null, 2)}</pre>
      </span>
    </Container>
  );
}

export default PageDetails;
