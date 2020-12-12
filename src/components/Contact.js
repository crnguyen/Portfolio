import React from "react";

export default function Contact () {
    return (
        <div id="Contact" className="sections">
            <h1 className="titleDecoration">Contact me</h1>
            <a href="mailto:c.nguyen0994@gmail.com" className="linkButton" target="_top">Email</a>
            <a href="https://www.linkedin.com/in/cristinanguyen/" className="linkButton" target="_top">LinkedIn</a>
            <a href="https://github.com/crnguyen" className="linkButton" target="_top">Github</a>
            <div className="calendlyContainer">
                <div className="calendly-inline-widget" data-url="https://calendly.com/cnguyen0994" style={{minWidth: 320, height: 530}}></div>
            </div>
        </div>
    )
}
