import React from "react";
import aos from 'aos';
import 'aos/dist/aos.css';

export default function About () {
    aos.init({
    });
        return (
            <div id="About" className="sections aos-item">
                <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">Hello, World!</h1>
                <h2 data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-delay="2000">My name is Cristina and I'm a <b className="coloredText">solutions-driven full stack developer</b> with a <b className="coloredText">passion for responsive UI design</b>.</h2>
            </div>
        )
}
