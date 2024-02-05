import React, { useState } from "react";
import useUserDetails from "../utils/useUserDetails";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const { userDets, setUserDets } = useUserDetails();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDets((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetailsKey = "userDetailsSwiggy";
    if (isLoginPage) {
      const storedDetails = JSON.parse(
        localStorage.getItem(userDetailsKey) || "{}"
      );
      if (
        storedDetails.email === userDets.email &&
        storedDetails.password === userDets.password
      ) {
        alert("Login successful");
        setIsLoggedIn(true);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } else {
      localStorage.setItem(userDetailsKey, JSON.stringify(userDets));
      alert("Registration successful. Please log in.");
      setIsLoginPage(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl fw-bolder">
        {isLoginPage ? "Login" : "Register"}
      </h1>
      <div className="flex justify-center items-center my-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 items-center"
        >
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={userDets.email}
            onChange={handleChange}
            className="w-[250px] h-[40px] rounded-lg px-3"
          />
          <div className="relative w-[250px]">
            <input
              name="password"
              type={passwordShown ? "text" : "password"}
              placeholder="Enter password"
              value={userDets.password}
              onChange={handleChange}
              className="w-full h-[40px] rounded-lg px-3"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {passwordShown ? "🔒" : "👁️"}
            </button>
          </div>
          <button
            type="submit"
            className="bg-black text-white p-2 w-[250px] rounded-lg"
          >
            {isLoginPage ? "Login" : "Register"}
          </button>
          <button
            type="button"
            onClick={() => setIsLoginPage(!isLoginPage)}
            className="bg-black text-white p-2 w-[250px] rounded-lg mt-2"
          >
            {isLoginPage ? "Not a User? Sign Up" : "Already a User? Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
