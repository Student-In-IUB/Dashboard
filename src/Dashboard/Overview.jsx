import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// --- Static Data ---
const pieChartData = [
  { name: "Honda City", value: 20, color: "#6366F1" },
  { name: "Honda Civic", value: 20, color: "#8B5CF6" },
  { name: "Prado", value: 20, color: "#EC4899" },
  { name: "Lamborghini", value: 20, color: "#10B981" },
  { name: "Bugatti", value: 20, color: "#F59E0B" },
];

const barChartData = [
  { name: "Website", value: 50000, fill: "#6366F1" },
  { name: "Mobile App", value: 40000, fill: "#8B5CF6" },
];

// --- Helper Function ---
const pixelToValue = (pixel) => Math.round(8000 - (pixel * 8000) / 280);

const lineChartData = [
  { name: "Jul", value: pixelToValue(138) },
  { name: "Aug", value: pixelToValue(152) },
  { name: "Sep", value: pixelToValue(106.5) },
  { name: "Oct", value: pixelToValue(124) },
  { name: "Nov", value: pixelToValue(96) },
  { name: "Dec", value: pixelToValue(33) },
  { name: "Jan", value: pixelToValue(71.5) },
  { name: "Feb", value: pixelToValue(78.5) },
  { name: "Mar", value: pixelToValue(47) },
  { name: "Apr", value: pixelToValue(64.5) },
  { name: "May", value: pixelToValue(36.5) },
  { name: "Jun", value: pixelToValue(22.5) },
];

// --- Overview Component ---
function Overview() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-7xl mb-3 py-4 border-b-[#8EC5FF] z-3 border-b-1 sm:px-6 lg:px-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-blue-600 drop-shadow-md">
          Overview
        </h1>
      </div>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { label: "Total Sales", value: "$12,345", color: "#6366F1", icon: "bolt" },
            { label: "Total Users", value: "20", color: "#8B5CF6", icon: "users" },
            { label: "Total Services", value: "5", color: "#EC4899", icon: "bag" },
            { label: "Total Orders", value: "17", color: "#10B981", icon: "bars" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-100 backdrop-blur-lg overflow-hidden rounded-xl border border-blue-300 hover:translate-y-2 transition-all duration-300 custom-hover shadow-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <span className="flex items-center text-sm font-medium text-blue-600">
                  <StatIcon color={stat.color} type={stat.icon} />
                  {stat.label}
                </span>
                <p className="mt-1 text-3xl font-semibold text-blue-700">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Line Chart */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700">
            <h2 className="text-lg font-medium mb-4 text-blue-700">
              Sales Overview
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="name" tick={{ fill: "#4B5563" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#4B5563" }} axisLine={false} tickLine={false} domain={[0, 8000]} tickCount={5} />
                  <Tooltip contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "rgb(75, 85, 99)", borderRadius: "0.25rem" }} itemStyle={{ color: "#fff" }} labelStyle={{ color: "#fff", fontWeight: "bold" }} formatter={(value) => [value, "Sales"]} />
                  <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={3} dot={{ stroke: "#6366F1", strokeWidth: 2, fill: "#6366F1", r: 6 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700">
            <h2 className="text-lg font-medium mb-4 text-blue-700">
              Cars Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} stroke="#fff" />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "rgb(75, 85, 99)", borderRadius: "0.25rem", color: "#fff" }} formatter={(value, name) => [`${value}%`, name]} />
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: "20px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-blue-700">
            <h2 className="text-lg font-medium mb-4 text-blue-700">Sales by Channel</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Sales" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- SVG Icons ---
const StatIcon = ({ color, type }) => {
  const icons = {
    bolt: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    bag: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
        <path d="M3 6h18"></path>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
    bars: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <line x1="18" x2="18" y1="20" y2="10"></line>
        <line x1="12" x2="12" y1="20" y2="4"></line>
        <line x1="6" x2="6" y1="20" y2="14"></line>
      </svg>
    ),
  };
  return icons[type] || null;
};

export default Overview;
