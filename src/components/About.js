import React from "react";
import aos from 'aos';
import 'aos/dist/aos.css';

export default function About () {
    aos.init({
    });
        return (
            <div id="About" className="sections aos-item" data-aos="fade-right" data-aos-easing="ease-in-sine">
                <h1>Solutions-driven full stack developer with a passion for responsive UI design.</h1>
            </div>
        )
}
