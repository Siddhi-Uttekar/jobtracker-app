import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeJob } from '../redux/jobslice';

const JobList = () => {
  const jobs = useSelector((state) => state.jobs.jobList);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-400 text-left bg-white rounded-lg shadow-md">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Position</th>
            <th className="px-4 py-2 border border-gray-300">Company</th>
            <th className="px-4 py-2 border border-gray-300">Location</th>
            <th className="px-4 py-2 border border-gray-300">Salary</th>
            <th className="px-4 py-2 border border-gray-300">Status</th>
            <th className="px-4 py-2 border border-gray-300">Date Applied</th>
            <th className="px-4 py-2 border border-gray-300">Date Saved</th>
            <th className="px-4 py-2 border border-gray-300">Follow Up</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{job.position}</td>
                <td className="px-4 py-2 border border-gray-300">{job.company}</td>
                <td className="px-4 py-2 border border-gray-300">{job.location}</td>
                <td className="px-4 py-2 border border-gray-300">{job.salary}</td>
                <td className="px-4 py-2 border border-gray-300">{job.status}</td>
                <td className="px-4 py-2 border border-gray-300">{job.dateApplied}</td>
                <td className="px-4 py-2 border border-gray-300">{job.dateSaved}</td>
                <td className="px-4 py-2 border border-gray-300">{job.followUp}</td>
                <td className="px-4 py-2 border border-gray-300">
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
                colSpan="9"
                className="px-4 py-2 border border-gray-300 text-center text-gray-500"
              >
                No jobs added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
