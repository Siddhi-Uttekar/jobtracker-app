import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Job Tracker</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Job'}
      </button>
      {showForm && <JobForm toggleForm={setShowForm} />}
      <JobList />
    </div>
  );
};

export default App;
