import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import API from "../services/api";

import * as XLSX from "xlsx";

import { saveAs } from "file-saver";

function Participants() {

  

  const [participants, setParticipants] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {

    try {

      const res = await API.get(
  "/participations"
);

      setParticipants(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }
  };
  const exportToExcel = () => {

  const formattedData =
    participants.map((item) => ({
      Student: item.studentName,
      Email: item.email,
      RollNumber: item.rollnumber,
      Year: item.year,
      Branch: item.branch,
      Event: item.event?.title,
    }));

  const worksheet =
    XLSX.utils.json_to_sheet(
      formattedData
    );

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Participants"
  );

  const excelBuffer =
    XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

  const fileData =
    new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      }
    );

  saveAs(
    fileData,
    "participants.xlsx"
  );
};

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-10">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-5xl font-black text-gray-800">
          Participants
        </h1>

        <p className="text-gray-500 text-lg mt-3">
          Students joined in events
        </p>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

        {loading ? (

          <div className="p-10 text-xl font-bold">
            Loading...
          </div>

        ) : participants.length === 0 ? (

          <div className="p-10 text-gray-500">
            No participants found
          </div>

        ) : (
            

          <div className="overflow-x-auto">
            <div className="flex justify-end mb-6">

  <button
    onClick={exportToExcel}
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg"
  >
    Export Excel
  </button>

</div>

            <table className="w-full">

              <thead className="bg-indigo-600 text-white">

                <tr>

                  <th className="p-5 text-left">
                    Student
                  </th>

                  <th className="p-5 text-left">
                    Email
                  </th>

                  <th className="p-5 text-left">
                    Roll No
                  </th>

                  <th className="p-5 text-left">
                    Year
                  </th>

                  <th className="p-5 text-left">
                    Branch
                  </th>

                  <th className="p-5 text-left">
                    Event
                  </th>

                </tr>

              </thead>

              <tbody>

                {participants.map((item) => (

                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 transition"
                  >

                    <td className="p-5 font-semibold">
                      {item.studentName}
                    </td>

                    <td className="p-5">
                      {item.email}
                    </td>

                    <td className="p-5">
                      {item.rollnumber}
                    </td>

                    <td className="p-5">
                      {item.year}
                    </td>

                    <td className="p-5">
                      {item.branch}
                    </td>

                    <td className="p-5">
                      {item.event?.title}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}

export default Participants;