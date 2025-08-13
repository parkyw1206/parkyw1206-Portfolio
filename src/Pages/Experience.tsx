import "./index.scss";

function Experience() {
  return (
    <div className="experience">
      <span className="title">
        {`< Here, you can know me a little more and see my whole experience as a `}
        <span className="emphasis">Front-End Software Engineer. </span>
        {`/>`}
      </span>
      <a
        style={{ alignSelf: "center", marginTop: 43, marginBottom: 144 }}
        href={require("../Shared/Files/Resume (Youngwoo Park).pdf")}
        download="Resume (Youngwoo Park).pdf"
        className="downloadCV"
      >
        Download CV
      </a>
      <div className="experience-item">
        <div className="experience-item--left">
          <span className="jobTitle">Front-end Software Engineer</span>
          <span className="status">Full-time</span>
          <span>
            <span className="desc">Dec 2020</span>
            <span className="descdot">·</span>
            <span className="desc">Present</span>
          </span>
          <span className="desc">Seoul - South Korea</span>
        </div>
        <div className="experience-item--right">
          <span className="company">Fasoo</span>
          <span className="companydesc">
            - Developed and maintained three enterprise platforms:
            <span className="highlight">Wrapsody</span>,
            <span className="highlight">Wrapsody eCo</span>, and
            <span className="highlight">Mindsat</span>
            <br />- Unified the frontend stack
            <span className="highlight">(React, TypeScript, Redux)</span> across
            all products, replacing legacy Angular and JS codebases
            <br />- Built an internal design system
            <span className="highlight">(FDS)</span> and
            <span className="highlight">Storybook</span> environment to ensure
            UI consistency and reusability
            <br />- Participated in
            <span className="highlight">UI/UX revamps</span> for all three
            platforms; led the entire frontend redesign of
            <span className="highlight">Wrapsody eCo</span> independently
            <br />- Implemented full
            <span className="highlight">RTL (Right-to-Left)</span> layout and
            <span className="highlight">Arabic localization</span> for Wrapsody
            eCo
            <br />- Collaborated with designers via
            <span className="highlight">Figma</span>, translation team via
            <span className="highlight">Weblate</span>, and backend via
            <span className="highlight">Git issues</span>
            <br />- Mentored new developers through
            <span className="highlight">code reviews</span> focused on
            readability and
            <span className="highlight">component discipline</span>
            <br />- Led an
            <span className="highlight">intern</span> in building a Redux-based
            <span className="highlight">demo page</span> for Wrapsody; project
            presented in the
            <span className="highlight">FIX program</span>
            <br />- Recognized with the
            <span className="highlight">Outstanding Employee Award</span> in
            2023
          </span>
        </div>
      </div>
      <div className="experience-item" style={{ marginTop: 90 }}>
        <div className="experience-item--left">
          <span className="jobTitle">Fullstack Software Engineer</span>
          <span className="status">Internship</span>
          <span>
            <span className="desc">Jun 2020</span>
            <span className="descdot">·</span>
            <span className="desc">Aug 2020</span>
          </span>
          <span className="desc">Seoul - South Korea</span>
        </div>
        <div className="experience-item--right">
          <span className="company">Fasoo</span>
          <span className="companydesc">
            {`- Developed a CAD file preview service for Wrapsody, a document virtualization platform\n- Tech Stack: Java, Spring, REST API, JavaScript  \n- Implemented a REST API endpoint to receive preview requests from AutoCAD\n- Parsed CAD file data and displayed the preview result on the web page\n- Received top intern evaluation for outstanding performance during the internship`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
