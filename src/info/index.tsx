import React, { useEffect, useState, useCallback } from "react";
import "./index.scss"

export interface MenuState {
  routePath: string;
}

const Info: React.FC = () => {
  return (
    <div className="info">
      <div className="info_title">
        간단한 자기 소개
      </div>
      <div className="info_content">
        ㅇㄴ
      </div>
    </div>);
};

export default Info;
