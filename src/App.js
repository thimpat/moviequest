import './App.css';
import Button from 'react-bootstrap/Button';
import SearchBar from "./SearchBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SearchBar/>
                <Button variant="flat" size="xxl">
                    flat button
                </Button>
            </header>
        </div>
    );
}

export default App;
