import React from "react";
import Button from '@material-ui/core/Button';
import Sbuttons from "../assets/contributions/sButtons.png"

export default function Contributions () {
    return (
        <div id="Contributions" className="sections">
            <h1 className="titleDecoration">Open Source Contributions</h1>
            <p>A collection of github projects/sites that I'm working on with others.</p>

            <div className="allProjects">
                <div className="container">
                    <img alt="sbuttons" className="projectPics" src={Sbuttons}></img>
                    <div className="centered overlay overlayRight">
                        <div>sButtons</div>
                        <Button variant="outlined" color="inherit" href="https://sbuttons.github.io/sbuttons/">Visit Site</Button>
                        <div>Contributed to adding new styles of buttons and cleaning up code to make it more readable.</div>
                    </div>
                </div>

                {/* <p>Python For Beginners</p>
                <a href="https://github.com/crnguyen/Python-for-beginner" class="button">Site</a> */}
            </div>
        </div>
    )
}

