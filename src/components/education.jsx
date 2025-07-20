import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Education({ onChange, isOpen, toggleOpen }) {
  return (
    <form className="education-form">
      <div
        className="education-heading"
        onClick={toggleOpen}
        style={{ cursor: "pointer" }}
      >
        <h1>Education</h1>
        <p className="dropdown" role="button" tabIndex={0}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </p>
      </div>
      {isOpen && (
        <>
          <label>
            School
            <input
              name="school"
              onChange={onChange}
              type="text"
              placeholder="Enter your school name"
            />
          </label>
          <label>
            Degree
            <input
              name="degree"
              onChange={onChange}
              type="text"
              placeholder="Enter your degree"
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
        </>
      )}
    </form>
  );
}

export default Education;
