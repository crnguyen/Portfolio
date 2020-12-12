import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Contact () {
    return (
        <div id="Contact" className="sections">
            <h1 className="titleDecoration">Contact me</h1>
            
            <SocialIcon className="socialIcons" url="mailto:c.nguyen0994@gmail.com" network="email" bgColor="black" />
            <SocialIcon className="socialIcons" url="https://www.linkedin.com/in/cristinanguyen/" network="linkedin" bgColor="black" />
            <SocialIcon className="socialIcons" url="https://github.com/crnguyen" network="github" bgColor="black" />
            
            <div className="calendlyContainer">
                <div className="calendly-inline-widget" data-url="https://calendly.com/cnguyen0994" style={{minWidth: 320, height: 530}}></div>
            </div>
        </div>
    )
}
