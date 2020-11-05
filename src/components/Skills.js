import React, {Component} from 'react';

export default class Skills extends Component {
    render() {
        function importAll(r) {            
            return r.keys().map(r);
          }
        const images = importAll(require.context('../assets/skills', false, /\.(png|jpe?g|svg)$/));
        // console.log(images);
        // console.log(images[0].default)

        return (
            <div id="skills">
                <h1 className="heading">Technical Skills</h1>
                <div className="line"></div>
                {/* <img src={images[0].default}></img>  */}
                <div>
                    {images.map(e => (
                        <li>
                            <img src={e.default}></img>
                        </li>
                    ))}
                </div>           
            </div>
        )
    }
}
