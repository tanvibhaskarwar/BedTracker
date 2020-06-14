import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "fontsource-roboto";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
      </Fragment>
    </Router>
  );
}

export default App;
