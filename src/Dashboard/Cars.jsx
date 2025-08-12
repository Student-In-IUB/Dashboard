import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// --- Static Data ---
const statsData = [
  {
    title: "Total Cars",
    value: "5",
    color: "rgb(99, 102, 241)",
    iconPath: (
      <>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
        <circle cx="7" cy="17" r="2"></circle>
        <path d="M9 17h6"></path>
        <circle cx="17" cy="17" r="2"></circle>
      </>
    ),
    highlight: true,
  },
  {
    title: "Top Selling",
    value: "0",
    color: "rgb(16, 185, 129)",
    iconPath: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </>
    ),
  },
  {
    title: "Low Stock",
    value: "0",
    color: "rgb(245, 158, 11)",
    iconPath: (
      <>
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </>
    ),
  },
  {
    title: "Total Revenue",
    value: "$34,000",
    color: "rgb(239, 68, 68)",
    iconPath: (
      <>
        <line x1="12" x2="12" y1="2" y2="22"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </>
    ),
  },
];

const carsList = [
  {
    name: "Honda City",
    category: "Car",
    price: "$6500",
    passengers: "5",
    image:
      "https://res.cloudinary.com/dpgdbecnu/image/upload/v1747367423/profiles/profile_1747367416062.png",
  },
  {
    name: "Honda Civic",
    category: "Car",
    price: "$9000",
    passengers: "5",
    image:
      "https://res.cloudinary.com/dpgdbecnu/image/upload/v1751039719/profiles/profile_1751039705097.png",
  },
  {
    name: "Prado",
    category: "Car",
    price: "$15000",
    passengers: "7",
    image:
      "https://res.cloudinary.com/dpgdbecnu/image/upload/v1751039885/profiles/profile_1751039876307.png",
  },
  {
    name: "Lamborghini",
    category: "Car",
    price: "$2000",
    passengers: "4",
    image:
      "https://res.cloudinary.com/dpgdbecnu/image/upload/v1754570666/profiles/profile_1754570665958.jpg",
  },
  {
    name: "Bugatti",
    category: "Car",
    price: "$1500",
    passengers: "4",
    image:
      "https://res.cloudinary.com/dpgdbecnu/image/upload/v1754570771/profiles/profile_1754570770927.jpg",
  },
];

const salesTrendData = [
  { name: "Jan", sales: 2500 },
  { name: "Feb", sales: 3500 },
  { name: "Mar", sales: 1000 },
  { name: "Apr", sales: 1500 },
  { name: "May", sales: 100 },
  { name: "Jun", sales: 500 },
];

const carsDistributionData = [
  { name: "Honda City", value: 20, color: "#6366F1" },
  { name: "Honda Civic", value: 20, color: "#8B5CF6" },
  { name: "Prado", value: 20, color: "#EC4899" },
  { name: "Lamborghini", value: 20, color: "#10B981" },
  { name: "Bugatti", value: 20, color: "#F59E0B" },
];

// --- Component ---
const Cars = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-7xl mb-3 py-4 px-4 border-b border-b-[#8EC5FF] sm:px-6 lg:px-8 shadow-lg">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-600 drop-shadow-md">
          Cars
        </h1>
      </div>

      <main className="max-w-7xl mx-auto py-6 px-2 sm:px-4 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-100 backdrop-blur-lg overflow-hidden shadow-lg rounded-xl border border-blue-300"
            >
              <div className="px-3 py-4 sm:px-4 sm:py-5 sm:p-6">
                <span className="flex items-center text-xs sm:text-sm font-medium text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={stat.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    {stat.iconPath}
                  </svg>
                  {stat.title}
                </span>
                <p className="mt-1 text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Service Button */}
        <button className="px-3 py-2 text-sm sm:text-base sm:px-4 mb-6 sm:mb-10 bg-blue-700 cursor-pointer text-white rounded-lg hover:bg-blue-500 transition">
          + Add New Service
        </button>

        {/* Cars Table */}
        <div className="bg-white backdrop-blur-md shadow-lg rounded-xl p-3 sm:p-6 border border-blue-700 mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-6 gap-3">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700">Cars List</h2>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search cars..."
                className="bg-white text-sm sm:text-base text-blue-700 placeholder-blue-700 rounded-lg pl-8 sm:pl-10 pr-3 sm:pr-4 py-1 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-2 sm:left-3 top-2 sm:top-2.5 text-blue-700"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {["Name", "Category", "Price", "Passengers", "Actions"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {carsList.map((car, index) => (
                  <tr key={index}>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                          src={car.image}
                          alt={car.name}
                        />
                        <span className="ml-2 sm:ml-4 text-xs sm:text-sm font-medium text-blue-700">
                          {car.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-xs sm:text-sm text-blue-700">
                      {car.category}
                    </td>
                    <td className="px-3 py-3 text-xs sm:text-sm text-blue-700">
                      {car.price}
                    </td>
                    <td className="px-3 py-3 text-xs sm:text-sm text-blue-700">
                      {car.passengers}
                    </td>
                    <td className="px-3 py-3 text-xs sm:text-sm text-blue-700">
                      <div className="flex space-x-1 sm:space-x-2">
                        <button className="text-indigo-500 hover:text-indigo-700">
                          ✏️
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Line Chart */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-blue-700">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3 sm:mb-4">
              Sales Trend
            </h2>
            <div className="h-[250px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{
                      r: 3,
                      stroke: "#8B5CF6",
                      strokeWidth: 2,
                      fill: "#fff",
                    }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-blue-700">
            <h2 className="text-base sm:text-lg font-medium text-blue-700 mb-3 sm:mb-4">
              Cars Distribution
            </h2>
            <div className="h-[250px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={carsDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {carsDistributionData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cars;