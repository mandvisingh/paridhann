import React from "react";

const MenuItem = ({title, subtitle}) => (
    <div className="menu-item">
    <div className="content">
        <h2  className="title">{title}</h2>
        <span  className="subtitle">{subtitle}</span>
    </div>
    </div>
)
export default MenuItem;