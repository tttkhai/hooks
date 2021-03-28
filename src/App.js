import "./App.css";
import MainApp from "./components/MainApp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import { UseContext } from "./components/UseContext";
import React, { useEffect, useState } from "react";
import { login } from "./services/login";
import { getFullName } from "./components/useFetch";

function App() {
  const [user, setUser] = useState({ id: null, first: null, last: null });
 
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
