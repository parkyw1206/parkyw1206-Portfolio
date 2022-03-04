import React, { useEffect, useState, useCallback } from "react";
import './index.scss'
import ContactIcon from '../shared/images/Email.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin,faInstagram,faVimeo } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const ContactMe: React.FC = () => {
  return (
    <div className="contactMe" id="contactMe">
      <div className="contactMe-info">
        <div className="contactMe-info--title">
          Contact Me
          <img alt="☎️" draggable="false" src="http://twemoji.maxcdn.com/2/72x72/260e.png" className="phoneIcon"></img>
        </div>
        <div className="contactMe-info--text">
          이외에 궁금하신 게 있으시다면 아래로 연락주세요.
        </div>
        <div className="contactMe-info--div">
        <a className="contactMe-detail" href="tel:+82-1076891737">+82-1076891737</a>
        <a className="contactMe-detail" href="mailto:parkyw1206@gmail.com">parkyw1206@gmail.com</a>
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
        </div>
      </div>
      <div className="contactMe-img">
        <img src={ContactIcon} width={'80%'}/>
      </div>
    </div>); 
};

export default ContactMe;
