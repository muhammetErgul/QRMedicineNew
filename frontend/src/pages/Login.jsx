import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  register,
  signin,
  onAuthStateChangedListener,
} from "../authApi/authService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((currentUser) => {
      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser?.email));

      if (currentUser) {
        if (currentUser?.email === "foodz@hotmail.com") {
          navigate("/orders");
        } else {
          navigate("/order");
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleRegister = async () => {
    try {
      setError("");
      await register(email, password);
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message);
    }
  };

  const handleSignin = async () => {
    try {
      setError("");
      await signin(email, password);
    } catch (error) {
      console.error("Sign in error:", error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-10 bg-[url('/atlaslogin.jpg')] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>{" "}
      {/* Koyulaştırma Katmanı */}
      <div className="relative z-10 transparent text-white rounded-lg shadow-2xl  transform transition-all duration-500 hover:shadow-navy-500/50 flex flex-col lg:flex-row max-w-4xl mx-auto overflow-hidden">
        <div className="w-screen md:w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-6">
            <img src="/cv-logo.webp" alt="Logo" className="w-24 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Atlas University</h2>
            <p className="text-navy-300 mb-4">Please login to your account</p>
          </div>
          {error && (
            <div className="bg-red-500 text-white p-2 rounded mb-4">
              {error}
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-gray-700 w-full p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-gray-700 w-full p-2 rounded"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <button
              onClick={handleSignin}
              className="w-full text-white font-bold py-2 px-4 mb-4 transition-all duration-300 transform hover:scale-105"
            >
              Log In
            </button>
            <button
              onClick={handleRegister}
              className="w-full text-white font-bold py-2 px-4 mb-4 transition-all duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-r from-navy-500 to-navy-700 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none p-8 flex-col justify-center text-white transition-all duration-300 transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-4">
            We are more than just a company
          </h2>
          <p className="opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {user && <p className="mt-4 text-green-400">Welcome, {user.email}</p>}
    </div>
  );
};

export default LoginPage;
