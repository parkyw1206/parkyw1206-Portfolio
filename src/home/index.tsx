import React, { useEffect, useState, useCallback } from "react";
import "./index.scss"
export interface MenuState {
  routePath: string;
}

const Home: React.FC = () => {
  return( 
    <div className="home">
        <div>박영우</div>
        <div>안녕하세요</div>
    </div>
  );
};

export default Home;
