import React from "react";
import {Nav} from "react-bootstrap";
import '../../css/app.css';
import { stack as Menu } from 'react-burger-menu'
const Sidebar = props => {
    const  showSettings=(event)=>{
        event.preventDefault();
        
      }
   

    return (
        <>
    
        {/* <Menu isOpen={true}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
        </Menu> */}
          
        </>
        );
  };

  export default Sidebar
  