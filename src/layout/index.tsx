import React, { useMemo } from "react";
import { BrowserRouter, useHistory, Link , Route, Switch } from "react-router-dom";
import Experience from "../experience";
import Education from "../Education";
import Home from "../home";
import Info from "../info";
import ContactMe from '../ContactMe';
import './index.scss';
import  inconIMG from '../shared/images/HamburgerIcon.svg'
import Proficiency from "../Proficiency";

const BaseLayoutOutside: React.FC = () => {
  return (<div>
      <Home />
      <Info/>
      <Proficiency />
      <Education />
      <Experience />
      <ContactMe />
      <div className="footer">
        <span>Made by Youngwoo Park
        <img alt="❤️" draggable="false" src="http://twemoji.maxcdn.com/2/72x72/2764.png" className="heartIcon" />
        </span>
        <span>Inspired by DeveloperFolio Team</span>
      </div>
    </div>);
};
const Header: React.FC = () =>{
  return (
    <div className="headWrapper">
      <div className="headAction">
        <div className="header">          
          <a href="/"className="header-mainIcon">
            <span className="png">{'<'} parkyw1206 {' />'}</span>
          </a>
        <div className="header-menus">
          <a href="#info"className="header-menus--item">Skills</a>
          <a href="#education"className="header-menus--item">Education</a>
          <a href="#experience"className="header-menus--item">experience</a>
          <button className="header-menus--item">Projects</button>
          <button className="header-menus--item">Achievements</button>
          <button className="header-menus--item">Blogs</button>
          <a href="#contactMe"className="header-menus--item">contactMe</a>
          {/* <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label> */}
        </div>
        <button className="header-hamburger" >
          <img src={inconIMG} width={20} height={20} /> 
        </button>
      </div>
      </div>
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
