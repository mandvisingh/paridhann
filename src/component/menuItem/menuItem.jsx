import React from "react";
import './styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`} >
    <div 
    className="background-image"
    style={{
        background: `url(${imageUrl})`
    }}>  </div>
    <div className="content">
        <h2  className="title">{title}</h2>
        <span  className="subtitle">SHOP NOW</span>
    </div>
    </div>
)
export default MenuItem;