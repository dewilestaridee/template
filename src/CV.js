import React, {Component} from 'react';
import './Main.css';

import img21 from './cv.png';
import img22 from './cv1.png';
import img23 from './cv2.png';

class Cv extends Component {
    render(){
        return (
            <div className ="cv">
            <h3>CV</h3>
            <img class="tengah" top width="40%" height="40%" src={img21} alt="Card cap" /> 
            <img class="tengah" top width="40%" height="40%" src={img22} alt="Card cap" /> 
            <img class="tengah" top width="40%" height="40%" src={img23} alt="Card cap" /> 
            </div>
        );
    }
}
export default Cv;
