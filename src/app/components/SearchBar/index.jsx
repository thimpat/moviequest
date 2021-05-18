import { Container } from "./styles";
import { Button, Dropdown, Form, FormControl, Nav, Navbar, Spinner, Table } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { requestMultiSearch, extractResult } from "../../helpers/tmdb";
import DataContext from "../../context/DataContext";
import { BrowserRouter, useHistory } from "react-router-dom";
import CONSTANT from "../../constants.json";
import { getDetailsPage } from "../../helpers/utils";

const filteringOptions = ["No Filter", "Actors only", "Movies only", "TV Shows only"];
let timerID = 0;
const timeout = CONSTANT.APP.TYPING_TIMEOUT_SUGGESTION;

function SearchBar() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [currentTextBoxContent, setCurrentTextBoxContent] = useState("");
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestBoxVisible, setIsSuggestBoxVisible] = useState(false);

  const { setEntries, selectedFilter, setSelectedFilter } = useContext(DataContext);
  const history = useHistory();

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

  const gotoDetailPage = url => {
    setTimeout(() => {
      history.push(url);
    }, 100);
  };

  const onChangeFilter = index => {
    setSelectedFilter(index);
  };

  const showSuggestions = response => {
    let entries = [];
    if (response) {
      let results = response.results;
      if (!results) {
        setSuggestions(entries);
        setIsSuggestBoxVisible(false);
        return;
      }
      results = results.slice(0, 10);
      results.map(entry => {
        const detailPageURL = getDetailsPage(entry.id, entry.media_type);
        entries.push({ description: entry.title || entry.name, id: 0, url: detailPageURL });
      });
    }
    setSuggestions(entries);
    setIsSuggestBoxVisible(true);
  };

  const onUpdateSearchBox = e => {
    const content = e.target.value || "";
    if (content.length < 5) {
      setIsSuggestBoxVisible(false);
      return;
    }

    clearTimeout(timerID);

    timerID = setTimeout(() => {
      if (content.trim().length < 5) {
        return;
      }
      requestMultiSearch(searchPhrase)
        .then(showSuggestions)
        .catch(e => console.error(e));
    }, timeout);

    setSearchPhrase(content);
  };

  const setSuggestionsStatus = () => {
    setTimeout(() => {
      setIsSuggestBoxVisible(false);
    }, 500);
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
        <Navbar.Brand id="app-name" onClick={() => gotoDetailPage("/")}>
          Movie Quest
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
              <Dropdown.Item key={`filter-${index}`} href="#" onClick={() => onChangeFilter(index)}>
                {filteringOptions[index]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {isSuggestBoxVisible ? (
          <Table striped bordered hover variant="dark">
            <tbody>
              {suggestions.map((suggestion, index) => (
                <tr key={`suggested-${index}`} onClick={() => gotoDetailPage(suggestion.url)}>
                  <td>
                    <span>{suggestion.description}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          ""
        )}
        <Navbar.Collapse>
          <Nav className="mr-auto" />
          <Form inline>
            <FormControl
              id="search-textbox"
              autoFocus
              autoComplete="off"
              data-testid="search-textbox"
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={onUpdateSearchBox}
              onKeyDown={onKeyDown}
              onBlur={setSuggestionsStatus}
              onClick={onUpdateSearchBox}
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
