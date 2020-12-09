import React from "react";
import aos from 'aos';
import 'aos/dist/aos.css';

export default function About () {
    aos.init({
    });
        return (
            <div id="About" className="sections aos-item">
                <h1 className="aboutOpening1" data-aos="fade-right" data-aos-easing="ease-in-sine">Hello, World!</h1>
                <div className="aboutSection">
                    <h2 className="aboutOpening2" data-aos="fade-left" data-aos-easing="ease-in-sine" 
                    data-aos-delay="2000">My name is Cristina and I'm a <b className="coloredText">
                        solutions-driven full stack developer</b> based in the San Francisco Bay Area. I have a passion for <b className="coloredText">responsive 
                    and intuitive design on both client-side and server-side</b>, and can help you create a variety of digital products.</h2>
                </div>
            </div>
        )
}
