import React, { useEffect, useState, useCallback } from "react";
import "./index.scss"
export interface MenuState {
  routePath: string;
}

const Home: React.FC = () => {
  return( 
    <div className="home">
        <div className="home_pic">사진</div>
        <div className="home_descript">        
          <div className="home_title1">Youngwoo Park</div>
          <div className="home_title2">안녕하세요. 저는 Front-engineer 입니다.</div>
        </div>
    </div>
  );
};

export default Home;
