import React from 'react'

function SubCategory(props) {
    var options = '';

    if (props.niche === "Tops") {
        options = <>
            <option value="all-tops">All</option>
            <option value="t-shirt">T-Shirts</option>
            <option value="shirt">Shirts</option>
            <option value="dress">Dress</option>
            <option value="hoodie">Hoodies</option>
        </>;
    } else if (props.niche === "Bottoms") {
        options = <>
            <option value="all-bottoms">All</option>
            <option value="shorts">Shorts</option>
            <option value="jeans">Jeans</option>
            <option value="trouser">Trousers</option>
        </>;
    } else if (props.niche === "Overwear") {
        options = <>
            <option value="all-overwear">All</option>
            <option value="jacket">Jackets</option>
            <option value="coat">Coats</option>
        </>;
    } else if (props.niche === "Footwear") {
        options = <>
            <option value="all-footwear">All</option>
            <option value="shoe">Shoe</option>
        </>;
    } else if (props.niche === "Other") {
        options = <>
            <option value="other">Other Items</option>
        </>;
    } else {
        options = <>
            <option value="none">Sub-Category (All)</option>
        </>;
    }

    return (
       options
    );
}

export default SubCategory;