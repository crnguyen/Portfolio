import React from "react";
import Button from '@material-ui/core/Button';
import Sbuttons from "../assets/contributions/sButtons.png"
import ehBiz from "../assets/contributions/eh.png"

export default function Contributions () {
    return (
        <div id="Contributions" className="sections">
            <h1 className="titleDecoration">Projects/Open Source Contributions</h1>
            <h4>A collection of github projects/sites that I'm working on with others.</h4>

            <div className="allProjects">
                <div className="container">
                    <img alt="sbuttons" className="projectPics" src={Sbuttons}></img>
                    <div className="centered overlay overlayRight">
                        <div className="projectTitles">sButtons</div>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://sbuttons.github.io/sbuttons/">Visit Site</Button>
                        <div className="textDetails">Contributed to adding new styles of buttons and cleaning up code to make it more readable.</div>
                    </div>
                </div>
                <div className="container">
                    <img alt="ehbiz" className="projectPics" src={ehBiz}></img>
                    <div className="centered overlay overlayRight">
                        <div className="projectTitles">ehBizOps</div>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://ehbizops.com/">Visit Site</Button>
                        <div className="textDetails">Contributed to creating a React app for business management.</div>
                    </div>
                </div>

                {/* <p>Python For Beginners</p>
                <a href="https://github.com/crnguyen/Python-for-beginner" class="button">Site</a> */}
            </div>
        </div>
    )
}

