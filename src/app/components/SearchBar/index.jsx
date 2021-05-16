import { Container } from "./styles";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { doSearch, extractResult } from "../../helpers/tmdb";
import DataContext from "../../context/DataContext";

function SearchBar() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [currentTextBoxContent, setCurrentTextBoxContent] = useState("");
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);

  const { setEntries } = useContext(DataContext);

  const onStartSearch = async () => {
    setCurrentTextBoxContent(searchPhrase);
    setIsSearchInitiated(true);
  };

  const onKeyDown = async keyCode => {
    if (keyCode === 13) {
      await onStartSearch();
    }
  };

  const populatePage = response => {
    setIsSearchInitiated(false);
    const results = extractResult(response);
    setEntries(results);
    return true;
  };

  useEffect(() => {
    if (!isSearchInitiated) {
      return;
    }

    doSearch(searchPhrase)
      .then(populatePage)
      .catch(e => console.error(e));

    return () => {
      // TODO: Cancel request ...
    };
  }, [isSearchInitiated]);

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
              onKeyDown={e => onKeyDown(e.keyCode)}
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
