import React,{Component} from 'react';
import {NavLink} from "react-router-dom";

class Footer extends Component{
  render(){
    return (
      <section className="footer-container">
        <NavLink className="guide-item">
          <div></div>
          <span>外卖</span>
        </NavLink>
        <NavLink className="guide-item">
          <div></div>
          <span>外卖</span>
        </NavLink>
        <NavLink className="guide-item">
          <div></div>
          <span>外卖</span>
        </NavLink>
        <NavLink className="guide-item">
          <div></div>
          <span>外卖</span>
        </NavLink>
      </section>
    )
  }
}

export default Footer;