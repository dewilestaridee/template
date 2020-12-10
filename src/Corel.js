import React, {Component} from 'react';
import './Main.css';

import D from './D.png';
import D2 from './D2.png';
import D3 from './D3.png';
import D4 from './D4.png';
import D5 from './D5.png';
import D6 from './D6.png';


class Corel extends Component {
    render(){
        return (
            <div className ="cv">
            <h3>Corel Draw</h3>
            <img class="tengah" top width="30%" height="30%" src={D} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={D2} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={D3} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={D4} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={D5} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={D6} alt="Card cap" /> 
            </div>
        );
    }
}
export default Corel;
