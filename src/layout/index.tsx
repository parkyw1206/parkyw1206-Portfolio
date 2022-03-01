import React, { useMemo } from "react";
import { BrowserRouter, useHistory, Link , Route, Switch } from "react-router-dom";
import Experience from "../experience";
import Github from "../github";
import Home from "../home";
import Info from "../info";
import './index.scss';
import  inconIMG from '../shared/images/HamburgerIcon.svg'

const useComponentWillMount = (func: any) => useMemo(func, []);

const BaseLayoutOutside: React.FC = () => {
  return <Home />;
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
      </div>
      <button className="header-hamburger" >
        <img src={inconIMG} width={50} height={40} /> 
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
