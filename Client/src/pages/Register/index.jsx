import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Register/index.css'



function RegistrationForm() {
  const [formValues, setFormValues] = React.useState([
    {
      label: "Name",
      type: "text",
      value: "",
    },
    {
      label: "DOB",
      type: "date",
      value: "",
    },
    {
      label: "ID Number",
      type: "number",
      value: "",
    },
    {
      label: "Address",
      type: "text",
      value: "",
    },
    {
      label: "Phone Number",
      type: "tel",
      value: "",
    },
    {
      label: "Next of Kin",
      type: "text",
      value: "",
    },
  ]);

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('registrationFormData', JSON.stringify(formValues));
  };

  return (
    <div className="App">
      <button className='home' onClick={() => navigate('/home')}>Home</button>

      <h1>Welcome to Kens Gadgets!</h1>

      <form onSubmit={handleSubmit}>
        {formValues.map((objValue, index) => (
          <div key={index}>
            <label htmlFor={objValue.label}>{objValue.label}</label>
            <input
              type={objValue.type}
              id={objValue.label}
              value={objValue.value}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        ))}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;