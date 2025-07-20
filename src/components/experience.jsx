import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function Experience({ onChange, isOpen, toggleOpen }) {
  return (
    <form className="experience-form">
      <div
        className="experience-heading"
        onClick={toggleOpen}
        style={{ cursor: "pointer" }}
      >
        <h1>Experience</h1>
        <p className="dropdown" role="button" tabIndex={0}>
          {" "}
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </p>
      </div>
      {isOpen && (
        <>
          <label>
            Company Name
            <input
              name="companyName"
              onChange={onChange}
              type="text"
              placeholder="Enter company name"
            />
          </label>
          <label>
            Position Title
            <input
              name="positionTitle"
              onChange={onChange}
              type="text"
              placeholder="Enter position title"
            />
          </label>
          <label>
            Start Date
            <input
              name="startDate"
              onChange={onChange}
              type="month"
              placeholder="Enter start date"
            />
          </label>
          <label>
            End Date
            <input
              name="endDate"
              onChange={onChange}
              type="month"
              placeholder="Enter end date"
            />
          </label>
          <label>
            Location
            <input
              name="location"
              onChange={onChange}
              type="text"
              placeholder="Enter school location"
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              onChange={onChange}
              placeholder="Describe your responsibilities and achievements"
            ></textarea>
          </label>
        </>
      )}
    </form>
  );
}

export default Experience;
