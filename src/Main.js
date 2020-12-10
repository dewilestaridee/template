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


class Main extends Component {
    render(){
        return (
            <div className="main">

               <div className="template">
                 <h3>Template</h3>
                <img class="kiri" top width="20%" height="40%" src={img} aria-hidden alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img2} alt="Card cap" /> 
                <img class="kiri" top width="20%" height="40%" src={img3} alt="Card cap" /> 
                <img class="kiri" top width="20%" height="40%" src={img4} alt="Card cap" /> 
                <img class="kiri" top width="20%" height="40%" src={img5} alt="Card cap" /> 
                <img class="kiri" top width="20%" height="40%" src={img6} alt="Card cap" /> 
                <img class="kiri" top width="20%" height="40%" src={img7} alt="Card cap" /> 
                <img class="kiri" top width="20%" height="40%" src={img8} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img9} alt="Card cap" />
                <img class="kiri" top width="20%" height="40%" src={img10} alt="Card cap" />
                </div>
            </div>

           
        )
    }
}

export default Main;
