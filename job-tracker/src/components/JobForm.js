import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../redux/jobslice';

const JobForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    location: '',
    salary: '',
    status: '',
    dateApplied: '',
    followUp: '',  // User selects follow-up date
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the current date as Date Saved
    const dateSaved = new Date().toISOString().split('T')[0];  // Format as yyyy-mm-dd
    dispatch(addJob({ ...formData, dateSaved, id: Date.now() }));
    toggleForm(false); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input name="position" type="text" placeholder="Job Position" onChange={handleChange} value={formData.position} required />
      <input name="company" type="text" placeholder="Company" onChange={handleChange} value={formData.company} required />
      <input name="location" type="text" placeholder="Location" onChange={handleChange} value={formData.location} required />
      <input name="salary" type="number" placeholder="Salary" onChange={handleChange} value={formData.salary} />
      <input name="status" type="text" placeholder="Status (e.g., Applied/Interview)" onChange={handleChange} value={formData.status} />
      <input name="dateApplied" type="date" onChange={handleChange} value={formData.dateApplied} />
      <input name="followUp" type="date" onChange={handleChange} value={formData.followUp} />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
