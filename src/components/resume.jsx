function Resume({ generalInfo }) {
  return (
    <div>
      <h1>Resume</h1>
      <h2>{generalInfo.fullName}</h2>
      <h2>{generalInfo.email}</h2>
      <h2>{generalInfo.phoneNumber}</h2>
      <h2>{generalInfo.address}</h2>
    </div>
  );
}

export default Resume;
