import React, { useEffect, useState, useCallback } from "react";
import './index.scss'
import fasooIMG from '../shared/images/fasoo.png'
import Modal from 'react-modal';

export interface MenuState {
  routePath: string;
}

const Experience: React.FC = () => {
  const [showExperienceDetail1, setShowExperienceDetail1] = useState(false)
  const [showExperienceDetail2, setShowExperienceDetail2] = useState(false)

  return (
    <div className="experience" id="experience">
      
      <Modal isOpen={showExperienceDetail1} onRequestClose={()=>setShowExperienceDetail1(false)}>
        <div className="experience_modal-company">Fasoo</div>
        <div className="experience_modal-date">Dec 2020 - Present</div>
        <div className="experience_modal-subtitle">랩소디 에코 프론트 엔드 개발</div>
        <ul>
          <li className="experience_modal-container-li">
            Wrapsody eCo 2.0 UI/UX 전면 패치
            <ul>
              <li>프로젝트 소개: 사내 보안 클라우드 솔루션(Wrapsody eCo) UI/UX 개편</li>
              <li>사용 언어/기술: Typescript, React, Storybook, Redux</li>
              <li>Javascript와 Mobx를 사용하던 기존 사이트를 Typescript와 Redux로 변경</li>
              <li>사용자가 최대한 쉽게 사용할 수 있고 정보를 빠르게 찾을 수 있도록 UI 개선</li>
              <li>UI 변경 후, 고객 13% 증가</li>
            </ul>
          </li>
          <li className="experience_modal-container-li">
            웹뷰를 이용해 Wrapsody eCo 윈도우 클라이언트 지원
            <ul>
              <li>프로젝트 소개: 사용자의 편의성을 높여 좀 더 편하게 서비스를 사용하기 위해 윈도우 클라이
언트 웹뷰 UI 개발 </li>
              <li>사용 언어/기술: Typescript, React, Storybook</li>
              <li>웹에서 사용하는 기능들을 클라이언트에서도 80%의 기능을 쉽게 사용 가능</li>
            </ul>
          </li>
          <li className="experience_modal-container-li">
            WebRTC를 이용한 화상 회의 서비스 만들기
            <ul>
              <li>프로젝트 소개: 코로나 시국에 필요한 비대면 화상회의를 위해 webRTC를 통한 화상회의 서
비스 구축</li>
              <li>단건 및 되풀이 화상회의 예약, 취소, 상세 정보, 등의 기술을 개발</li>
              <li>사용 언어 / 기술 : Javascript, React</li>
              <li>13명의 사용자들이 동시에 사용</li>
            </ul>
          </li>
        </ul>
      </Modal>
      <Modal isOpen={showExperienceDetail2} onRequestClose={()=>setShowExperienceDetail2(false)}>
        <div className="experience_modal-company">Fasoo</div>
        <div className="experience_modal-date">June 2020 - September 2020</div>
        <div className="experience_modal-subtitle">랩소디 개발팀  / 인턴</div>
        <ul>
          <li className="experience_modal-container-li">
            CAD 파일 미리보기 서비스 만들기
            <ul>
              <li>프로젝트 소개: 문서 가상화 플랫폼에서 CAD 파일의 미리보기 서비스 개발</li>
              <li>사용 기술/언어: Java, Spring, RestAPI, Javascript</li>
              <li>AutoCAD사에서 제공하는 RESTAPI를 이용해 미리보고 싶은 파일을 전송 후, CAD 파일 미
리보기 자료를 받아 웹에 표시</li>
              <li>같은 시기에 했던 인턴팀들 중에 우수한 평가를 받고 수료</li>
            </ul>
          </li>
        </ul>
      </Modal>
      <div className="experience_title">
        Experience
      </div>
      <div className="experience_container">
        <div className="experience_container--card"  onClick={()=>setShowExperienceDetail1(true)}>
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
        <div className="experience_container--card"  onClick={()=>setShowExperienceDetail2(true)}>
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
