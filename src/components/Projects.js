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
                        <div className="projectTitles">Recipe Rec</div>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://github.com/crnguyen/Recipe-Rec">Github</Button>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://reciperec-cristina.herokuapp.com">Visit Site</Button>
                        <div className="textDetails">An app that captures data from the Spoonacular API. Search, and favorite/edit recipes, and interact with other users through comments.</div>
                    </div>
                </div>
                <div className="container">
                    <img alt="foodfuse" className="projectPics" src={FoodFuse}></img>
                    <div className="centered overlay overlayRight">
                        <div className="projectTitles">Food Fuse</div>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://github.com/crnguyen/FoodFuse">Github</Button>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://foodfuse.herokuapp.com/">Visit Site</Button>
                        <div className="textDetails">Search food services sites to compare data such as delivery time and delivery fee. Built with Django, Python, Ajax, jQuery, Selenium, and Bootstrap.</div>
                    </div>
                </div>
                <div className="container">
                    <img alt="pingpong" className="projectPics" src={PingPong}></img>
                    <div className="centered overlay overlayRight">
                        <div className="projectTitles">Ping Pong</div>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://github.com/crnguyen/PingPong">Github</Button>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://crnguyen.github.io/PingPong/">Visit Site</Button>
                        <div className="textDetails">Classic game of Ping Pong built with Javascript, HTML, and CSS.</div>
                    </div>
                </div>
                <div className="container">
                    <img alt="apartmate" className="projectPics" src={Apartmate}></img> 
                    <div className="centered overlay overlayRight">
                        <div className="projectTitles">ApartMate</div>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://github.com/crnguyen/ApartMate-Frontend">Github</Button>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://apartmate-client.herokuapp.com/">Visit Site</Button>
                        <div className="textDetails">An app created to make living with roommates easier. Claim chores, split payments, and invite others to your group.</div>
                    </div>
                </div>   
                <div className="container">
                    <img alt="moviemood" className="projectPics" src={MovieMood}></img> 
                    <div className="centered overlay overlayRight">
                        <div className="projectTitles">Movie Mood</div>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://github.com/crnguyen/Movie-Mood">Github</Button>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="">Visit Site - TBD</Button>
                        <div className="textDetails">App that picks a horror/thriller movie for you to watch using the TMDB API. *Refactoring this to be a site that includes all genres*</div>
                    </div>
                </div>   
                <div className="container">
                    <img alt="timezone" className="projectPics" src={TimeZone}></img> 
                    <div className="centered overlay overlayRight">
                        <div className="projectTitles">Time Zone Converter</div>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="https://github.com/crnguyen/TimeZoneConverter">Github</Button>
                        <Button className="projectButtons" variant="outlined" color="inherit" href="">Visit Site - TBD</Button>
                        <div className="textDetails">Displays/compares the current time in different time zones.</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}
