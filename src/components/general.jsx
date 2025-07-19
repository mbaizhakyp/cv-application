function General({ onChange }) {
  return (
    <form>
      <h1>Personal Details</h1>
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
    </form>
  );
}

export default General;
