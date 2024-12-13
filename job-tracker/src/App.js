import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='p-10'>
      <h1>Job Tracker</h1>
      <button className='bg-green-700 p-4 rounded-lg text-white font-bold ml-4 px-5'
      onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add a New Job'}
      </button>
      {showForm && <JobForm toggleForm={setShowForm} />}
      <JobList />
    </div>
  );
};

export default App;
