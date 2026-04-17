import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/serach");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div
  className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Dark overlay for better glass */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Glass Card */}
  <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl w-[400px] text-white">
    
    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

    <input
      type="email"
      placeholder="Email"
      className="w-full mb-4 p-3 bg-transparent border-b border-white outline-none placeholder-white caret-red focus:border-white/80"
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full mb-6 p-3 bg-transparent border-b border-white outline-none placeholder-white caret-red focus:border-white/180"
    />

    <button className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
      Log in
    </button>

    <p className="text-sm text-center mt-4">
      Don't have an account?{" "}
      <span className="underline cursor-pointer">Register</span>
    </p>
  </div>
</div>
  );
};

export default Login;