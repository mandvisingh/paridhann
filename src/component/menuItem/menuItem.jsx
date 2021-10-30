import React from "react";
import './styles.scss';
import { withRouter } from "react-router-dom";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div className={`${size} menu-item`}  onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(MenuItem);