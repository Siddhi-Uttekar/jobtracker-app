import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidata } from "../utils/validate"; // Custom validation function
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = async () => {
    // Validate form data
    const message = checkValidata(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("Sign Up successful:", userCredential.user);
        setErrorMessage("Account created successfully! You can now Sign In.");
        setIsSignInForm(true); // Switch to Sign In form after Sign Up
      } catch (error) {
        const errorCode = error.code;
        const errorMsg = error.message;
        setErrorMessage(`${errorCode} - ${errorMsg}`);
        console.error("Error during sign up:", errorCode, errorMsg);
      }
    } else {
      // Sign In logic
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );


        console.log("Sign In successful:", userCredential.user);
        setErrorMessage("Sign In successful! Redirecting...");
        navigate("/jobs");
        // Redirect to your desired page after sign-in
      } catch (error) {
        const errorCode = error.code;
        const errorMsg = error.message;
        setErrorMessage(`${errorCode} - ${errorMsg}`);
        console.error("Error during sign in:", errorCode, errorMsg);
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear error message when toggling forms
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-cover  bg-no-repeat  "
    style={{ backgroundImage: "url('/jobTracker-.png')" }}>

      <div className="absolute inset-0"></div>
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 p-9 bg-black bg-opacity-75 rounded justify-start align-center"
        >
          <h1 className="text-slate-50 text-center font-bold text-3xl m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Full Name"
              className="p-2 m-2 w-full bg-slate-800 rounded text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Enter email"
            className="p-2 m-2 w-full bg-slate-800 rounded text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full bg-slate-800 rounded text-white"
          />
          <p className="text-red-600 px-3 font-bold text-m">{errorMessage}</p>
          <button
            className="p-3 m-3 w-full bg-green-700 text-white text-center rounded"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-2 px-3 text-slate-50 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New here? Sign Up Now"
              : "Already registered? Sign In"}
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
