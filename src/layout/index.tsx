import React, { useMemo } from "react";
import { BrowserRouter, useHistory, Link , Route, Switch } from "react-router-dom";
import Experience from "../experience";
import Github from "../github";
import Home from "../home";
import Info from "../info";
import './index.scss';
import  inconIMG from '../shared/images/HamburgerIcon.svg'

const BaseLayoutOutside: React.FC = () => {
  return <div>
      <Home />
      <Info />
    </div>;
};
const Header: React.FC = () =>{
  return (
    <div className="header">
      <button className="header-mainIcon">
        {'<'}
        <span className="png">parkyw1206</span>
        {' />'}
      </button>
      <div className="header-menus">
        <button className="header-menus--item">Skills</button>
        <button className="header-menus--item">Education</button>
        <button className="header-menus--item">Experience</button>
        <button className="header-menus--item">Projects</button>
        <button className="header-menus--item">Achievements</button>
        <button className="header-menus--item">Blogs</button>
        <button className="header-menus--item">Contact Me</button>
        {/* <label>
          <input type="checkbox" />
          <span className="slider"></span>
        </label> */}
      </div>
      <button className="header-hamburger" >
        <img src={inconIMG} width={20} height={20} /> 
      </button>
    </div>

  )
}

const Layout: React.FC = () => {
  
  return (
    <div className="layout">
      <Header />
      <BaseLayoutOutside /> 
    </div>
  );
};

export default Layout;
