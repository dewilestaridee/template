import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'; 
import './Main.css';

class Movie extends Component {
    render() {
        return (
            <div className="movie">
                <h3>Search Movie Favorit</h3>
                <InputGroup>
                <Input id="search-input" placeholder="Judul Film" />
                <InputGroupAddon addonType="append">
                <Button class="btn btn-outline-secondary" type="button" id="search-button"> Cari</Button>
                </InputGroupAddon>
                </InputGroup>
                <hr></hr>
                <div className = "row" id= "movie-list">

                </div>
            </div>
           
        );
    }
}

export default Movie ;