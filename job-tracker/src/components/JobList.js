import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeJob } from '../redux/jobslice';

const JobList = () => {
  const jobs = useSelector((state) => state.jobs.jobList);
  const dispatch = useDispatch();

  return (
    <div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Date Applied</th>
            <th>Date Saved</th>
            <th>Follow Up</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.position}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.salary}</td>
                <td>{job.status}</td>
                <td>{job.dateApplied}</td>
                <td>{job.dateSaved}</td>  {/* Date Saved */}
                <td>{job.followUp}</td>  {/* Follow Up */}
                <td>
                  <button onClick={() => dispatch(removeJob(job.id))}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center' }}>No jobs added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
