import React, { useEffect, useState, useCallback } from "react";
import "./index.scss"
import GreetingIcon from '../shared/images/Greeting.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin,faInstagram,faVimeo } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
export interface MenuState {
  routePath: string;
}

const Home: React.FC = ({}) => {
  return( 
    <div className="greet-main" id="#home">
      <div className="greet-main_text">
        <span className="greet-main_text--name">
          <span className="wave-emoji">
          Hi all, I'm Youngwoo
            <img alt="👋" draggable="false" src="http://twemoji.maxcdn.com/2/72x72/1f44b.png" className="wave-emoji-png"  />
          </span>
          <span  className="greet-main_text--desc">저는 열정적인 프론트 엔드 엔지니어입니다.
          <img alt="🚀" draggable="false" src="http://twemoji.maxcdn.com/2/72x72/1f680.png" className="passionate-emoji"></img> 
          현재 데이터 보안 분야에서 클라우드 서비스 프론트 엔드를 개발하고 있습니다. Typescript/Javacript/React를 이용한 웹 개발 경험이 있습니다. </span>
        </span>
        <div className="greet-main_text-icons">
          <a
            href={"https://github.com/parkyw1206"}
            className="greet-main_text-icon greet-main_text-icon--github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span></span>
          </a>
          <a
            href={"https://www.facebook.com/youngwoo.park.716195/"}
            className="greet-main_text-icon greet-main_text-icon--facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span></span>
          </a><a
            href={"https://www.linkedin.com/in/youngwoo-park-032874158/"}
            className="greet-main_text-icon greet-main_text-icon--linkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span></span>
          </a>
          <a
            href={"mailto:parkyw1206@gmail.com"}
            className="greet-main_text-icon greet-main_text-icon--google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span></span>
          </a>
          <a
            href={"https://www.instagram.com/parkyw1206/"}
            className="greet-main_text-icon greet-main_text-icon--instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span></span>
          </a>
          <a
            href={"https://velog.io/@parkyw1206"}
            className="greet-main_text-icon greet-main_text-icon--vimeo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faVimeo} />
            <span></span>
          </a>
        </div>
        <span className="greet-main_btns">
          <a href="#contactMe" className="greet-main_btn">CONTACT ME</a>
          <a href="https://drive.google.com/file/d/1l7FOYFjDUDSvBIlnu-WMx_4w5btxLti8/view?usp=sharing" className="greet-main_btn">SEE MY RESUME</a>
        </span>
        
      </div>
      <div className="greet-main_img">
        <img src={GreetingIcon} width={'80%'}/>
      </div>
    </div>
  );
};

export default Home;
