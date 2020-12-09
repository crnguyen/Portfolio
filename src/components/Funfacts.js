import React from "react";
import Kona from "../assets/funfacts/Kona.png"
import Travel from "../assets/funfacts/travel.png"
import SOPS from "../assets/funfacts/sops.png"

export default function Funfacts() {
    return (
        <div id="Funfacts" className="sections">
            <h1 className="titleDecoration">fun facts/interests</h1>

            <div class="funFactContent">
                <img alt="kona" className="funFactPics" src={Kona}></img>
                <div class="funFactText">
                    <span>
                        <h3><strong>I have a 1 year old puppy named Kona. He is 75% corgi, 25% australian shepherd, and 100% sass. </strong></h3>
                    </span>
                </div>  
            </div>

            <div class="funFactContent">
                <div class="funFactText">
                    <h3><strong>I love traveling! Pre-pandemic, I have traveled to Hawaii, New Orleans, Oregon, Ohio, and Washington. In the future, I hope to get the chance to travel outside of the US.</strong></h3>
                </div>
                <img alt="travel" className="funFactPics" src={Travel}></img>
            </div>

            <div class="funFactContent">
                <img alt="salesOps" className="funFactPics" src={SOPS}></img>
                <div class="funFactText">
                    <span>
                        <h3><strong>I have 4 years of professional background in Sales Operations Analytics and have worked in various companies including Adobe. </strong></h3>
                    </span>
                </div>  
            </div>
        </div>
    )
}
