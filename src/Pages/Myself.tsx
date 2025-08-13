import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useEffect, useRef, useState } from "react";

function Myself() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollskillRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const speed = 0.5; // 작을수록 더 부드럽고 느림

    const animate = () => {
      scroll.scrollLeft += speed;

      // 끝에 도달하면 처음으로 (무한루프)
      if (scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 1) {
        scroll.scrollLeft = 0;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate(); // 시작

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const renderBreifExperience = () => {
    const skillList = [
      { name: "JavaScript", img: "javascript.png", color: "#d9d58e" },
      { name: "TypeScript", img: "Typescript.svg.png", color: "#a7c6e3" },
      { name: "React", img: "react.png", color: "#6f8793" },
      { name: "Storybook", img: "storybook.png", color: "#e3aed9" },
      { name: "Redux", img: "redux.svg", color: "#cab7e6" },
      { name: "Sass", img: "sass.png", color: "#e9b9cb" },
    ];
    return (
      <div className="myself-exPage">
        <div className="myself-exPage--left">
          5 years of<div className="point">XP</div> with the most popular
          ecosystem frontend
        </div>
        <div className="myself-exPage--right">
          <div ref={scrollRef} className="myself-exPage--skills">
            {skillList.map((item, index) => (
              <div
                className="myself-exPage--skill"
                style={{ backgroundColor: item.color }}
              >
                <img
                  src={require(`../Shared/Images/${item.img}`)}
                  alt="me"
                  width={60}
                  height={60}
                  draggable={false}
                />
                <span
                  className="title"
                  style={{ MozWindowDragging: "no-drag" }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollskillRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollskillRef.current.offsetLeft);
    setScrollLeft(scrollskillRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollskillRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollskillRef.current.offsetLeft;
    const walk = (x - startX) * 1; // drag 속도 조절 (곱하기 값)
    scrollskillRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="myself">
      <div
        className="myself-intropage"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="myself-intro">
          <span className="myself-intro--title">Hi, I'm Youngwoo</span>
          <span className="myself-intro--desc">
            During these
            <span className="point">4 years</span>
            as <span className="point">Front-End Software Engineer.</span>
            My role has extended beyond coding to effective communication with
            various departments, to define new features and spearheading the
            development of new apps.
          </span>
          <div className="myself-intro--buttons">
            <a
              href={require("../Shared/Files/Resume (Youngwoo Park).pdf")}
              download="Resume (Youngwoo Park).pdf"
              className="downloadCV"
            >
              Download CV
            </a>
            <span
              className="seeExperience"
              onClick={() => navigate("/experience")}
            >
              See experiences
            </span>
          </div>
        </div>
        <div className="myself-picture">
          <img src={require("../Shared/Images/me.jpg")} alt="me" />
        </div>
      </div>
      {renderBreifExperience()}
      <div className="myself-mainItems">
        <span className="first">Typescript</span>
        <span className="second">React</span>
        <span className="third">Coffee</span>
      </div>
      <div className="myself-tech">
        <span className="myself-tech--instruction">
          These are the technologies I’ve been using
        </span>
        <div
          className="myself-tech--list"
          ref={scrollskillRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div>
            <span>Languages</span>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/javascript.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Javascript</span>
            </div>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/Typescript.svg.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Typescript</span>
            </div>
          </div>
          <div>
            <span>Front-end Development</span>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/react.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>React</span>
            </div>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/redux.svg").default}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Redux</span>
            </div>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/css.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>css</span>
            </div>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/sass.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Sass</span>
            </div>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/react_router.svg").default}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>React Router</span>
            </div>
          </div>
          <div>
            <span>Design System & UI</span>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/storybook.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Storybook</span>
            </div>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/figma.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Figma</span>
            </div>
          </div>
          <div>
            <span>i18n & Collaboration</span>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/weblate.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Weblate</span>
            </div>
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/postman.svg").default}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Postman</span>
            </div>{" "}
            <div className="myself-tech--item">
              <div className="logo">
                <img
                  src={require("../Shared/Images/git.png")}
                  alt="img"
                  width={20}
                  height={20}
                  draggable={false}
                />
              </div>
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myself;
