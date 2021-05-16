import "./App.css";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageDetails from "./views/PageDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <Switch>
          <Route path="/shows">
            <PageDetails />
          </Route>
          <Route path="/movies">
            <PageDetails />
          </Route>
          <Route path="/actors">
            <PageDetails />
          </Route>
          <Route path="/">
            <PageDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
