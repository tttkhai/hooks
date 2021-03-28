import "./App.css";
import MainApp from "./components/MainApp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/app">Main App</Link>
            </li>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/app" component={MainApp} />
      </Router>
    </div>
  );
}

export default App;
