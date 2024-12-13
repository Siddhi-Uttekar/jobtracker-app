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
    followUp: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateSaved = new Date().toISOString().split('T')[0]; // Format as yyyy-mm-dd
    dispatch(addJob({ ...formData, dateSaved, id: Date.now() }));
    toggleForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-700">Job Position</label>
        <input
          name="position"
          type="text"
          id="position"
          placeholder="Job Position"
          value={formData.position}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
        <input
          name="company"
          type="text"
          id="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input
          name="location"
          type="text"
          id="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
        <input
          name="salary"
          type="number"
          id="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <input
          name="status"
          type="text"
          id="status"
          placeholder="Status (e.g., Applied/Interview)"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="dateApplied" className="block text-sm font-medium text-gray-700">Date Applied</label>
        <input
          name="dateApplied"
          type="date"
          id="dateApplied"
          value={formData.dateApplied}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="followUp" className="block text-sm font-medium text-gray-700">Follow Up</label>
        <input
          name="followUp"
          type="date"
          id="followUp"
          value={formData.followUp}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;

