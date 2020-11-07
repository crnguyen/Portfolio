import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import aos from 'aos';
import 'aos/dist/aos.css';

export default class Skills extends Component {
    render() {
        aos.init({duration: 2000});
        function importAll(r) {            
            return r.keys().map(r);
          }
        const images = importAll(require.context('../assets/skills', false, /\.(png|jpe?g|svg)$/));
        // console.log(images);
        // console.log(images[0].default)

        return (
            <React.Fragment>
                <div id="Skills" className="sections">
                    <p>Technical Skills</p>
                    {/* <img src={images[0].default}></img>  */}
                    <Grid container>
                        {images.map(e => (
                            <Grid item xs={12} sm={4} cols={3}>
                                <img alt="" key={e} data-aos="zoom-in" className="skillsImgs" src={e.default}></img> 
                            </Grid>
                        ))}
                    </Grid>           
                </div>
            </React.Fragment>
        )
    }
}
