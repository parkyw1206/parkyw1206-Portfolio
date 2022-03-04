import React, { useEffect, useState, useCallback } from "react";
import './index.scss'
import ucsdIMG from '../shared/images/ucsd.png'
import deAnzaIMG from '../shared/images/deAnza.png'

export interface MenuState {
  routePath: string;
}

const Education: React.FC = () => {
  return <div className="Education" id="education">
      <div className="Education-title">Education</div>
      <div className="Education-schools">
        <div className="Education-school">
          <div className="Education-school--img">
            <img src={ucsdIMG} className="Education-school--rounded"/>
          </div>
          <div  className="Education-school--desc">
            <div className="Education-school--title">University of California, San Diego</div>
            <div className="Education-school--degree">Bachelor of Science in Math-Computer Science</div>
            <div className="Education-school--period">September 2017 - August 2020</div>
            <div className="Education-school--mainText">주요 과목</div>
            <div className="Education-school--subText">- CSE 101 : Design & Analysis and Algorithm</div>
            <div className="Education-school--subText">- CSE 151A: Intro to Machine Learning</div>
            <div className="Education-school--subText">- CSE 100: Advanced Data Structures</div>
          </div>    
        </div>
        <div className="Education-school">
          <div className="Education-school--img">
            <img src={deAnzaIMG} className="Education-school--rounded"/>
          </div>
          <div  className="Education-school--desc">
            <div className="Education-school--title">De Anza College</div>
            <div className="Education-school--degree">Academic Completion in Computer Science</div>
            <div className="Education-school--period">September 2014 - April 2017</div>
            <div className="Education-school--mainText">주요 과목</div>
            <div className="Education-school--subText">- CIS 22C: Data Abstract & structures</div>
            <div className="Education-school--subText">- CIS 22B: Intermediate Programming Methodologies in C++ </div>
            <div className="Education-school--subText">- CIS 22A: Beginning Programming Methodologies in C++</div>
          </div>      
        </div>
      </div>
    </div>;
};

export default Education;
