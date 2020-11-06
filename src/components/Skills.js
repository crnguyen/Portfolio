import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class Skills extends Component {
    render() {
        function importAll(r) {            
            return r.keys().map(r);
          }
        const images = importAll(require.context('../assets/skills', false, /\.(png|jpe?g|svg)$/));
        // console.log(images);
        // console.log(images[0].default)

        return (
            <React.Fragment>
                <div id="Skills" className="sections">
                    <h1>Technical Skills</h1>
                    {/* <img src={images[0].default}></img>  */}
                    <Grid container>
                        {images.map(e => (
                            <Grid item xs={4} cols={3}>
                                <img src={e.default}></img>
                            </Grid>
                        ))}
                    </Grid>           
                </div>
            </React.Fragment>
        )
    }
}
