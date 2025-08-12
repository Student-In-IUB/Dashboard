import React from "react";

// ================== Static Data ==================
const stats = [
  {
    title: "Total Users",
    value: "20",
    color: "rgb(99, 102, 241)",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </>
    ),
  },
  {
    title: "New Users Today",
    value: "0",
    color: "rgb(16, 185, 129)",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <line x1="19" x2="19" y1="8" y2="14"></line>
        <line x1="22" x2="16" y1="11" y2="11"></line>
      </>
    ),
  },
  {
    title: "Active Users",
    value: "11",
    color: "rgb(245, 158, 11)",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <polyline points="16 11 18 13 22 9"></polyline>
      </>
    ),
  },
  {
    title: "Churn Rate",
    value: "45.0%",
    color: "rgb(239, 68, 68)",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <line x1="17" x2="22" y1="8" y2="13"></line>
        <line x1="22" x2="17" y1="8" y2="13"></line>
      </>
    ),
  },
];

const users = [
  { name: "Muhammad Shakeel", email: "shakeel7521951@gmail.com", role: "Admin", status: "verified", initial: "M" },
  { name: "Muhammad Shakeel", email: "shakeel752195@gmail.com", role: "User", status: "verified", initial: "M" },
  { name: "Muhammad Shakeel", email: "shakeel75211@gmail.com", role: "User", status: "unverified", initial: "M" },
  { name: "Muhammad Shakeel", email: "asadsoomro0311@gmail.com", role: "User", status: "verified", initial: "M" },
  { name: "Shakeeel", email: "Shakeel@123.com", role: "User", status: "unverified", initial: "S" },
  { name: "Shakeeel", email: "Shakeel@123.comm", role: "User", status: "unverified", initial: "S" },
  { name: "shakeel", email: "Shakeel123@gmail.com", role: "User", status: "unverified", initial: "S" },
  { name: "asad", email: "Asad@123.com", role: "User", status: "unverified", initial: "A" },
  { name: "kiran", email: "zainab03458717@gmail.com", role: "User", status: "verified", initial: "K" },
  { name: "Joiya", email: "Usamajoiya9@gmail.com", role: "Admin", status: "verified", initial: "J" },
  { name: "mughees", email: "2@gmail.com", role: "User", status: "unverified", initial: "M" },
  { name: "mughees", email: "logictown005@gmail.com", role: "User", status: "unverified", initial: "M" },
  { name: "areeba", email: "areebaasghar071@gmail.com", role: "User", status: "verified", initial: "A" },
  { name: "areeba", email: "aqsazulfiqar528@gmail.com", role: "User", status: "verified", initial: "A" },
  { name: "Allah Nawaz", email: "nawaz51412@gmail.com", role: "User", status: "verified", initial: "A" },
  { name: "Allah Nawaz", email: "iqimano042@gmail.com", role: "User", status: "unverified", initial: "A" },
  { name: "Iqra Amin", email: "iqraamin997@gmail.com", role: "User", status: "verified", initial: "I" },
  { name: "Riffat", email: "riffatt281@gmail.com", role: "User", status: "verified", initial: "R" },
  { name: "h", email: "j@gmail.com", role: "User", status: "unverified", initial: "H" },
  { name: "Uzma Razzaq", email: "uzmarazzaq702@gmail.com", role: "User", status: "verified", initial: "U" },
];

// ================== Component ==================
const Users = () => {
  return (
    <div className="w-full">
      {/* Page Header - Mobile optimized */}
      <div className="w-full mb-2 py-3 px-4 border-b border-b-[#8EC5FF]">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-600">
          Users
        </h1>
      </div>

      <main className="w-full mx-auto py-4 px-2 sm:px-4 lg:px-8">
        {/* Stats Cards - Mobile optimized */}
        <div className="grid grid-cols-2 gap-3 mb-6 sm:grid-cols-4 sm:gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-3 border border-blue-200 custom-hover hover:translate-y-1 duration-300"
            >
              <div className="flex items-center">
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
                  {stat.icon}
                </svg>
                <span className="text-xs sm:text-sm font-medium text-blue-600">
                  {stat.title}
                </span>
              </div>
              <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold text-blue-700">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Users Table - Mobile optimized */}
        <div className="bg-white rounded-lg shadow p-3 sm:p-4 border border-blue-200 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700">Users</h2>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full bg-gray-50 text-sm text-blue-700 rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-2 top-2.5 text-blue-700"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>

         {/* Table with horizontal scroll for mobile */}
<div className="overflow-x-auto -mx-2 sm:mx-0">
  <div className="min-w-full sm:min-w-0">
    <table className="w-full divide-y divide-gray-200 text-xs sm:text-sm table-fixed">
      <thead className="bg-gray-50 sticky top-0 z-10">
        <tr>
          {["Name", "Email", "Role", "Status", "Actions"].map((head, i) => (
            <th
              key={i}
              className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user, index) => (
          <tr key={index}>
            {/* Name */}
            <td className="px-3 py-3 truncate max-w-[90px] sm:max-w-[120px]">
              <div className="flex items-center">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-gray-200 text-blue-700 font-bold">
                  {user.initial}
                </div>
                <div className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-blue-700 truncate">
                  {user.name}
                </div>
              </div>
            </td>

            {/* Email */}
            <td className="px-3 py-3 truncate max-w-[110px] sm:max-w-[150px] text-gray-900">
              {user.email}
            </td>

            {/* Role */}
            <td className="px-3 py-3 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">
                {user.role}
              </span>
            </td>

            {/* Status */}
            <td className="px-3 py-3 whitespace-nowrap">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.status === "verified"
                    ? "bg-green-800 text-green-100"
                    : "bg-red-800 text-red-100"
                }`}
              >
                {user.status}
              </span>
            </td>

            {/* Actions */}
            <td className="px-3 py-3 whitespace-nowrap">
              <button className="flex items-center text-xs sm:text-sm text-indigo-600 hover:text-indigo-900">
                Manage
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


        </div>
      </main>
    </div>
  );
};

export default Users;