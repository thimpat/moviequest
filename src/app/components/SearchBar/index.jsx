import { Container } from "./styles";
import { Button, Dropdown, Form, FormControl, Nav, Navbar, Spinner } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { requestMultiSearch, extractResult } from "../../helpers/tmdb";
import DataContext from "../../context/DataContext";
import { BrowserRouter } from "react-router-dom";

const filteringOptions = ["No Filter", "Actors only", "Movies only", "TV Shows only"];

function SearchBar() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [currentTextBoxContent, setCurrentTextBoxContent] = useState("");
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);

  const { setEntries, selectedFilter, setSelectedFilter } = useContext(DataContext);

  const onStartSearch = async () => {
    setCurrentTextBoxContent(searchPhrase);
    setIsSearchInitiated(true);
  };

  const onKeyDown = async event => {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      event.preventDefault();
      await onStartSearch();
    }
  };

  const populatePage = response => {
    setIsSearchInitiated(false);
    const results = extractResult(response);
    setEntries(results);
    return true;
  };

  const onChangeFilter = index => {
    setSelectedFilter(index);
  };

  useEffect(() => {
    if (!isSearchInitiated) {
      return;
    }

    requestMultiSearch(searchPhrase)
      .then(populatePage)
      .catch(e => console.error(e));

    return () => {
      // TODO: Cancel request ...
    };
  }, [isSearchInitiated]);

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand id="app-name">
          <BrowserRouter>
            <a href="/">Movie Quest</a>
          </BrowserRouter>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link>
          {isSearchInitiated ? (
            <div>
              <span>{`Searching... ${currentTextBoxContent}`}</span>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            ""
          )}
        </Nav.Link>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {filteringOptions[selectedFilter]}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {filteringOptions.map((option, index) => (
              <Dropdown.Item
                key={`filter-${index}`}
                href="#/action-1"
                onClick={() => onChangeFilter(index)}
              >
                {filteringOptions[index]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

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
              onKeyDown={onKeyDown}
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
