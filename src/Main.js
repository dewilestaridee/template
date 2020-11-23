import React, {Component} from 'react';
import './Main.css';
import img from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';
import img10 from './10.png';
import img11 from './11.png';
import img12 from './12.png';
import img13 from './13.png';
import img14 from './14.png';
import img15 from './15.png';


class Main extends Component {
    render(){
        return (
            <div className="main">

               
                <h4>Template dan Fotografi</h4>
                <img class="kiri" top width="15%" height="25%" src={img} aria-hidden alt="Card cap" />
                <img class="kiri" top width="15%" height="25%" src={img2} alt="Card cap" /> 
                <img class="kiri" top width="15%" height="25%" src={img3} alt="Card cap" /> 
                <img class="kiri" top width="15%" height="25%" src={img4} alt="Card cap" /> 
                <img class="kiri" top width="15%" height="25%" src={img5} alt="Card cap" /> 
                <img class="kiri" top width="15%" height="25%" src={img6} alt="Card cap" /> 
                <img class="kiri" top width="15%" height="25%" src={img7} alt="Card cap" /> 
                <img class="kiri" top width="15%" height="25%" src={img8} alt="Card cap" />
                <img class="kiri" top width="15%" height="25%" src={img9} alt="Card cap" />
                <img class="kiri" top width="15%" height="25%" src={img10} alt="Card cap" />
                <img class="kiri" top width="15%" height="25%" src={img11} alt="Card cap" />
                <img class="kiri" top width="15%" height="25%" src={img12} alt="Card cap" />
                <img class="kiri" top width="15%" height="25%" src={img13} alt="Card cap" />
                <img class="kiri" top width="15%" height="25%" src={img14} alt="Card cap" />
                <img class="kiri" top width="15%" height="25%" src={img15} alt="Card cap" />
                </div>

           
        )
    }
}

export default Main;