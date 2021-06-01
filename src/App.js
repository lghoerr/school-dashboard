import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage.js";

function App() {
  return (
    <Router>
      <Navbar />
      <HomePage />
    </Router>
  );
}

export default App;
