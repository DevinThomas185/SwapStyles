import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div class="home-container">
                <Link to="/findEvent" class="EventF" ><div class="home-font"> <h1> Find Events </h1> </div>  </Link>
                <Link to="/createEvent" class="EventC"><div class="home-font"> <h1 class="home-font"> Create an Event </h1> </div> </Link>
                <Link to="/listClothes" class="ClothesL"><div class="home-font"> C </div> </Link>
                <Link to="/findClothes" class="ClothesF"> <div class="home-font"> <h1> Find Clothes </h1> </div> </Link>
            </div>
        )
    }

}

export default Home;