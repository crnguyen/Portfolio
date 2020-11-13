import React from "react";

export default function Contact () {
    return (
        <div id="Contact" className="sections">
            <h1 className="titleDecoration">Contact me</h1>
            <a href="mailto:c.nguyen0994@gmail.com" className="linkButton" target="_top">Send an Email</a>
            <div className="calendlyContainer">
                <div className="calendly-inline-widget" data-url="https://calendly.com/cnguyen0994/60min" style={{minWidth: 320, height: 530}}></div>
            </div>
        </div>
    )
}
