import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import NavTabs from "../src/components/NavTabs/NavTabs";
import Projects from "../src/components/pages/Projects";
import About from "../src/components/pages/About";
import Repos from "../src/components/pages/Repos";
import "./App.css";
console.log(process.env.REACT_APP_API_KEY)


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
