import React from "react";
import Kona from "../assets/funfacts/Kona.png"

export default function Funfacts() {
    return (
        <div id="Funfacts" className="sections">
            <h1 className="titleDecoration">fun facts/interests</h1>

            <div class="funFactContent">
                <img alt="kona" className="funFactPics" src={Kona}></img>
                
                <span><h3><strong>I have a 1 year old corgi/aussie mix named Kona!</strong></h3>
                    </span>
                
            </div>

            <div class="funFactContent">
                <div class="funFactText">
                    <h3><strong>I have a 1 year old corgi/aussie mix named Kona!</strong></h3>
                </div>
                <img alt="kona" className="funFactPics" src={Kona}></img>
            </div>
        </div>
    )
}
