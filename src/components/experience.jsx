function Experience() {
  return (
    <form>
      <h2>Experience</h2>
      <label>
        Company Name
        <input type="text" placeholder="Enter company name" />
      </label>
      <label>
        Position Title
        <input type="text" placeholder="Enter position title" />
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
      <label>
        Description
        <textarea placeholder="Describe your responsibilities and achievements"></textarea>
      </label>
    </form>
  );
}

export default Experience;
