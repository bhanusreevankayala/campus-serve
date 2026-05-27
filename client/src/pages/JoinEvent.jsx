import { useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

function JoinEvent() {

  const { id } = useParams();

  const navigate = useNavigate();

  // GET LOGGED-IN USER
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [formData, setFormData] =
    useState({
      studentName: user?.name || "",
      email: user?.email || "",
      rollnumber: user?.rollnumber || "",
      year: "",
      branch: user?.department || "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/participations/join",
        {
          ...formData,
          eventId: id,
        }
      );

      alert(
        "Successfully Joined Event"
      );

      navigate("/events");
window.location.reload();

    } catch (error) {

  console.log(error);

  alert(
    error.response?.data?.message ||
    "Something went wrong"
  );

}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-violet-100 flex items-center justify-center p-6">

      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-[35px] overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-5 md:p-10 flex flex-col justify-center">

          <h1 className="text-5xl font-black leading-tight">
            Join
            <br />
            Event
          </h1>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Participate in meaningful community
            service initiatives and contribute to
            real social impact.
          </p>

          <div className="mt-10 space-y-4 text-white/90">

            <div>
              ✅ Certificate Eligible
            </div>

            <div>
              ✅ Participation Tracking
            </div>

            <div>
              ✅ Real Community Impact
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <form
          onSubmit={handleSubmit}
          className="p-5 md:p-10 bg-white"
        >

          <h2 className="text-3xl font-black text-gray-800 mb-8">
            Student Details
          </h2>

          <div className="space-y-5">

            {/* NAME */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              />

            </div>

            {/* ROLL NUMBER */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Roll Number
              </label>

              <input
                type="text"
                name="rollnumber"
                value={formData.rollnumber}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              />

            </div>

            {/* YEAR */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Year
              </label>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >

                <option value="">
                  Select Year
                </option>

                <option value="1">
                  1st Year
                </option>

                <option value="2">
                  2nd Year
                </option>

                <option value="3">
                  3rd Year
                </option>

                <option value="4">
                  4th Year
                </option>

              </select>

            </div>

            {/* BRANCH */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Branch
              </label>

              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >

                <option value="">
                  Select Branch
                </option>

                <option value="CSE">
                  CSE
                </option>
                <option value="CSE">
                  CSE-AI
                </option>
                <option value="CSE">
                  CSE-CS
                </option>
                <option value="CSE">
                  CSE-DS
                </option>
                <option value="CSE">
                  IT
                </option>
                <option value="CSE">
                  ECM
                </option>

                <option value="ECE">
                  ECE
                </option>

                <option value="EEE">
                  EEE
                </option>

                <option value="MECH">
                  MECH
                </option>

                <option value="CIVIL">
                  CIVIL
                </option>

              </select>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition"
            >
              Join Event
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default JoinEvent;