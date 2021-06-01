import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage.js";
import PersonDirectory from "./Components/PersonDirectory.js";
import ClassList from "./Components/ClassList.js";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/directory" component={MyDirectory} />
          <Route path="/home" component={MyHomePage} />
          <Route path="/" component={MyHomePage} exact />
          <Route path="/classes" component={MyClassList} />
        </Switch>
    </Router>
  );
}

const MyHomePage = () => (
  <div style={{textAlign:"center"}}>
    <HomePage />
  </div>
);

const MyDirectory = () => (
  <div style={{textAlign:"center"}}>
    <PersonDirectory />
  </div>
);

const MyClassList = () => (
  <div style={{textAlign:"center"}}>
    <ClassList />
  </div>
);

export default App;

