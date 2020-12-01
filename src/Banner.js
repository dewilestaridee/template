import React, {Component} from 'react';
import './Main.css';

import B from './B.png';

class Banner extends Component {
    render(){
        return (
            <div className ="cv">
            <h3>Banner</h3>
            <img class="tengah" top width="30%" height="30%" src={B} alt="Card cap" /> 
            </div>
        );
    }
}
export default Banner;