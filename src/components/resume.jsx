function Resume({ generalInfo, educationInfo }) {
  return (
    <>
      <div>
        <h2>{generalInfo.fullName}</h2>
        <h2>{generalInfo.email}</h2>
        <h2>{generalInfo.phoneNumber}</h2>
        <h2>{generalInfo.address}</h2>
      </div>
      <div>
        <h2>Education</h2>
        <p>{educationInfo.school}</p>
        <p>{educationInfo.degree}</p>
        <p>{educationInfo.startDate}</p>
        <p>{educationInfo.endDate}</p>
        <p>{educationInfo.location}</p>
      </div>
    </>
  );
}

export default Resume;
