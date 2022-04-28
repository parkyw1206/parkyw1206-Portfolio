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
      
      <Modal   isOpen={showExperienceDetail1} onRequestClose={()=>setShowExperienceDetail1(false)}>
        <div className="flex">
          <div className="experience_modal-company">FASOO</div>
          <button className={"experience_modal-close "} onClick={()=>setShowExperienceDetail1(false)}> X</button>
        </div>        
        <div className="experience_modal-date">Dec 2020 - Present</div>
        <div>파수는 데이터 및 <span className="bold">소프트웨어 보안 솔루션</span>서비스 전문기업입니다.</div>
        <div className="experience_modal-description">기본적으로 외부 협업 솔루션인 Wrapsody eCo의 <span className="bold">React 프레임 워크 기반의 프론트 앤드 개발 업무</span>를 담당하고 있으며, Wrapsody eCo의 단순한 백앤드 업무,
            문서 통합 관리 플랫폼인 Wrapsody의 프론트 앤드를 담당하고 있습니다.
        </div>

        <ul className="experience_modal-container">
        <li className="experience_modal-container-li">
            <div className="experience_modal-container-title">Wrapsody eCo 관리자 페이지 UI/UX 개편</div>
            <div className="experience_modal-container-div">2022.02 - 2022.04</div>
            <ul>
              <li>프로젝트 소개: 외부 협업 보안 플랫폼(Wrapsody eCo)의 UI/UX 개편을 단독으로 진행중</li>
              <li>사용 언어/기술: Typescript, React, Storybook, Redux</li>
              <li>Wrapsody eCo 개편에 큰 반응을 얻어. Wrapsody eCo의 관리자 페이지를 제 1 개발자로
개발 진행중</li>
              <li>Javascript, Mobx를 Typescript,Redux로 변경</li>
              <li>예상했던 기한은 3달이지만, 전에 했던 기술들을 활용해 한달 반만에 기본 개발 완료</li>
            </ul>
          </li>
          <li className="experience_modal-container-li">
            <div className="experience_modal-container-title"> Wrapsody UI/UX 전면 패치</div>
            <div className="experience_modal-container-div">2022.01 - NOW</div>
            <ul>
              <li>프로젝트 소개: 문서 가상화 플랫폼(Wrapsody)의 UI/UX 개편을 3명의 동료들과 함께 진행
중. </li>
              <li>사용 언어/기술: Typescript, React, Storybook, Redux</li>
              <li>Angular를 Typescript,Redux로 변경중에 있음</li>
              <li>Wrapsody eCo에 비해 두세배 큰 웹사이트인 만큼, 효율적으로 개발하는 것을 중심으로 개
발하고 있음. 중복되는 component들의 재 사용을 자제하고 사용할 수 있는 데이터를 중복적으
로 부르지않도록 유의하고 있음.</li>
            </ul>
          </li>

          <li className="experience_modal-container-li">
            <div className="experience_modal-container-title"> 웹뷰를 이용해 Wrapsody eCo 윈도우 클라이언트 지원</div>
            <div className="experience_modal-container-div">2021.09 - 2021.11</div>
            <ul>
              <li>프로젝트 소개: 사용자의 편의성을 높여 좀 더 편하게 서비스를 사용하기 위해 윈도우 클라이
언트 웹뷰 UI 개발 </li>
              <li>사용 언어/기술: Typescript, React, Storybook</li>
              <li>웹에서 사용하는 기능들을 클라이언트에서도 80%의 기능 구현</li>
              <li>서버와의 통신만 생각했던 웹 개발과 달리, 클라이언트와의 통신을 추가로 고려하며 개발.</li>
            </ul>
          </li>
          <li className="experience_modal-container-li">
            <div className="experience_modal-container-title">Wrapsody eCo 2.0 UI/UX 전면 패치</div>
            <div className="experience_modal-container-div">2021.03 - 2021.09</div>
            <ul>
              <li>프로젝트 소개: 사내 보안 클라우드 솔루션(Wrapsody eCo) UI/UX 개편</li>
              <li>사용 언어/기술: Typescript, React, Storybook, Redux</li>
              <li>Javascript와 Mobx를 사용하던 기존 사이트를 Typescript와 Redux로 변경</li>
              <li>사내 공용 컴포넌트를 storybook으로 제작해 다른 제품에서도 같은 컴포넌트를 쉽게 사용할 수 있도록 함</li>
              <li>사용자가 최대한 쉽게 사용할 수 있고 정보를 빠르게 찾을 수 있도록 UI 개선</li>
              <li>UI 변경 후, 신규 고객들에게 크게 호평을 받아 기존 고객의 13% 증가</li>
              
              <li><a href="https://www.wrapsodyeco.com/"> 랩소디 에코 안내 사이트</a></li>
              <li><a href="https://www.wrapsodyeco.com/pdf/kr/Wrapsody_eCo_v2.0_%EC%82%AC%EC%9A%A9%EC%9E%90_%EA%B0%80%EC%9D%B4%EB%93%9C_Windows.pdf">사용자 가이드</a></li>
            </ul>
          </li>
          <li className="experience_modal-container-li">
          <div className="experience_modal-container-title">WebRTC를 이용한 화상 회의 서비스 만들기</div>
            <div className="experience_modal-container-div">2020.12 - 2020.02</div>
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
        <div className="flex">
          <div className="experience_modal-company">FASOO</div>
          <button className={"experience_modal-close "} onClick={()=>setShowExperienceDetail2(false)}> X</button>
        </div> 
        <div className="experience_modal-date">June 2020 - September 2020</div>
        <div className="experience_modal-subtitle">랩소디 개발팀  / 인턴</div>
        <ul  className="experience_modal-container">
          <li className="experience_modal-container-li">
            <div className="experience_modal-container-title">CAD 파일 미리보기 서비스 만들기</div>
            <div className="experience_modal-container-div">2021.03 - 현재</div>
            
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
          <div className="experience_container--card-company">FASOO</div>
          <img crossOrigin="anonymous" className="experience-roundedimg" src={fasooIMG} alt="Quora" />
          </div>
          <div className="experience_container--card-detail">
            <div className="experience_container--card-role">프론트 엔드 개발 사원</div>
            <div className="experience_container--card-date">Dec 2020 - Present</div>
            <div className="experience_container--card-subtitle">랩소디 에코 프론트 엔드 개발</div>
            <ul>
              <li className="experience_container--card-subtitle-li">
                Wrapsody eCo 관리자 페이지 UI/UX 개편
              </li>
              <li className="experience_container--card-subtitle-li">
                Wrapsody UI/UX 전면 패치
              </li>
              <li className="experience_container--card-subtitle-li">
                Wrapsody eCo 윈도우 클라이언트 지원
              </li>
              <li className="experience_container--card-subtitle-li">
                Wrapsody eCo UI/UX 전면 패치
              </li>
              <li className="experience_container--card-subtitle-li">
               WebRTC를 이용한 화상 회의 서비스 만들기
              </li>
            </ul>
          </div>
        </div>
        <div className="experience_container--card"  onClick={()=>setShowExperienceDetail2(true)}>
          <div className="experience_container--card-banner">
          <div className="experience_container--card-company">FASOO</div>
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
