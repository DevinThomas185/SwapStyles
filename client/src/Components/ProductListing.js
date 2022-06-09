import React, { Component } from "react";
import Map from "./Map";

class ProductListing extends Component {

    render() {
        return (
            <div>
                <h1> Product Title </h1>

                <div class='parent flex-parent'>
                    <div class='child flex-child-centered'><img src="logo192.png" alt="listingImage" /></div>
                    <div class='child flex-child-centered'>
                        <h2> Available at: </h2>
                        <Map />
                    </div>
                </div>
                <div class='parent flex-parent'>
                    <div class='child flex-child'>
                        <h2> Size: size</h2>
                        <h2> Age: age</h2>
                    </div>
                    <div class='child flex-child'>
                        <h2> Condition: </h2>
                        {/* condition bar */}
                    </div>
                </div>
                <div class='parent flex-parent'>
                    <h1 class='child flex-child'> Tags: </h1>
                    <div class='child flex-child'> insert tags here</div>
                </div>

            </div>
        )
    }

}

export default ProductListing
