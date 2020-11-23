import React, {Component} from 'react';
import './Main.css';
import { Jumbotron } from 'reactstrap';
 

class Header extends Component {
    render() {
        return (
            <div className="Header">
               <div>
                <Jumbotron>
                    <h1 className="display-3">About Dewi lestari</h1>
                    <p className="lead">Frontend Developer | UI Web Design | Ex Pharmacist</p>
                    <p className="lead">Perkenalkan nama saya Dewi Lestari. Saya lulusan Unversitas Gunadarma tahun 2019 jurusan Sistem Informasi .</p>
                    <hr className="my-2" />
                    <p>HTML | CSS | Reactjs | GIT | API | CANVA | CORELDRAW.</p>
                </Jumbotron>
                </div>
            </div>


        );
       
    }
}

export default Header;