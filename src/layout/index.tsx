import React, { useState } from "react";
import { BrowserRouter, useHistory, Link , Route, Switch } from "react-router-dom";
import Experience from "../experience";
import Education from "../Education";
import Home from "../home";
import Info from "../info";
import ContactMe from '../ContactMe';
import './index.scss';
import  inconIMG from '../shared/images/HamburgerIcon.svg'
import  closeIMG from '../shared/images/Close.png'
import ballonImg from '../shared/images/Ballon.svg'
import Proficiency from "../Proficiency";

const BaseLayoutOutside: React.FC = () => {
  return (<div className="base">
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
  const [showMenu, setShowMenu] = useState(false);
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
          <a href="#experience"className="header-menus--item">Experience</a>
          {/* <a href="#Projects"className="header-menus--item">Projects</a> */}
          {/* <a href="#Extra"className="header-menus--item">Extra</a> */}
          <a href="#contactMe"className="header-menus--item">Contac tMe</a>
          {/* <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label> */}
        </div>
        <button className="header-hamburger" onClick={()=>setShowMenu(!showMenu)}>
          {!showMenu ?
            <img src={inconIMG} width={20} height={20} />  
            : <img src={closeIMG} width={20} height={20} /> 
          }
        </button>
        {showMenu && 
          <ul className={'menu'}>
            <li><a href="#info"className="header-menus--item">Skills</a></li>
            <li><a href="#education"className="header-menus--item">Education</a></li>
            <li><a href="#experience"className="header-menus--item">Experience</a></li>
            {/* <li><a href="#Projects"className="header-menus--item">Projects</a></li> */}
            {/* <li><a href="#Extra"className="header-menus--item">Extra</a></li> */}
            <li><a href="#contactMe"className="header-menus--item">Contact Me</a></li>
          </ul>
        }
        
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
       <img src={ballonImg} className="upScrollbtn" onClick={()=>window.scrollTo(0,0)} />        
    </div>
  );
};

export default Layout;
