import React, { useContext, useState, useCallback } from "react";
import "./index.scss"
import  coachIMG from '../shared/images/Coach.svg'
import StyleContext from "../contexts/StyleContext";

export interface MenuState {
  routePath: string;
}

const Info: React.FC = () => {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="info"  id="info">
      <div className="info_img">
        <img src={coachIMG} width={'80%'}/>
      </div>
      <div className="info_text">
        <span className="info_text-title">What I do</span>
        <span className={isDark ? "dark info_text-desc" : "info_text-desc"}>도전을 무서워하지 않고 꾸준히 성장하는 프론트엔드 개발자
        <img draggable="false" className="wave-emoji-png" alt="👊🏻" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f44a-1f3fb.png"/>
        </span>
        <div className="info_text-devList">
          <div className="info_text-dev">
          <div className="info_text-dev--icon">
            <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="50" height="50" />
          </div>
            <span className="info_text-dev--text">Typescript</span>
          </div>         
          <div className="info_text-dev">
          <div className="info_text-dev--icon">
            <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="50" height="50" />
          </div>
            <span className="info_text-dev--text">Javascript</span>
          </div>
          <div className="info_text-dev">
          <div  className="info_text-dev--icon">
            <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="50" height="50" />
          </div>
            <span className="info_text-dev--text">React</span>
          </div>

          <div className="info_text-dev">
          <div className="info_text-dev--icon">
            <img src="https://techstack-generator.vercel.app/storybook-icon.svg" alt="icon" width="50" height="50" />
          </div>
            <span className="info_text-dev--text">Storybook</span>
          </div>         
          <div className="info_text-dev">
          <div  className="info_text-dev--icon">
            <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="50" height="50" />
          </div>
            <span className="info_text-dev--text">Sass</span>
          </div>         
        </div>
        <div className="info_text-skills">
          <div className={isDark ? "dark info_text-skill":"info_text-skill"}>
           <img alt="⚡" draggable="false" src="http://twemoji.maxcdn.com/2/72x72/26a1.png" className="powerIcon" />
            반응형 웹을 이용하여 웹을 사용자 사이트 크기에 맞춰 웹/모바일/클라이언트에 적절하게 보여줄 수 있습니다.
          </div>
          <div className={isDark ?"dark info_text-skill":"info_text-skill"}>
           <img alt="⚡" draggable="false" src="http://twemoji.maxcdn.com/2/72x72/26a1.png" className="powerIcon" />
            팀원들과의 코드리뷰를 통해 더 나은 사이트를 만드려고 노력합니다.
          </div>
          <div className={isDark ?"dark info_text-skill":"info_text-skill"}>
           <img alt="⚡" draggable="false" src="http://twemoji.maxcdn.com/2/72x72/26a1.png" className="powerIcon" />
            사용자의 입장에서 UI/UX를 개발하고 있습니다.
          </div>
        </div>
      </div>
      
    </div>);
};

export default Info;
