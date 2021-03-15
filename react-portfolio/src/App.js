import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavTabs from "./components/NavTabs/NavTabs";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Repos from "./components/pages/Repos";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/repos" component={Repos} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
