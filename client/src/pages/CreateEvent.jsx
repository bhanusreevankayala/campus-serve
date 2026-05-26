import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    startTime: "",
    endTime: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

     setLoading(true);

const formDataToSend =
  new FormData();

formDataToSend.append(
  "title",
  formData.title
);

formDataToSend.append(
  "description",
  formData.description
);

formDataToSend.append(
  "location",
  formData.location
);

formDataToSend.append(
  "date",
  formData.date
);

formDataToSend.append(
  "startTime",
  formData.startTime
);

formDataToSend.append(
  "endTime",
  formData.endTime
);

formDataToSend.append(
  "category",
  formData.category
);

formDataToSend.append(
  "image",
  image
);

await API.post(
  "/events",
  formDataToSend
);

alert("Event Created Successfully");

navigate("/events");

      alert("Event Created Successfully");

      navigate("/events");
    } catch (error) {
      console.log(error);

      alert("Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-6">

      <div className="w-full max-w-3xl bg-whitep-5 md:p-10rounded-3xl shadow-2xl">

        <div className="mb-10">

          <h1 className="text-5xl font-black text-gray-800">
            Create Event
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Add new community service activity
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* TITLE */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Event Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              rows="5"
              placeholder="Describe the event..."
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Event location"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Date
            </label>

            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            />
          </div>
          {/* START TIME */}
<div>
  <label className="block mb-2 font-semibold text-gray-700">
    Start Time
  </label>

  <input
    type="time"
    name="startTime"
    onChange={handleChange}
    className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
  />
</div>

{/* END TIME */}
<div>
  <label className="block mb-2 font-semibold text-gray-700">
    End Time
  </label>

  <input
    type="time"
    name="endTime"
    onChange={handleChange}
    className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
  />
</div>
<div>

  <label className="block mb-2 font-semibold">
    Event Poster
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setImage(e.target.files[0])
    }
    className="w-full p-3 border rounded-xl"
  />

</div>

          {/* CATEGORY */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Category
            </label>

            <select
              name="category"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <option value="">
                Select category
              </option>

              <option value="Environment">
                Environment
              </option>

              <option value="Health">
                Health
              </option>

              <option value="Education">
                Education
              </option>

              <option value="Social Service">
                Social Service
              </option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 md:py-4 rounded-2xl text-lg font-bold hover:scale-[1.01] transition"
          >
            {loading
              ? "Creating Event..."
              : "Create Event"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default CreateEvent;