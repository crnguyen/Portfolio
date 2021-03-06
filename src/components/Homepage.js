import React from "react";
import {
    BrowserRouter as Router} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Contributions from "./Contributions";
import Projects from "./Projects";
import Skills from "./Skills";
import Funfacts from "./Funfacts";

function Homepage(){
    return (
        <div>
            <Router>
                <About />
                <Skills />
                <Projects />
                <Contributions />
                <Funfacts />
                <Contact />
            </Router>
        </div>
    )
}

export default Homepage;