
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeJob, editJob } from '../redux/jobslice';

const JobList = () => {
  const jobs = useSelector((state) => state.jobs.jobList);
  const dispatch = useDispatch();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [formData, setFormData] = useState({
    position: '',
    description:'',
    company: '',
    location: '',
    salary: '',
    status: '',
    dateApplied: '',
    dateSaved: '',
    followUp: '',
  });

  // Open the modal and populate form with job data
  const handleEditClick = (job) => {
    setCurrentJob(job.id);
    setFormData(job); // Populate form with the selected job's data
    setIsEditModalOpen(true);
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save changes and close the modal
  const handleSaveChanges = () => {
    dispatch(editJob({ id: currentJob, ...formData }));
    setIsEditModalOpen(false);
    setCurrentJob(null);
  };

  const [showDescription, setShowDescription] = useState({});
const toggleDescription = (id) => {
  setShowDescription(prevState => ({
    ...prevState,
    [id]: !prevState[id],
  }));
};


  return (
    <div className="p-4">
      <table className=" relative min-w-full border border-gray-400 text-left bg-white rounded-lg shadow-md">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Position</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Company</th>
            <th className="px-4 py-2 border border-gray-300">Location</th>
            <th className="px-4 py-2 border border-gray-300">Salary</th>
            <th className="px-4 py-2 border border-gray-300">Status</th>
            <th className="px-4 py-2 border border-gray-300">Date Applied</th>
            <th className="px-4 py-2 border border-gray-300">Follow-Up Date</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{job.position}</td>
                <td className="px-4 py-2 border border-gray-300">
  {showDescription[job.id] ? job.description : `${job.description.slice(0, 50)}...`}
  <button
    onClick={() => toggleDescription(job.id)}
    className="ml-2 text-blue-500"
  >
    {showDescription[job.id] ? 'Hide Details' : 'View More'}
  </button>
</td>

                <td className="px-4 py-2 border border-gray-300">{job.company}</td>
                <td className="px-4 py-2 border border-gray-300">{job.location}</td>
                <td className="px-4 py-2 border border-gray-300">{job.salary}</td>
                <td className="px-4 py-2 border border-gray-300">{job.status}</td>
                <td className="px-4 py-2 border border-gray-300">{job.dateApplied}</td>
                <td className="px-4 py-2 border border-gray-300">{job.followUp}</td>
                <td className="px-4 py-2 border border-gray-300 space-x-2">
                  <button
                    onClick={() => handleEditClick(job)}
                    className="px-2 py-1 m-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeJob(job.id))}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="px-4 py-2 border border-gray-300 text-center text-gray-500"
              >
                No jobs added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-md w-1/3">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="block text-gray-700">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Job Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Salary</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Status</label>
                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Date Applied</label>
                <input
                  type="date"
                  name="dateApplied"
                  value={formData.dateApplied}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Follow-Up Date</label>
                <input
                  type="date"
                  name="followUp"
                  value={formData.followUp}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
