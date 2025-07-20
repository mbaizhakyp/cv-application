import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/resume.css";

function Resume({ generalInfo, educationInfo, experienceInfo }) {
  function formatDate(dateStr) {
    const [year, month] = dateStr.split("-");
    return `${month}/${year}`;
  }
  const educationStartDate = formatDate(educationInfo.startDate);
  const educationEndDate = formatDate(educationInfo.endDate);
  const experienceStartDate = formatDate(experienceInfo.startDate);
  const experienceEndDate = formatDate(experienceInfo.endDate);
  return (
    <div className="a4">
      <div className="resume-header">
        <div className="name">
          <h2>{generalInfo.fullName}</h2>
        </div>
        <div className="contact">
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> {generalInfo.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> {generalInfo.phoneNumber}
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> {generalInfo.address}
          </p>
        </div>
      </div>
      <div className="resume-education">
        <div className="education-title">
          <h2>Education</h2>
        </div>
        <div className="education-details">
          <div className="left">
            <p>
              {educationStartDate} - {educationEndDate}
            </p>
            <p>{educationInfo.location}</p>
          </div>
          <div className="right">
            <p>
              <strong>{educationInfo.school}</strong>
            </p>
            <p>{educationInfo.degree}</p>
          </div>
        </div>
      </div>
      <div className="resume-experience">
        <div className="experience-title">
          <h2>Experience</h2>
        </div>
        <div className="experience-details">
          <div className="left">
            <p>
              {experienceStartDate} - {experienceEndDate}
            </p>
            <p>{experienceInfo.location}</p>
          </div>
          <div className="right">
            <p>
              <strong>{experienceInfo.companyName}</strong>
            </p>
            <p>{experienceInfo.positionTitle}</p>
            <p>{experienceInfo.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
