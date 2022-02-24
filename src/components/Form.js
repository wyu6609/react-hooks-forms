import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      firstName: firstName,
      latName: lastName,
    };
    const dataArray = [...submittedData, formData];
    setFirstName("");
    setLastName("");
  }
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName}
        {data.lastName}
      </div>
    );
  });
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </form>
  );
}

export default Form;
