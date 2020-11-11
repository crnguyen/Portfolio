import React from "react";
import Kona from "../assets/funfacts/Kona.png"

export default function Funfacts() {
    return (
        <div id="Funfacts" className="sections">
            <h1 className="titleDecoration">fun facts/interests</h1>
            <div className="allProjects">
                <div className="container">
                    <img alt="kona" className="funFactPics" src={Kona}></img>
                </div>
                I have a 1 year old corgi/aussie mix named Kona
            </div>
        </div>
    )
}
