import React from "react";
import "./App.css";
import NoiseMapDisplay from "./NoiseMapDisplay";
import ProjectedMap from "./ProjectedMap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/visualizer">
            <ProjectedMap />
          </Route>
          <Route path="/">
            <NoiseMapDisplay />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
