import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Navigation } from "./components/nav/Navigation";
import Routes from "./components/Routes";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation
        links={[
          { url: "", title: "About me" },
          { url: "resume", title: "Resume" },
          { url: "portfolio", title: "Portfolio" },
          { url: "blog", title: "Blog" },
        ]}
      />
      <Routes />
    </Router>
  );
}

export default App;
