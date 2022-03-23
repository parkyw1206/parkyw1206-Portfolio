import React, { useEffect, useState, useCallback } from "react";
import './index.scss'
import '../common.scss'
import projectOne1 from '../shared/images/project1/1.png'
import projectOne2 from '../shared/images/project1/2.png'
import projectOne3 from '../shared/images/project1/3.png'
import projectOne4 from '../shared/images/project1/4.png'
import projectOne5 from '../shared/images/project1/5.png'
import Modal from 'react-modal';

export interface MenuState {
  routePath: string;
}

const Projects: React.FC = () => {
  const [showExperienceDetail1, setShowExperienceDetail1] = useState(false)
  const [showExperienceDetail2, setShowExperienceDetail2] = useState(false)
  const ProjectOneModal: React.FC= ()=>{
    const [showProjectOnePic, setShowProjectOnepic] = useState(1);
    return (
      <Modal isOpen={showExperienceDetail1} onRequestClose={()=>setShowExperienceDetail1(false)}>
      <div className="flex">
        <div className="projects_modal-company">UCSD-themed Dungeon Crawler Game</div>
        <button className={"projects_modal-close "} onClick={()=>setShowExperienceDetail1(false)}> X</button>
      </div>        
      <div className="projects_modal-date">Jan 2019 - Mar 2019</div>
      <div  className="projects_modal-pics">
        {showProjectOnePic === 1 ? <img src={projectOne1} />:
        showProjectOnePic === 2 ? <img src={projectOne1} />:
        showProjectOnePic === 3 ? <img src={projectOne1} />:
        showProjectOnePic === 4 ? <img src={projectOne1} />:
        showProjectOnePic === 5 ? <img src={projectOne1} />:
        <img src={projectOne1} />}
      </div>
      <div>University of California, San Diego에 유명한 Geisel 도서관을 <span className="bold">용사가 몬스터와 싸우며 옥상까지 가는 게임</span>입니다.</div>
      <div className="projects_modal-description">
        처음으로 Git을 이용해 다른 사람들과 협업해 보고 timeline을 짜며 회의를 통해 Java를 기반으로 개발하며
        진행한 프로젝트 입니다. 저는 이 게임에서 첫 로그인 기능과 계정 관리 그리고 각 사용자들의 성적을 text파일에 모아둬 게임이 끝날 때 TOP 10 이름을 보여주도록했습니다.
      </div>

      <div className="Bold">Background</div>
      <div className="projects_modal-description">
        <div>2019년 봄학기 재학 당시, "Introduction to Computer Science
          and Object-Oriented Programming: Java"이라는 수업에서 진행한 4인 팀 프로젝트입니다. 4명의 팀원들이 가장 좋아하는 것이 무엇이고 어떤 걸 개발하고 싶냐는 주제로 회의를 한 결과, 모두
          게임을 좋아한다는 공통점을 찾아 게임을 진행하게 되었습니다. 평범한 적을 무찌르는 게임이 아닌, UCSD 학생들이 많은 중간고사들, 에세이들, 낮은 성적들이라는 학생으로서의 적을 무찔러 
          결국 가장 윗층인 옥상까지 가 졸업할 수 있도록 진행하는 게임입니다.
        </div>
      </div>

      <div className="Bold">Meaning</div>
      <div className="projects_modal-description">
        <div>처음으로 Git을 이용해 다른 사람들과 협업한 경험이 있는 프로젝트라는 점에서 의미가 깊습니다. Git을 저장용도만으로 사용하는
        것이 아닌 다른 사람들과 코드를 어떻게 주고 받아야하는 지 배웠습니다. 또한, 한 학기 동안 여러 나라 학생들과 같은 이야기를 하고 같이 개발을 하며 다른 사람들과 어떻게 함께 개발해야하는
        지 배울 수 있었던 프로젝트였습니다. </div>
      </div>
      <div className="Bold">Technology Stack(s)</div>
      <div className="projects_modal-description">Language: Java</div>
      <div className="Bold">Site</div>
      <div className="projects_modal-description">https://60alex60.wixsite.com/geiseldungeon</div>
    </Modal>
    );
  }
  const ProjectTwoModal : React.FC = ()=>{
    return(
      <Modal isOpen={showExperienceDetail2} onRequestClose={()=>setShowExperienceDetail2(false)}>
        <div className="flex">
          <div className="projects_modal-company">FASOOFASOOFASOO</div>
          <button className={"projects_modal-close "} onClick={()=>setShowExperienceDetail2(false)}> X</button>
        </div> 
        <div className="projects_modal-date">June 2020 - September 2020</div>
        <div className="projects_modal-subtitle">랩소디 개발팀  / 인턴</div>
        <ul  className="projects_modal-container">
          <li className="projects_modal-container-li">
            <div className="projects_modal-container-title">CAD 파일 미리보기 서비스 만들기</div>
            <div className="projects_modal-container-div">2021.03 - 현재</div>
            
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
    )
  }
  return (
    <div className="projects" id="projects">
      { <ProjectOneModal />}
      { <ProjectTwoModal />}
      
      <div className="projects_title">
        Projects
      </div>
      <div className="projects_container">
        <div className="projects_container--card"  onClick={()=>setShowExperienceDetail1(true)}>
          <div className="projects_container--card-banner">
          <div className="projects_container--card-company">UCSD-themed Dungeon Crawler Game</div>
          </div>
          <div className="projects_container--card-detail">
            <div className="projects_container--card-role">학부 3학년 수업 4인 팀 프로젝트</div>
            <div className="projects_container--card-date">Jan 2019 - Mar 2019</div>
            <div className="projects_container--card-subtitle">주요 기능</div>
            <ul>
              <li className="projects_container--card-subtitle-li">
                1층부터 시작해 가이젤 도서관 가장 윗층까지 배틀해 올라가는 게임
              </li>
              <li className="projects_container--card-subtitle-li">
                로그인 및 계정 기능 개발
              </li>
              <li className="projects_container--card-subtitle-li">
               각 사용자 별 순위를 모아 가장 마지막 화면에 순위 보여줌
              </li>
            </ul>
            <div className="projects_container--card-subtitle">언어</div>
            <ul>
              <li className="projects_container--card-subtitle-li">
                Java,Javafx
              </li>
            </ul>
          </div>
        </div>
        <div className="projects_container--card"  onClick={()=>setShowExperienceDetail2(true)}>
          <div className="projects_container--card-banner">
          <div className="projects_container--card-company">FASOO</div>
          </div>
          <div className="projects_container--card-detail">
            <div className="projects_container--card-role">인턴</div>            
            <div className="projects_container--card-date">June 2020 - Sep 2020</div>
            <div className="projects_container--card-subtitle">랩소디 fullstack 개발</div>
            <ul>
              <li className="projects_container--card-subtitle-li">
                CAD 파일 미리보기 서비스 만들기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>); 
};

export default Projects;
