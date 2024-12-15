import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Redux Provider
import { store } from "./redux/store"; // Redux store
import { AuthProvider } from "./contexts/AuthContext"; // Firebase Auth context provider
import App from "./App";
import './index.css'; // Ensure this points to the correct path


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>  {/* Wrap App with Redux provider */}
    <AuthProvider>           {/* Wrap App with Auth provider */}
      <App />
    </AuthProvider>
  </Provider>
);
