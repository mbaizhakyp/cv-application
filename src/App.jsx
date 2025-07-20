import { useState } from "react";
import "./App.css";
import General from "./components/general";
import Education from "./components/education";
import Experience from "./components/experience";
import Resume from "./components/resume";
import { useEffect } from "react";

function App() {
  const [openSection, setOpenSection] = useState("null");
  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };
  useEffect(() => {
    document.title = "Resume Builder";
  }, []);
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "Margulan Baizhakyp",
    email: "mbaizhakyp@gmail.com",
    phoneNumber: "205-887-4683",
    address: "Tuscaloosa, AL",
  });
  function handleGeneralChange(e) {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  const [educationInfo, setEducationInfo] = useState({
    school: "University of Alabama",
    degree: "Computer Science, BS",
    startDate: "2023-08",
    endDate: "2027-05",
    location: "Tuscaloosa, AL",
  });
  function handleEducationChange(e) {
    const { name, value } = e.target;
    setEducationInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "University of Alabama",
    positionTitle: "Resident Advisor",
    startDate: "2024-01",
    endDate: "2024-12",
    location: "Tuscaloosa, AL",
    description:
      "Assisted students with daily needs, organized events, and maintained a safe living environment.",
  });
  function handleExperienceInfo(e) {
    const { name, value } = e.target;
    setExperienceInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }
  return (
    <div className="app">
      <div className="form">
        <General
          onChange={handleGeneralChange}
          isOpen={openSection === "general"}
          toggleOpen={() => toggleSection("general")}
        />
        <Education
          onChange={handleEducationChange}
          isOpen={openSection === "education"}
          toggleOpen={() => toggleSection("education")}
        />
        <Experience
          onChange={handleExperienceInfo}
          isOpen={openSection === "experience"}
          toggleOpen={() => toggleSection("experience")}
        />
      </div>
      <div className="resume">
        <Resume
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App;
