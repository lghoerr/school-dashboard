import "./App.css";
import login from "./Login.js";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>Thomas Jefferson High School</h1>
      </div>
    </Router>
  );
}

export default App;
