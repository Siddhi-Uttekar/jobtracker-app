// import React, { useState , useEffect} from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import JobList from "./components/JobList";
// import JobForm from "./components/JobForm"; // Import JobForm
// import PrivateRoute from "./components/PrivateRoute";
// import Header from "./components/Header"; // Import Header
// import { useAuth } from "./contexts/AuthContext"; // Import useAuth hook
// import './index.css'; // Ensure this points to the correct path
// import { auth } from "./utils/firebase"; // Firebase authentication setup



// const App = () => {

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Listen to authentication state changes
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe(); // Cleanup on unmount
//   }, []);
//   const { currentUser } = useAuth(); // Get currentUser from context
//   const [showForm, setShowForm] = useState(false); // Toggle for JobForm visibility



//   return (
//     <Router>
//       { user &&
//       <Header user={currentUser} />
//       }
//       <div className="p-10">
//         {currentUser && ( // Only show the button to add a job if the user is logged in
//           <button
//             className="bg-green-700 p-4 rounded-lg text-white font-bold ml-4 px-5"
//             onClick={() => setShowForm(!showForm)}
//           >
//             {showForm ? "Close Form" : "Add a New Job"}
//           </button>
//         )}
//         {showForm && <JobForm toggleForm={setShowForm} />} {/* Job Form toggling */}

//         <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login />} />

//           <Route
//             path="/jobs"
//             element={ user &&
//               <PrivateRoute user={currentUser}> {/* Protect Job List with PrivateRoute */}
//                 <JobList />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import { useAuth } from "./contexts/AuthContext";
import './index.css';

const App = () => {
  const { currentUser } = useAuth(); // Get currentUser from AuthContext
  const [showForm, setShowForm] = useState(false); // Toggle for JobForm visibility

  return (
    <Router>
      {currentUser && <Header user={currentUser} />} {/* Show Header only if user is logged in */}
      <div className="p-10">
        {currentUser && ( // Only show the button to add a job if the user is logged in
          <button
            className="bg-green-700 p-4 rounded-lg text-white font-bold ml-4 px-5"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Add a New Job"}
          </button>
        )}
        {showForm && <JobForm toggleForm={setShowForm} />} {/* Job Form toggling */}

        <Routes>
          {/* Redirect root to /login */}
          <Route path="/" element={<Navigate to={currentUser ? "/jobs" : "/login"} />} />

          <Route path="/login" element={currentUser ? <Navigate to="/jobs" /> : <Login />} />

          <Route
            path="/jobs"
            element={
              currentUser ? (
                <PrivateRoute user={currentUser}>
                  <JobList />
                </PrivateRoute>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
