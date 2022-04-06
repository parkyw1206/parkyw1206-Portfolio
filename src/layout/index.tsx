import React, { useState,useContext} from "react";
import { BrowserRouter, useHistory, Link , Route, Switch } from "react-router-dom";
import Experience from "../experience";
import Projects from '../Projects';
import Education from "../Education";
import Home from "../home";
import Info from "../info";
import ContactMe from '../ContactMe';
import './index.scss';
import SunImg from '../shared/images/Sun.svg'
import MoonImg from '../shared/images/Moon.png'
import  inconIMG from '../shared/images/HamburgerIcon.svg'
import  closeIMG from '../shared/images/Close.png'
import ballonImg from '../shared/images/Ballon.svg'
import Proficiency from "../Proficiency";
import StyleContext from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {StyleProvider} from "../contexts/StyleContext";
import '../common.scss';
const BaseLayoutOutside: React.FC = () => {
  const {isDark} = useContext(StyleContext);

  return (<div className="base">
        <Home />
        <Info/>
        <Proficiency />
        <Education />
        <Projects />
        <Experience />
        <ContactMe />
        <div className={isDark ? "footer dark":"footer"}>
          <span>
            Made by Youngwoo Park
            <img alt="❤️" draggable="false" src="http://twemoji.maxcdn.com/2/72x72/2764.png" className="heartIcon" />
          </span>
          <span>Inspired by DeveloperFolio Team</span>
        </div>
      
    </div>);
};

const Header: React.FC = () =>{
  const {isDark} = useContext(StyleContext);
  const styleContext = useContext(StyleContext);

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div id="header" className={ isDark? 'headWrapper headWrapper--dark':'headWrapper headWrapper--bright'} >
      <div className="headAction">
        <div className={"header" }>          
          <a href="/"className= "header-mainIcon">
            <span className={isDark ? "dark png":"png"}>{'<'} parkyw1206 {' />'}</span>
          </a>
        <button className={"header-darkLight"}>
          {
            isDark ? 
              <img src={MoonImg} width={30} height={30} onClick={()=>styleContext.changeTheme()}/> 
              : <img src={SunImg} width={30} height={30}  onClick={()=>styleContext.changeTheme()}/> 
          }
        </button>
        <div className="header-menus">
          <a href="#info"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Skills</a>
          <a href="#education"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Education</a>
          <a href="#experience"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Experience</a>
          <a href="#projects"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Projects</a>
          {/* <a href="#Extra"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Extra</a> */}
          <a href="#contactMe"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Contact Me</a>
        </div>
        <button className={isDark?"header-hamburger dark_btn":"header-hamburger"} onClick={()=>setShowMenu(!showMenu)}>
          {!showMenu ?
            <img src={inconIMG} width={20} height={20} />  
            : <img src={closeIMG} width={20} height={20} /> 
          }
        </button>
        {showMenu && 
          <ul className={isDark ? 'menu dark' : 'menu'}>
            <li><a href="#info"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Skills</a></li>
            <li><a href="#education"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Education</a></li>
            <li><a href="#experience"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Experience</a></li>
            <li><a href="#projects"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Projects</a></li>
            {/* <li><a href="#Extra"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Extra</a></li> */}
            <li><a href="#contactMe"className={isDark ? "header-menus--item dark_btn" : "header-menus--item"}>Contact Me</a></li>
          </ul>
        }
        
      </div>
      </div>
    </div>

  )
}

const Layout: React.FC = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [scrollLoc, setScrollLoc] = useState(0);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  function scrollFunction() {
    if(document.getElementById("upScrollbtn") != null){
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) 
      {
        document.getElementById("upScrollbtn")!.style.visibility = "visible";
      } else {
        document.getElementById("upScrollbtn")!.style.visibility = "hidden";
      }
    }  
    if(document.getElementById("header") != null){
      let currScrollLoc = document.documentElement.scrollTop;
      if ( currScrollLoc <= 20 ) {
        document.getElementById("header")!.style.position = "relative";
      }
      else if(currScrollLoc > scrollLoc && scrollLoc > 0){
        document.getElementById("header")!.style.position = "relative"; 
      }
      else {
        document.getElementById("header")!.style.position = "fixed"; 
      }

      setScrollLoc(currScrollLoc);
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; 

  return (
    <div className={isDark ? "dark layout" : "layout"} >
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <BaseLayoutOutside /> 
        <img src={ballonImg} id="upScrollbtn" className="upScrollbtn" onClick={()=>window.scrollTo(0,0)} />        
       </StyleProvider>
    </div>
  );
};

export default Layout;
