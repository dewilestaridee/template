import React, {Component} from 'react';
import './Main.css';

import B from './B.png';
import B2 from './b2.png';
import B3 from './hakuhodo.png';
import B4 from './payung.png';
import B5 from './somethinc.png';
import B6 from './upmosphere.png';
import B7 from './GridNetwork.png';
import B8 from './pixel.png';
import B9 from './volvo.png';
import B10 from './kodomo.png';
import B11 from './digi.png';
import B12 from './kupu.png';


class Banner extends Component {
    render(){
        return (
            <div className ="cv">
            <h3>Banner</h3>
            <img class="tengah" top width="30%" height="30%" src={B} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={B2} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={B3} alt="Card cap" /> 
            <img class="tengah" top width="30%" height="30%" src={B4} alt="Card cap" />
            <img class="tengah" top width="30%" height="30%" src={B5} alt="Card cap" />
            <img class="tengah" top width="30%" height="30%" src={B6} alt="Card cap" />
            <img class="tengah" top width="30%" height="30%" src={B7} alt="Card cap" />
            <img class="tengah" top width="30%" height="30%" src={B8} alt="Card cap" />
            <img class="tengah" top width="30%" height="30%" src={B9} alt="Card cap" />
            <img class="tengah" top width="30%" height="30%" src={B10} alt="Card cap" />
            <img class="tengah" top width="30%" height="30%" src={B11} alt="Card cap" />
            <img class="tengah" top width="30%" height="30%" src={B12} alt="Card cap" />
            </div>
        );
    }
}
export default Banner;
