import React, { useEffect, useState, useCallback } from "react";
import "./index.scss"
import ChartIcon from '../shared/images/Chart.svg'

export interface MenuState {
  routePath: string;
}

const Proficiency: React.FC = () => {
  return <div className="proficiency" id="#Proficiency">
    <div className="proficiency_content">
        <div className="proficiency_content-title">Proficiency</div>
        <div className="proficiency_content-items">
          <div className="proficiency_content-item">
          <div  className="proficiency_content-item--name">Typescript</div>
            <div  className="proficiency_content-item--bar">
              <span style={{width:"80%"}} />
            </div>
          </div>
        </div>
        <div className="proficiency_content-items">
          <div className="proficiency_content-item">
          <div  className="proficiency_content-item--name">React</div>
            <div  className="proficiency_content-item--bar">
              <span style={{width:"70%"}} />
            </div>
          </div>
        </div>
        <div className="proficiency_content-items">
          <div className="proficiency_content-item">
          <div  className="proficiency_content-item--name">Storybook</div>
            <div  className="proficiency_content-item--bar">
              <span style={{width:"60%"}} />
            </div>
          </div>
        </div>
        <div className="proficiency_content-items">
          <div className="proficiency_content-item">
          <div  className="proficiency_content-item--name">Javascript</div>
            <div  className="proficiency_content-item--bar">
              <span style={{width:"50%"}} />
            </div>
          </div>
        </div>
      </div>
      <div className="proficiency_image">
        <img src={ChartIcon} width={'80%'}/>
      </div>
    </div>;
};

export default Proficiency;
