import React, {Component} from 'react';
import './Main.css';

import img11 from './11.png';
import img12 from './12.png';
import img13 from './13.png';
import img14 from './14.png';
import img15 from './15.png';
import img16 from './16.png';
import img17 from './17.png';
import img21 from './21.png';
import img22 from './22.png';
import img23 from './23.png';
import img24 from './24.png';

class Foto extends Component {
    render(){
        return (
            <div className ="main">
            <h3>Photograph</h3>
                
                <img class="kiri" top width="20%" height="40%" src={img21} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img22} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img23} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img24} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img11} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img12} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img13} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img14} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img15} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img16} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img17} alt="Card cap" />
               
            </div>
        );
    }
}
export default Foto;