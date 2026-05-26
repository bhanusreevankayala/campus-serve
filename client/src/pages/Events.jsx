import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(true);
  const user = JSON.parse(
  localStorage.getItem("user")
);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");

      setEvents(res.data);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };
  const joinEvent = async (eventId) => {
  try {
    await API.post(
      "/participations/join",
      {
        userId: user._id,
        eventId,
      }
    );

    alert("Joined Event Successfully");
  } catch (error) {
    alert(
      error.response?.data?.message ||
        "Failed to join event"
    );
  }
};

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-10">

      {/* HEADER */}
      <div className="mb-12">

        <h1 className="text-5xl font-black text-gray-800">
          Community Events
        </h1>

        <p className="text-gray-500 text-lg mt-3">
          Explore volunteering opportunities
        </p>

      </div>

      {/* LOADING */}
      {loading ? (
        <div className="text-2xl font-bold">
          Loading events...
        </div>
      ) : events.length === 0 ? (

        /* EMPTY STATE */
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

          <h2 className="text-3xl font-black text-gray-700">
            No Events Found
          </h2>

          <p className="text-gray-500 mt-4">
            Add events from backend or admin panel
          </p>

        </div>

      ) : (

        /* EVENTS GRID */
        <div className="grid md:grid-cols-3 gap-8">

          {events.map((event) => (

            <div
              key={event._id}
              className="bg-white p-8 rounded-3xl shadow-xl hover:scale-[1.02] transition duration-300 border border-gray-100"
            >
              <img
  src={event.image}
  alt=""
  className="w-full h-56 object-cover rounded-2xl mb-4"
/>

              {/* CATEGORY */}
              <div className="flex justify-between items-center mb-5">

                <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold">
                  {event.category}
                </span>

              </div>

              {/* TITLE */}
              <h2 className="text-3xl font-black text-gray-800 mb-4">
                {event.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {event.description}
              </p>

              {/* INFO */}
              <div className="space-y-3 text-gray-500 mb-8">

                <p>
                  📍 {event.location}
                </p>

               <p>
  📅{" "}
  {new Date(
    event.date
  ).toLocaleDateString()}
</p>

<p>
  ⏰ {event.startTime} - {event.endTime}
</p>

              </div>

              {/* BUTTON */}
              <Link
  to={`/join-event/${event._id}`}
  className="bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold"
>
  Join Event
</Link>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Events;