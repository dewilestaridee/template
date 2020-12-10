import React, {Component} from 'react';
import './Main.css';

import C from './C.png';
import C2 from './C2.png';
import C3 from './C3.png';

class Certificate extends Component {
    render(){
        return (
            <div className ="cv">
            <h3>CERTIFICATE</h3>
            <img class="tengah" top width="30%" height="30%" src={C} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={C2} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={C3} alt="Card cap" /> 
            </div>
        );
    }
}
export default Certificate;