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
                <h1>Technical Skills</h1>
                {/* <img src={images[0].default}></img>  */}
                <div>
                    {images.map(e => (
                        <div className="row container mx-auto">
                            <img src={e.default}></img>
                        </div>
                    ))}
                </div>           
            </div>
        )
    }
}
