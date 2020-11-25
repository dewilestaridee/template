import React, {Component} from 'react';
import './Main.css';

import img21 from './cv.png';

class Cv extends Component {
    render(){
        return (
            <div className ="cv">
            <h3>CV</h3>
            <img class="tengah" top width="50%" height="50%" src={img21} alt="Card cap" /> 
            </div>
        );
    }
}
export default Cv;