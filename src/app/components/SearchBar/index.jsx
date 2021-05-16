import { Container } from "./styles";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

function SearchBar() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [currentTextBoxContent, setCurrentTextBoxContent] = useState("");
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);

  const onStartSearch = () => {
    setCurrentTextBoxContent(searchPhrase);
    setIsSearchInitiated(true);
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand id="app-name">Movie Quest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link>{isSearchInitiated ? `Searching... ${currentTextBoxContent}` : ""}</Nav.Link>
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
              onChange={e => setSearchPhrase(e.target.value)}
            />
            <Button
              id="search-button"
              data-testid="search-button"
              variant="outline-success"
              onClick={onStartSearch}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default SearchBar;
