import "./AboutMe.css";
import { Button } from "react-bootstrap";

const AboutMe = () => {
  const handleClick = () => {
      const resumeUrl = "/assets/pdf/ahmed-mohamed-abd-elKader.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="about-me container" id="about">
      <div className="row">
        <h1 className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          About me
        </h1>
        <p className="col-12 col-md-8 text-justify">
          Motivated junior developer with over one year of experience in
          full-stack web development using MEARN technologies. Skilled in
          JavaScript, React.js, Angular, MongoDB, Node.js, and Express.js.
          Proficient in other technologies such as Python, C, and PWA. Strong
          problem-solving skills and experience working in agile environments.
        </p>
        <Button
          onClick={handleClick}
          variant="dark"
          className="transparent-button">
          Download Resume
        </Button>
      </div>
    </div>
  );
};
export default AboutMe;
