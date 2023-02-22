import React from "react";
import Promo from './Promo';
    

function Sidebar(props){
    const asideStyle = {
        background: 'azure',
        width: 'calc(30% - 10px)',
        marginLeft: '10px',
    }
    return (
        <aside 
            style={asideStyle} 
            className="sidebar-component">
            <h2>{props.greet}</h2>
            <Promo />
           

        </aside>
        )
}

export default Sidebar;