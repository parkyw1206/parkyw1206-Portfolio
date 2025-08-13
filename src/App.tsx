import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./Pages/Navigation";
import { HashRouter, Route, Routes } from "react-router";
import Myself from "./Pages/Myself";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";

function App() {
  const [tab, changeTab] = useState("/home");
  useEffect(() => {
    changeTab(window.location.pathname);
  }, []);
  return (
    <HashRouter>
      <div className="port">
        <Navigation tab={tab} changeTab={changeTab} />
        <Routes>
          <Route path="/home" element={<Myself />} />
          <Route path="*" element={<Myself />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <div>
          <div className="followme">
            <span>Follow me</span>
            <div className="followme-items">
              <a
                href="https://github.com/parkyw1206"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  width={32}
                  height={32}
                  src={require("./Shared/Images/github.png")}
                  alt="github"
                />
              </a>
              <a
                href="www.linkedin.com/in/youngwoo-park-032874158"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  width={32}
                  height={32}
                  src={require("./Shared/Images/linkedin.png")}
                  alt="linkedin"
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=parkyw1206@gmail.com&su=Frontend Developer Position Inquiry - Youngwoo Park&body=Hi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width={32}
                  height={32}
                  src={require("./Shared/Images/mail.png")}
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
