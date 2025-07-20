import "../styles/form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function General({ onChange, isOpen, toggleOpen }) {
  return (
    <form className="general-form">
      <div
        className="general-heading"
        onClick={toggleOpen}
        style={{ cursor: "pointer" }}
      >
        <h1>Personal Details</h1>
        <p className="dropdown" role="button" tabIndex={0}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </p>
      </div>
      {isOpen && (
        <>
          <label>
            Full Name
            <input
              name="fullName"
              onChange={onChange}
              type="text"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              onChange={onChange}
              type="email"
              placeholder="Enter your email"
            />
          </label>
          <label>
            Phone Number
            <input
              name="phoneNumber"
              onChange={onChange}
              type="tel"
              placeholder="Enter your phone number"
            />
          </label>
          <label>
            Address
            <input
              name="address"
              onChange={onChange}
              type="text"
              placeholder="Enter your address"
            />
          </label>
        </>
      )}
    </form>
  );
}

export default General;
