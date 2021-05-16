import { Container } from "./styles";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

function SearchBar() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Quest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl
              id="search-textbox"
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
