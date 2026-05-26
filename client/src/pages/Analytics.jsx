import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

function Analytics() {

  const [analytics, setAnalytics] =
    useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {

      const res = await API.get(
        "/analytics"
      );

      setAnalytics(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  // FORMAT EVENT DATA
  const eventData =
    analytics?.eventStats.map(
      (item, index) => ({
        name: `Event ${index + 1}`,
        students: item.count,
      })
    ) || [];

  // FORMAT DEPARTMENT DATA
  const departmentData =
    analytics?.departmentStats.map(
      (item) => ({
        name: item._id,
        value: item.count,
      })
    ) || [];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-10">

      {/* HEADER */}
      <div className="mb-12">

        <h1 className="text-5xl font-black text-gray-800">
          Analytics Dashboard
        </h1>

        <p className="text-gray-500 text-lg mt-3">
          Real-time community insights
        </p>

      </div>

      {/* TOTAL */}
      <div className="bg-white p-8 rounded-3xl shadow-xl mb-10">

        <h2 className="text-gray-500 text-xl">
          Total Participations
        </h2>

        <h1 className="text-6xl font-black mt-4">
          {analytics?.totalParticipations || 0}
        </h1>

      </div>

      {/* CHARTS */}
      <div className="grid lg:grid-cols-2 gap-10">

        {/* BAR */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-black mb-8">
            Event Participation
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <BarChart data={eventData}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="students"
                fill="#4f46e5"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* PIE */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-black mb-8">
            Department Participation
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <PieChart>

              <Pie
                data={departmentData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >

                <Cell fill="#4f46e5" />

                <Cell fill="#7c3aed" />

                <Cell fill="#ec4899" />

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Analytics;