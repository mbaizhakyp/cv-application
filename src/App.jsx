import { useState } from "react";
import "./App.css";
import General from "./components/general";
import Education from "./components/education";
import Experience from "./components/experience";
import Resume from "./components/resume";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  function handleGeneralChange(e) {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  return (
    <>
      <General onChange={handleGeneralChange} />
      <Education />
      <Experience />
      <Resume generalInfo={generalInfo} />
    </>
  );
}

export default App;
