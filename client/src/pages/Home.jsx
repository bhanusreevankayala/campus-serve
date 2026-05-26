import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700 text-white">

      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-black">
          CampusServe
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-black px-5 py-2 rounded-xl font-semibold"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="border border-white px-5 py-2 rounded-xl"
          >
            Register
          </Link>
        </div>
      </nav>

      <div className="flex flex-col justify-center items-center text-center px-6 mt-28">

        <h1 className="text-6xl md:text-7xl font-black leading-tight max-w-5xl">
          Community Service
          <br />
          Made Simple
        </h1>

        <p className="mt-8 text-xl text-indigo-100 max-w-2xl leading-relaxed">
          A modern platform for managing student
          volunteering, service activities, event
          participation, and impact tracking.
        </p>

        <div className="mt-10 flex gap-5">
          <Link
            to="/register"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            to="/events"
            className="border border-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-black transition"
          >
            Explore Events
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;