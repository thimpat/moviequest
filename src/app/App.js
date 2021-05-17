import "./App.css";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageResults from "./views/PageResults";
import DataContext from "./context/DataContext";
import { useState } from "react";
import PageDetails from "./views/PageDetails";

function App() {
  const [entries, setEntries] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);

  return (
    <DataContext.Provider
      value={{
        entries,
        setEntries,
        totalEntries,
        setTotalEntries,
      }}
    >
      <Router>
        <div className="App">
          <header className="App-header">
            <SearchBar />
          </header>
          <Switch>
            <Route path="/details" component={PageDetails} />
            <Route exact path="/" component={PageResults} />
          </Switch>
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
