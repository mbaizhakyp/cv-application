function Education() {
  return (
    <form>
      <h1>Education</h1>
      <label>
        School
        <input type="text" placeholder="Enter your school name" />
      </label>
      <label>
        Degree
        <input type="text" placeholder="Enter your degree" />
      </label>
      <label>
        Start Date
        <input type="number" placeholder="Enter start date" />
      </label>
      <label>
        End Date
        <input type="number" placeholder="Enter end date" />
      </label>
      <label>
        Location
        <input type="text" placeholder="Enter school location" />
      </label>
    </form>
  );
}

export default Education;
