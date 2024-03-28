// ControlledForm.js
import { useState } from "react";

const ControlledForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // State to hold form errors
  const [formErrors, setFormErrors] = useState({});

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.age.trim()) {
      errors.age = "Age is required";
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      errors.age = "Please enter a valid age";
    }

    // If there are errors, set them in state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If no errors, you can proceed with form submission
    console.log(alert, formData);
    alert("Form submitted successfully");
    // Reset form data
    setFormData({
      name: "",
      email: "",
      age: "",
    });
    // Clear form errors
    setFormErrors({});
  };

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          {formErrors.age && <span className="error">{formErrors.age}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
