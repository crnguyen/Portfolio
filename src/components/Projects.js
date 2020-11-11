import React from "react";
import RecipeRec from "../assets/projects/RecipeRec.png"
import FoodFuse from "../assets/projects/FoodFuse.png"
import PingPong from "../assets/projects/Ping Pong.png"
import Apartmate from "../assets/projects/Apartmate.png"

export default function Projects() {
    return (
        <div id="Projects" className="sections">
            <h1 className="titleDecoration">These are my projects</h1>

            <div className="hoverBox">
                <img alt="reciperec" className="projectPics hover-bottom" src={RecipeRec} title="buzz hover text"></img>
                <div className="hover-top hover-slideup">
                    <p className="hover-text">testingtesting</p>
                </div>
            </div>

            <img alt="foodfuse" className="projectPics" src={FoodFuse}></img>
            <img alt="pingpong" className="projectPics" src={PingPong}></img>
            <img alt="apartmate" className="projectPics" src={Apartmate}></img>    
        </div>

    )
}
