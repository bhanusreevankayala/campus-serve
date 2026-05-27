import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    rollnumber:" ",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", formData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc]">

      {/* LEFT SECTION */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 text-white relative overflow-hidden">

        {/* Decorative Blobs */}
        <div className="absolute w-96 h-96 bg-pink-400/20 rounded-full top-[-50px] left-[-50px] blur-3xl"></div>

        <div className="absolute w-80 h-80 bg-cyan-300/10 rounded-full bottom-[-50px] right-[-50px] blur-3xl"></div>

        <div className="relative z-10 flex flex-col justify-center px-20">

          <h1 className="text-7xl font-black leading-tight">
            Join
            <br />
            Campus
            <br />
            Serve
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-indigo-100 max-w-lg">
            Empowering students to participate
            in meaningful community service,
            volunteering, and social impact
            initiatives.
          </p>

          <div className="mt-12 flex gap-4">

            <div className="bg-white/10 backdrop-blur-lg px-6 py-3 md:py-4 rounded-2xl border border-white/20">
              <h3 className="text-3xl font-bold">
                100+
              </h3>

              <p className="text-indigo-100">
                Events Conducted
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg px-6 py-3 md:py-4rounded-2xl border border-white/20">
              <h3 className="text-3xl font-bold">
                5K+
              </h3>

              <p className="text-indigo-100">
                Student Volunteers
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">

        <div className="w-full max-w-lg">

          <div className="mb-10">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 text-lg mt-3">
              Start your volunteering journey today
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-3xl p-5 sm:p-8 border border-gray-100"
          >

            {/* Name */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                onChange={handleChange}
              />
            </div>

            {/* Department */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-semibold">
                Department
              </label>

              <input
                type="text"
                name="department"
                placeholder="CSE / ECE / IT ..."
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="mb-8">
              <label className="block mb-2 text-gray-700 font-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                onChange={handleChange}
              />
            </div>
            <div className="mb-8">
              <label className="block mb-2 text-gray-700 font-semibold">
                Roll Number
              </label>

              <input
                type="text"
                name="rollnumber"
                placeholder="enter roll number"
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
                onChange={handleChange}
              />
            </div>


            {/* Button */}
            <button
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 md:py-4 rounded-2xltext-lg font-bold shadow-xl hover:scale-[1.02] transition duration-300"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-bold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;