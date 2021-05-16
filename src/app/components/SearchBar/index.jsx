import { Container } from "./styles";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

function SearchBar() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand id="app-name">Movie Quest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto" />
          <Form inline>
            <FormControl
              id="search-textbox"
              autoFocus
              data-testid="search-textbox"
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button id="search-button" data-testid="search-button" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default SearchBar;
