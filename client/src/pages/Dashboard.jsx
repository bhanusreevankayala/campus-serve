import {
  FaCalendarAlt,
  FaAward,
  FaUserFriends,
} from "react-icons/fa";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [participations, setParticipations] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchParticipations();
  }, []);

  const fetchParticipations = async () => {

  try {

    const res = await API.get(
  `/participations/${user._id}?email=${user.email}`
);

    // FILTER CURRENT USER
    const userParticipations =
      res.data.filter(
        (item) =>
          item.email === user.email
      );

    setParticipations(
      userParticipations
    );

    setLoading(false);

  } catch (error) {

    console.log(error);

    setLoading(false);

  }
};

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen md:flex bg-[#f5f7fb]">

      {/* SIDEBAR */}
      <div className="w-full md:w-72 bg-gradient-to-b from-indigo-700 to-violet-700 text-white p-8 flex flex-col">

        <h1 className="text-4xl font-black mb-14">
          CampusServe
        </h1>

        <nav className="space-y-5 flex-1">

          <Link
            to="/dashboard"
            className="block bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl font-semibold"
          >
            Dashboard
          </Link>

          <Link
            to="/events"
            className="block bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl font-semibold"
          >
            Events
          </Link>

          <Link
            to="/profile"
            className="block bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl font-semibold"
          >
            Profile
          </Link>

          {user?.role === "admin" && (

  <>
  
    <Link
      to="/create-event"
      className="block bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl font-semibold"
    >
      Create Event
    </Link>

    <Link
      to="/event-qr"
      className="block bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl font-semibold"
    >
      Event QR
    </Link>

  </>

)}
<Link
  to="/analytics"
  className="block bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl font-semibold"
>
  Analytics
</Link>
<Link
  to="/participants"
  className="block bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl font-semibold"
>
  Participants
</Link>
<Link
  to="/scan-qr"
  className="block bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl font-semibold"
>
  Scan QR
</Link>

        </nav>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-bold mt-10"
        >
          Logout
        </button>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-4 md:p-10">

        {/* TOP */}
        <div className="
flex
flex-col
md:flex-row
justify-between
md:items-center
gap-6
mb-12
">

          <div>

            <h1 className="text-3xl md:text-5xlfont-black text-gray-800">
              Welcome, {user?.name}
            </h1>

            <p className="text-gray-500 text-lg mt-3">
              Your volunteering dashboard
            </p>

          </div>

          <div className="bg-white px-6 py-4 rounded-2xl shadow-lg">

            <p className="text-gray-500 text-sm">
              Department
            </p>

            <h3 className="text-xl font-bold">
              {user?.department}
            </h3>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* EVENTS JOINED */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Events Joined
                </p>

                <h2 className="text-3xl md:text-5xl font-black mt-3">
                  {participations.length}
                </h2>

              </div>

              <FaCalendarAlt className="text-3xl md:text-5xl text-indigo-600" />

            </div>

          </div>

          {/* HOURS */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Service Hours
                </p>

                <h2 className="text-3xl md:text-5xl font-black mt-3">
                  {participations.length * 4}
                </h2>

              </div>

              <FaAward className="text-3xl md:text-5xl text-violet-600" />

            </div>

          </div>

          {/* IMPACT */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Impact Score
                </p>

                <h2 className="text-3xl md:text-5xl font-black mt-3">
                  {participations.length * 10}
                </h2>

              </div>

              <FaUserFriends className="text-3xl md:text-5xl text-pink-600" />

            </div>

          </div>

        </div>

        {/* RECENT EVENTS */}
        <div className="bg-white rounded-3xl shadow-xl mt-12 p-8">

          <h2 className="text-3xl font-black mb-8">
            Joined Events
          </h2>

          {loading ? (
            <h1 className="text-xl font-bold">
              Loading...
            </h1>
          ) : participations.length === 0 ? (

            <div className="text-gray-500">
              No joined events yet
            </div>

          ) : (

            <div className="space-y-5">

              {participations.map((item) => (

                <div
                  key={item._id}
                  className="flex justify-between items-center border-b pb-5"
                >

                  <div>

                    <h3 className="font-bold text-xl">
                      {item.event?.title}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {item.event?.location}
                    </p>

                  </div>

                  <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                    Joined
                  </span>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;