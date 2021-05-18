import "./App.css";
import SearchBar from "./components/SearchBar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PageResults from "./views/PageResults";
import ActorDetails from "./views/ActorDetails";
import DataContext from "./context/DataContext";
import { useState } from "react";
import ShowDetails from "./views/ShowDetails";

function App() {
  const [entries, setEntries] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <DataContext.Provider
      value={{
        entries,
        setEntries,
        totalEntries,
        setTotalEntries,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <SearchBar />
          </header>
          <Switch>
            <Route exact path="/" component={PageResults} />
            <Route exact path="/home" component={PageResults} />
            <Route path="/showdetails" component={ShowDetails} />
            <Route path="/actordetails" component={ActorDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
