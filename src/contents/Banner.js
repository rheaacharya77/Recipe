import React from 'react';
import './Banner.css';
import picture from '../img/banner.png';


function Banner () {
return (
<div className="banner">
<img src={picture} alt="food" className="picture"></img>
<div className ="centered">
    <h3>Discover latest trending recipes</h3>
</div>
</div>
)
}

export default Banner;