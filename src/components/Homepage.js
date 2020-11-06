import React from "react";
import {
    BrowserRouter as Router} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Contributions from "./Contributions";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

function Homepage(){
    return (
        <div>
            <Router>
                <About />
                <Contact />
                <Contributions />
                <Projects />
                <Skills />
            </Router>
        </div>
    )
}

export default Homepage;