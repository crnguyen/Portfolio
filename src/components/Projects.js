import React from "react";
import RecipeRec from "../assets/projects/RecipeRec.png"
import FoodFuse from "../assets/projects/FoodFuse.png"
import PingPong from "../assets/projects/Ping Pong.png"
import Apartmate from "../assets/projects/Apartmate.png"

export default function Projects() {
    return (
        <div id="Projects" className="sections">
            <h1 className="titleDecoration">These are my projects</h1>

            <div className="allProjects">

                <div className="container">
                    <img alt="reciperec" className="projectPics" src={RecipeRec}></img>
                    <div className="centered">
                        <div>Recipe Rec</div>
                    </div>
                </div>

                <div className="container">
                    <img alt="foodfuse" className="projectPics" src={FoodFuse}></img>
                    <div className="centered overlay overlayRight">
                        <div>Food Fuse</div>
                    </div>
                </div>

                <div className="container">
                    <img alt="pingpong" className="projectPics" src={PingPong}></img>
                    <div className="centered overlayRight">
                        <div>Ping Pong</div>
                    </div>
                </div>

                <div className="container">
                    <img alt="apartmate" className="projectPics" src={Apartmate}></img> 
                    <div className="centered">
                        <div>ApartMate</div>
                    </div>
                </div>   
            </div>

        </div>

    )
}
