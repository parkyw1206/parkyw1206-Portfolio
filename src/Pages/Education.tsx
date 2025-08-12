import "./index.scss";

function Education() {
  return (
    <div className="education">
      <div className="education-item">
        <div className="education-item--left">
          <span className="companyName">Georgia Institute of Technology</span>
          <span className="major">Computer Science</span>
          <span>
            <span className="desc">Jan 2025</span>
            <span className="descdot">·</span>
            <span className="desc">Present</span>
          </span>
          <span className="desc">Atlanta, GA - United States</span>
        </div>
        <div className="education-item--right">
          <span className="special">
            Master's degree (Specialization in Interactive Intelligence)
          </span>
          <span className="lectureList">{`- CS 7637: Knowledge-Based AI\n- CS 6262: Network Security\n- CS 6035: Intro To Info Security`}</span>
        </div>
      </div>
      <div className="education-item">
        <div className="education-item--left">
          <span className="companyName">
            University of California, San Diego
          </span>
          <span className="major">Math-Computer Science</span>
          <span>
            <span className="desc">Sep 2017</span>
            <span className="descdot">·</span>
            <span className="desc">Aug 2020</span>
          </span>
          <span className="desc">San Deigo, CA - United States</span>
        </div>
        <div className="education-item--right">
          <span className="special">Bachelor's degree</span>
          <span className="lectureList">
            {`- CSE 101 : Design & Analysis and Algorithm\n- CSE 151A: Intro to Machine Learning\n- CSE 100: Advanced Data Structures`}
          </span>
          <span className="special" style={{ marginTop: "20px" }}>
            Extracurricular Activities
          </span>
          <span className="lectureList">{`- KSEA-YG San Diego Chapter, Career Team Member (2018–2020):`}</span>
          <span className="lectureListDesc">
            {`Supported professional development events for STEM students, shared career resources, and coordinated mentoring programs`}
          </span>
        </div>
      </div>
      <div className="education-item">
        <div className="education-item--left">
          <span className="companyName">De Anza College</span>
          <span className="major">Computer Science</span>
          <span>
            <span className="desc">Sep 2014</span>
            <span className="descdot">·</span>
            <span className="desc">Jun 2017</span>
          </span>
          <span className="desc">San Jose, CA - United States</span>
        </div>
        <div className="education-item--right">
          <span className="special">
            Transferred – Studied Computer Science
          </span>
          <span className="lectureList">
            {`- CIS 22C: Data Abstract & structures\n- CIS 22B: Intermediate Programming Methodologies in C++\n- CIS 22A: Beginning Programming Methodologies in C++`}
          </span>
          <span className="special" style={{ marginTop: "20px" }}>
            Extracurricular Activities
          </span>
          <span className="lectureList">{`- Peer Tutor for CIS 22A (Intro to Programming), Spring 2017`}</span>
          <span className="lectureListDesc">
            {`Provided one-on-one and group tutoring to students learning C++ fundamentals`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Education;
