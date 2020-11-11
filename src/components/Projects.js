import React from "react";
import Button from '@material-ui/core/Button';
import RecipeRec from "../assets/projects/RecipeRec.png"
import FoodFuse from "../assets/projects/FoodFuse.png"
import PingPong from "../assets/projects/Ping Pong.png"
import Apartmate from "../assets/projects/Apartmate.png"
import MovieMood from "../assets/projects/Movie Mood.png"
import TimeZone from "../assets/projects/TimeZoneConverter.png" //placeholder for now

export default function Projects() {
    return (
        <div id="Projects" className="sections">
            <h1 className="titleDecoration">Projects</h1>

            <div className="allProjects">

                <div className="container">
                    <img alt="reciperec" className="projectPics" src={RecipeRec}></img>
                    <div className="centered overlay overlayRight">
                        <div>Recipe Rec</div>
                        <Button variant="outlined" color="inherit" href="https://github.com/crnguyen/Recipe-Rec">Github</Button>
                        <Button variant="outlined" color="inherit" href="https://reciperec-cristina.herokuapp.com">Visit Site</Button>
                    </div>
                </div>

                <div className="container">
                    <img alt="foodfuse" className="projectPics" src={FoodFuse}></img>
                    <div className="centered overlay overlayRight">
                        <div>Food Fuse</div>
                        <Button variant="outlined" color="inherit" href="https://github.com/crnguyen/FoodFuse">Github</Button>
                        <Button variant="outlined" color="inherit" href="https://foodfuse.herokuapp.com/">Visit Site</Button>
                    </div>
                </div>

                <div className="container">
                    <img alt="pingpong" className="projectPics" src={PingPong}></img>
                    <div className="centered overlay overlayRight">
                        <div>Ping Pong</div>
                        <Button variant="outlined" color="inherit" href="https://github.com/crnguyen/PingPong">Github</Button>
                        <Button variant="outlined" color="inherit" href="https://crnguyen.github.io/PingPong/">Visit Site</Button>
                    </div>
                </div>

                <div className="container">
                    <img alt="apartmate" className="projectPics" src={Apartmate}></img> 
                    <div className="centered overlay overlayRight">
                        <div>ApartMate</div>
                        <Button variant="outlined" color="inherit" href="https://github.com/crnguyen/ApartMate-Frontend">Github</Button>
                        <Button variant="outlined" color="inherit" href="https://apartmate-client.herokuapp.com/">Visit Site</Button>
                    </div>
                </div>   
                <div className="container">
                    <img alt="moviemood" className="projectPics" src={MovieMood}></img> 
                    <div className="centered overlay overlayRight">
                        <div>Movie Mood</div>
                        <Button variant="outlined" color="inherit" href="https://github.com/crnguyen/Movie-Mood">Github</Button>
                        <Button variant="outlined" color="inherit" href="">Visit Site - TBD</Button>
                    </div>
                </div>   
                <div className="container">
                    <img alt="timezone" className="projectPics" src={TimeZone}></img> 
                    <div className="centered overlay overlayRight">
                        <div>Time Zone Converter</div>
                        <Button variant="outlined" color="inherit" href="https://github.com/crnguyen/TimeZoneConverter">Github</Button>
                        <Button variant="outlined" color="inherit" href="">Visit Site - TBD</Button>
                    </div>
                </div>   
            </div>

        </div>

    )
}
