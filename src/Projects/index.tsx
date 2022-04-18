import React, { useEffect, useState, useCallback } from "react";
import './index.scss'
import '../common.scss'
import projectOne1 from '../shared/images/project1/1.png'
import projectOne2 from '../shared/images/project1/2.png'
import projectOne3 from '../shared/images/project1/3.png'
import projectOne4 from '../shared/images/project1/4.png'

import projectTwo1 from '../shared/images/project2/2-1.png'
import projectTwo2 from '../shared/images/project2/2-2.png'
import projectTwo3 from '../shared/images/project2/2-3.png'
import projectTwo4 from '../shared/images/project2/2-4.png'
import projectTwo5 from '../shared/images/project2/2-5.png'
import projectTwo6 from '../shared/images/project2/2-6.png'
import projectTwo7 from '../shared/images/project2/2-7.png'
import projectTwo8 from '../shared/images/project2/2-8.png'
import Modal from 'react-modal';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export interface MenuState {
  routePath: string;
}

const Projects: React.FC = () => { 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "projects_modal-pics",
  };
  const [showExperienceDetail1, setShowExperienceDetail1] = useState(false)
  const [showExperienceDetail2, setShowExperienceDetail2] = useState(false)
  const ProjectOneModal: React.FC= ()=>{
    return (
      <Modal isOpen={showExperienceDetail1} onRequestClose={()=>setShowExperienceDetail1(false)}>
      <div className="flex">
        <div className="projects_modal-company">UCSD-themed Dungeon Crawler Game</div>
        <button className={"projects_modal-close "} onClick={()=>setShowExperienceDetail1(false)}> X</button>
      </div>        
      <div className="projects_modal-date">Jan 2019 - Mar 2019</div>
      <div className="projects_modal-box">
        <Slider {...settings}>
          <div><img src={projectOne1}/></div>
          <div><img src={projectOne2} /></div>
          <div><img src={projectOne3}  /></div>
          <div><img src={projectOne4} /></div>
        </Slider>
      </div>
      <div>University of California, San Diego에 유명한 Geisel 도서관을 <span className="bold">용사가 몬스터와 싸우며 옥상까지 가는 게임</span>입니다.</div>
      <div className="projects_modal-description">
        처음으로 Git을 이용해 다른 사람들과 협업해 보고 timeline을 짜며 회의를 통해 Java를 기반으로 개발하며
        진행한 프로젝트 입니다. 저는 이 게임에서 첫 로그인 기능과 계정 관리 그리고 각 사용자들의 성적을 text파일에 모아둬 게임이 끝날 때 TOP 10 이름을 보여주도록했습니다.
      </div>

      <div className="bold">Background</div>
      <div className="projects_modal-description">
        <div>2019년 봄학기 재학 당시, "Introduction to Computer Science
          and Object-Oriented Programming: Java"이라는 수업에서 진행한 4인 팀 프로젝트입니다. 4명의 팀원들이 가장 좋아하는 것이 무엇이고 어떤 걸 개발하고 싶냐는 주제로 회의를 한 결과, 모두
          게임을 좋아한다는 공통점을 찾아 게임을 진행하게 되었습니다. 평범한 적을 무찌르는 게임이 아닌, UCSD 학생들이 많은 중간고사들, 에세이들, 낮은 성적들이라는 학생으로서의 적을 무찔러 
          결국 가장 윗층인 옥상까지 가 졸업할 수 있도록 진행하는 게임입니다.
        </div>
      </div>

      <div className="bold">Meaning</div>
      <div className="projects_modal-description">
        <div>처음으로 Git을 이용해 다른 사람들과 협업한 경험이 있는 프로젝트라는 점에서 의미가 깊습니다. Git을 저장용도만으로 사용하는
        것이 아닌 다른 사람들과 코드를 어떻게 주고 받아야하는 지 배웠습니다. 또한, 한 학기 동안 여러 나라 학생들과 같은 이야기를 하고 같이 개발을 하며 다른 사람들과 어떻게 함께 개발해야하는
        지 배울 수 있었던 프로젝트였습니다. </div>
      </div>
      <div className="bold">Technology Stack(s)</div>
      <div className="projects_modal-description">Language: Java</div>
      <div className="bold">Site</div>
      <div className="projects_modal-description">https://60alex60.wixsite.com/geiseldungeon</div>
    </Modal>
    );
  }
  const ProjectTwoModal : React.FC = ()=>{
    return(
      <Modal isOpen={showExperienceDetail2} onRequestClose={()=>setShowExperienceDetail2(false)}>
        <div className="flex">
          <div className="projects_modal-company">포토폴리오 웹 사이트</div>
          <button className={"projects_modal-close "} onClick={()=>setShowExperienceDetail2(false)}> X</button>
        </div> 
        <div className="projects_modal-date">Mar 2022</div>
        <div className="projects_modal-box">
        <Slider {...settings}>
          <div> <img height={'400px'} src={projectTwo1} alt="projectTwo1" /></div>
          <div> <img height={'400px'} src={projectTwo2} alt="projectTwo2" /></div>
          <div> <img height={'400px'} src={projectTwo3} alt="projectTwo3" /></div>
          <div> <img height={'400px'} src={projectTwo4} alt="projectTwo4" /></div>
          <div> <img height={'400px'} src={projectTwo5} alt="projectTwo5" /></div>
          <div> <img height={'400px'} src={projectTwo6} alt="projectTwo6" /></div>
          <div> <img height={'400px'} src={projectTwo7} alt="projectTwo7" /></div>
          <div> <img height={'400px'} src={projectTwo7} alt="projectTwo8" /></div>
        </Slider>
      </div>
      <div><span className="bold">포토폴리오 용도로 제작한 웹사이트</span>입니다. 지금 보시고 계신 이 웹사이트에 해당합니다.</div>

      <div className="projects_modal-description">
       Typescript,React를 이용하여 개발한 프로젝트이지만, 오프라인에서도 사용가능하기 위해 Service worker를 그 후에 추가했습니다. Github Page에서 배포하여, service worker가
       작동되지 않지만, 제 <a href="https://github.com/parkyw1206/danbi">github</a>에 들어오셔서 danbi라는 프로젝트를 받아보시면 service worker가 작동되는 것을 보실 수 있습니다.
      </div>

      <div className="bold">Background</div>
      <div className="projects_modal-description">
        <div> Typescript와 React만을 이용하여 DeveloperFolio Team의 포토폴리오 디자인을 참고하여 제작하였습니다. 스크롤을 한번에 내릴 때, 한번에 제가 무엇을 했는지 담아내고 싶었습니다.
          프론트의 경험은 있지만, 배포경험이 없어 GihubPage 를 이용해 배포하는 법을 배웠고, 좀 더 화려하게 만들기 위해 많은 css와 animation을 공부해 넣어보았습니다. 또한, 오프라인환경에서도
          쉽게 들어오게 하기 위해 service worker를 사용해보자 생각해 적용해보았습니다. 하지만, Github page에서 배포하면 service worker가 안먹게 되어있어 해당 프로젝트를 실제로 담고있는 git 페이지에
          들어오시면 service worker가 실행되시는 것을 볼 수 있습니다.
        </div>
      </div>

      <div className="bold">Meaning</div>
      <div className="projects_modal-description">
        <div>회사에서밖에 웹 사이트를 제작해 본 적이 없었지만, 그 경험을 살려 혼자 웹 사이트를 제작해본 좋은 기회였습니다. 웹 개발 뿐만 아니라 기획, 디자인, 제작, 배포까지 해보았던
          좋은 경험이었습니다. 매일 더 좋은 포토폴리오를 만들기 위해 조금 씩 고쳐나가면서 어떤 기능을 추가할지 어떻게 표현하면 더 한눈에 보기 좋을지 고민하고있습니다. 그러던 중, 
          나온 생각이 service Worker였고, 이를 혼자 적용해보면서 Service worker의 구동 과정과 장단점을 확실하게 이해할 수 있었습니다.
          
          이번 기회로 인해, 혼자 웹 사이트개발을 잘 할 수 있다는 자신감을 얻게 되었습니다.  
        </div>
      </div>
      <div className="bold">Technology Stack(s)</div>
      <div className="projects_modal-description">Frontend: Typescript, React, Sass </div>      
      <div className="bold">Site</div>
      <div className="projects_modal-description">https://parkyw1206.github.io/</div>
      <div className="projects_modal-description">해당 사이트는 saadpasta의 포토폴리오 템플릿(https://developerfolio.js.org/)을 기반으로 작업했습니다. 다만 HTML,CSS 코드를 가져다 사용하지 않고, 디자인만 참고하여 HTML, CSS 코딩은 
      직접 진행했습니다.</div>

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
          <div className="projects_container--card-company">포토폴리오 웹사이트</div>
          </div>
          <div className="projects_container--card-detail">
            <div className="projects_container--card-role">개인 프로젝트</div>            
            <div className="projects_container--card-date">Mar 2022</div>
            <div className="projects_container--card-subtitle">주요 기능</div>
            <ul>
              <li className="projects_container--card-subtitle-li">
                간단한 자기소개, 인적 사항, 기술, 스텍, Github과 velog 등등 SNS 링크, 프로젝트, 경력
              </li>
            </ul>
            <div className="projects_container--card-subtitle">Frontend</div>
            <ul>
              <li className="projects_container--card-subtitle-li">
                TypeScript, React, Sass
              </li>
            </ul>
            <div className="projects_container--card-subtitle">URL</div>
            <ul>
              <li className="projects_container--card-subtitle-li">
                https://parkyw1206.github.io/
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>); 
};

export default Projects;
