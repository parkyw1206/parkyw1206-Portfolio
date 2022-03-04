import React, { useEffect, useState, useCallback } from "react";
import './index.scss'
import fasooIMG from '../shared/images/fasoo.png'

export interface MenuState {
  routePath: string;
}

const Experience: React.FC = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience_title">
        Experience
      </div>
      <div className="experience_container">
        <div className="experience_container--card">
          <div className="experience_container--card-banner">
          <div className="experience_container--card-company">Fasoo</div>
          <img crossOrigin="anonymous" className="experience-roundedimg" src={fasooIMG} alt="Quora" />
          </div>
          <div className="experience_container--card-detail">
            <div className="experience_container--card-role">프론트 엔드 개발 사원</div>
            <div className="experience_container--card-date">Dec 2020 - Present</div>
            <div className="experience_container--card-subtitle">랩소디 에코 프론트 엔드 개발</div>
            <ul>
              <li className="experience_container--card-subtitle-li">
                Wrapsody eCo 2.0 UI/UX 전면 패치
              </li>
              <li className="experience_container--card-subtitle-li">
                웹뷰를 이용해 Wrapsody eCo 윈도우 클라이언트 지원
              </li>
              <li className="experience_container--card-subtitle-li">
               WebRTC를 이용한 화상 회의 서비스 만들기
              </li>
            </ul>
          </div>
        </div>
        <div className="experience_container--card">
          <div className="experience_container--card-banner">
          <div className="experience_container--card-company">Fasoo</div>
          <img crossOrigin="anonymous" className="experience-roundedimg" src={fasooIMG} alt="Quora" />
          </div>
          <div className="experience_container--card-detail">
            <div className="experience_container--card-role">인턴</div>            
            <div className="experience_container--card-date">June 2020 - Sep 2020</div>
            <div className="experience_container--card-subtitle">랩소디 fullstack 개발</div>
            <ul>
              <li className="experience_container--card-subtitle-li">
                CAD 파일 미리보기 서비스 만들기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>); 
};

export default Experience;
