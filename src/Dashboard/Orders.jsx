import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Orders = () => {
  // Stats data
  const stats = [
    {
      title: "Total Orders",
      value: 17,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
          style={{ color: "rgb(99, 102, 241)" }}
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <path d="M3 6h18"></path>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      ),
    },
    {
      title: "Pending Orders",
      value: 14,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
          style={{ color: "rgb(245, 158, 11)" }}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Completed Orders",
      value: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
          style={{ color: "rgb(16, 185, 129)" }}
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      title: "Total Revenue",
      value: "214017",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
          style={{ color: "rgb(239, 68, 68)" }}
        >
          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
  ];

  // Orders data
  const orders = [
    {
      id: 1,
      customer: "Muhammad Shakeel",
      email: "shakeel7521951@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "3/13/2025",
      pickup: "Bahawalpur",
      dropoff: "Mailsi",
    },
    {
      id: 2,
      customer: "Muhammad Shakeel",
      email: "shakeel752195@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "3/13/2025",
      pickup: "Bahawalpur",
      dropoff: "Mailsi",
    },
    {
      id: 3,
      customer: "Muhammad Shakeel",
      email: "asadsoomro0311@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "3/17/2025",
      pickup: "Bahawalpur",
      dropoff: "Karachi",
    },
    {
      id: 4,
      customer: "Muhammad Shakeel",
      email: "shakeel7521951@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "3/20/2025",
      pickup: "Bahawalpur",
      dropoff: "Mailsi",
    },
    {
      id: 5,
      customer: "Muhammad Shakeel",
      email: "shakeel7521951@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "3/20/2025",
      pickup: "Bahawalpur",
      dropoff: "Mailsi",
    },
    {
      id: 6,
      customer: "Muhammad Shakeel",
      email: "shakeel7521951@gmail.com",
      total: "$9809.00",
      status: "Cancelled",
      date: "3/26/2025",
      pickup: "Lahore",
      dropoff: "sdk",
    },
    {
      id: 7,
      customer: "kiran",
      email: "zainab03458717@gmail.com",
      total: "$400.00",
      status: "Fulfilled",
      date: "4/4/2025",
      pickup: "Mailsi",
      dropoff: "Bahawalapur",
    },
    {
      id: 8,
      customer: "kiran",
      email: "zainab03458717@gmail.com",
      total: "$99000.00",
      status: "Pending",
      date: "4/7/2025",
      pickup: "lahore",
      dropoff: "BWP",
    },
    {
      id: 9,
      customer: "kiran",
      email: "zainab03458717@gmail.com",
      total: "$0.00",
      status: "Pending",
      date: "4/7/2025",
      pickup: "ll",
      dropoff: "kk",
    },
    {
      id: 10,
      customer: "Joiya",
      email: "Usamajoiya9@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "4/9/2025",
      pickup: "bwp",
      dropoff: "ict",
    },
    {
      id: 11,
      customer: "Muhammad Shakeel",
      email: "shakeel7521951@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "4/9/2025",
      pickup: "Bahawalpur",
      dropoff: "Multan",
    },
    {
      id: 12,
      customer: "Muhammad Shakeel",
      email: "shakeel7521951@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "4/10/2025",
      pickup: "lahore",
      dropoff: "bwp",
    },
    {
      id: 13,
      customer: "areeba",
      email: "areebaasghar071@gmail.com",
      total: "$9809.00",
      status: "Pending",
      date: "5/15/2025",
      pickup: "Bahawalpur",
      dropoff: "Lahore",
    },
    {
      id: 14,
      customer: "areeba",
      email: "aqsazulfiqar528@gmail.com",
      total: "$27.00",
      status: "Pending",
      date: "5/16/2025",
      pickup: "Bahawalpur",
      dropoff: "Lahore",
    },
    {
      id: 15,
      customer: "Muhammad Shakeel",
      email: "shakeel7521951@gmail.com",
      total: "$5500.00",
      status: "Pending",
      date: "6/26/2025",
      pickup: "Karachi",
      dropoff: "Lahore",
    },
    {
      id: 16,
      customer: "Iqra Amin",
      email: "iqraamin997@gmail.com",
      total: "$5500.00",
      status: "Fulfilled",
      date: "6/26/2025",
      pickup: "Karachi",
      dropoff: "Lahore",
    },
    {
      id: 17,
      customer: "Muhammad Shakeel",
      email: "shakeel7521951@gmail.com",
      total: "$5500.00",
      status: "Pending",
      date: "8/4/2025",
      pickup: "Bahawalpur",
      dropoff: "Karachi",
    },
  ];

  // Chart data
  const chartData = [
    { date: "03/13", orders: 0 },
    { date: "03/17", orders: 1 },
    { date: "03/20", orders: 0 },
    { date: "03/26", orders: 1 },
    { date: "04/04", orders: 1 },
    { date: "04/07", orders: 0 },
    { date: "04/09", orders: 0 },
    { date: "04/10", orders: 1 },
    { date: "05/15", orders: 1 },
    { date: "05/16", orders: 1 },
    { date: "06/26", orders: 0 },
    { date: "08/04", orders: 1 },
  ];

  return (
    <div className="w-full overflow-auto">
      <div className="w-full mb-3 py-4 border-b border-b-[#8EC5FF] px-4 sm:px-6 lg:px-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-blue-600 drop-shadow-md">
          Orders
        </h1>
      </div>
      <main className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-100 backdrop-blur-lg overflow-hidden shadow-lg rounded-xl border border-blue-300 custom-hover hover:translate-y-1 duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <span className="flex items-center text-sm font-medium text-blue-600">
                  {stat.icon}
                  {stat.title}
                </span>
                <p className="mt-1 text-3xl font-semibold text-blue-700">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order List */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-blue-700 mb-8 overflow-x-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-xl font-semibold text-blue-700">Order List</h2>
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search orders..."
                className="bg-white text-blue-700 placeholder-blue-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-2.5 text-blue-700"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
  <table className="w-full table-fixed border-collapse">
    <thead>
      <tr>
        <th className="px-1 py-2 text-left text-xs font-medium text-blue-700 uppercase tracking-wider w-[80px]">
          Customer
        </th>
        <th className="px-1 py-2 text-left text-xs font-medium text-blue-700 uppercase tracking-wider hidden sm:table-cell w-[110px]">
          Email
        </th>
        <th className="px-1 py-2 text-left text-xs font-medium text-blue-700 uppercase tracking-wider w-[50px]">
          Total
        </th>
        <th className="px-1 py-2 text-left text-xs font-medium text-blue-700 uppercase tracking-wider w-[60px]">
          Status
        </th>
        <th className="px-1 py-2 text-left text-xs font-medium text-blue-700 uppercase tracking-wider hidden md:table-cell w-[80px]">
          Date
        </th>
        <th className="px-1 py-2 text-left text-xs font-medium text-blue-700 uppercase tracking-wider hidden lg:table-cell w-[80px]">
          Pickup
        </th>
        <th className="px-1 py-2 text-left text-xs font-medium text-blue-700 uppercase tracking-wider hidden lg:table-cell w-[80px]">
          Dropoff
        </th>
        <th className="px-1 py-2 text-left text-xs font-medium text-blue-700 uppercase tracking-wider w-[50px]">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-700">
      {orders.map((order) => (
        <tr key={order.id}>
          {/* Customer + email for mobile */}
          <td className="px-1 py-3 text-sm font-medium text-black whitespace-normal break-words">
            <div className="flex flex-col">
              <span>{order.customer}</span>
              <span className="sm:hidden text-xs text-gray-500 break-words">{order.email}</span>
            </div>
          </td>

          {/* Email */}
          <td className="px-1 py-3 text-sm font-medium text-black hidden sm:table-cell whitespace-normal break-words">
            {order.email}
          </td>

          {/* Total */}
          <td className="px-1 py-3 text-sm font-medium text-black">{order.total}</td>

          {/* Status */}
          <td className="px-1 py-3 text-sm">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                order.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : order.status === "Fulfilled"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {order.status}
            </span>
          </td>

          {/* Date */}
          <td className="px-1 py-3 text-sm text-blue-700 hidden md:table-cell">{order.date}</td>

          {/* Pickup */}
          <td className="px-1 py-3 text-sm text-blue-700 hidden lg:table-cell">{order.pickup}</td>

          {/* Dropoff */}
          <td className="px-1 py-3 text-sm text-blue-700 hidden lg:table-cell">{order.dropoff}</td>

          {/* Actions */}
          <td className="px-1 py-3 text-sm text-blue-700">
            <button className="text-indigo-400 hover:text-indigo-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>

        {/* Daily Orders Chart */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-blue-700">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Daily Orders
          </h2>
          <div style={{ width: "100%", height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#6B7280" }}
                  axisLine={{ stroke: "#6B7280" }}
                />
                <YAxis
                  tick={{ fill: "#6B7280" }}
                  axisLine={{ stroke: "#6B7280" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "rgb(75, 85, 99)",
                    borderRadius: "0.375rem",
                    color: "white",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={{
                    stroke: "#8B5CF6",
                    strokeWidth: 2,
                    fill: "#fff",
                    r: 3,
                  }}
                  activeDot={{
                    stroke: "#8B5CF6",
                    strokeWidth: 2,
                    fill: "#fff",
                    r: 5,
                  }}
                  name="orders"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;
