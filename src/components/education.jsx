function Education({ onChange }) {
  return (
    <form>
      <h1>Education</h1>
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
          type="date"
          placeholder="Enter start date"
        />
      </label>
      <label>
        End Date
        <input
          name="endDate"
          onChange={onChange}
          type="date"
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
    </form>
  );
}

export default Education;
