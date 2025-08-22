
import React, { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Mobile menu button (always visible on mobile) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-white shadow-md hover:bg-gray-200 transition-colors"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transform transition-transform duration-300 ease-in-out
          h-full w-full md:w-[250px] text-center bg-white p-4 flex flex-col border-r border-gray-300 shadow-md 
          fixed md:sticky top-0 z-40`}
        style={{ height: "100vh" }}
      >
        {/* Sidebar toggle button (visible on desktop) */}
        <button
          className="p-2 rounded-full hover:bg-gray-200 transition-colors max-w-fit md:block hidden"
          onClick={toggleSidebar}
          tabIndex="0"
          aria-label="Menu toggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>

        {/* Sidebar nav */}
        <nav className="mt-8 flex-grow">
          <a href="/dashboard" data-discover="true">
            <div className="flex items-center p-4 text-base md:text-sm font-bold text-blue-700 rounded-lg hover:bg-gray-200 transition-colors mb-2">
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
                className="lucide lucide-bar-chart2"
                style={{ color: "rgb(99, 102, 241)", minWidth: "20px" }}
                aria-hidden="true"
              >
                <line x1="18" x2="18" y1="20" y2="10"></line>
                <line x1="12" x2="12" y1="20" y2="4"></line>
                <line x1="6" x2="6" y1="20" y2="14"></line>
              </svg>
              <span className="ml-4 whitespace-nowrap">Overview</span>
            </div>
          </a>
          <a href="/products" data-discover="true">
            <div className="flex items-center p-4 text-base md:text-sm font-bold text-blue-700 rounded-lg hover:bg-gray-200 transition-colors mb-2">
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
                className="lucide lucide-car"
                style={{ color: "rgb(139, 92, 246)", minWidth: "20px" }}
                aria-hidden="true"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <path d="M9 17h6"></path>
                <circle cx="17" cy="17" r="2"></circle>
              </svg>
              <span className="ml-4 whitespace-nowrap">Cars</span>
            </div>
          </a>
          <a href="/users" data-discover="true">
            <div className="flex items-center p-4 text-base md:text-sm font-bold text-blue-700 rounded-lg hover:bg-gray-200 transition-colors mb-2">
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
                className="lucide lucide-users"
                style={{ color: "rgb(236, 72, 153)", minWidth: "20px" }}
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="ml-4 whitespace-nowrap">Users</span>
            </div>
          </a>
          <a href="/sales" data-discover="true">
            <div className="flex items-center p-4 text-base md:text-sm font-bold text-blue-700 rounded-lg hover:bg-gray-200 transition-colors mb-2">
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
                className="lucide lucide-dollar-sign"
                style={{ color: "rgb(16, 185, 129)", minWidth: "20px" }}
                aria-hidden="true"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span className="ml-4 whitespace-nowrap">Sales</span>
            </div>
          </a>
          <a href="/orders" data-discover="true">
            <div className="flex items-center p-4 text-base md:text-sm font-bold text-blue-700 rounded-lg hover:bg-gray-200 transition-colors mb-2">
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
                className="lucide lucide-shopping-cart"
                style={{ color: "rgb(245, 158, 11)", minWidth: "20px" }}
                aria-hidden="true"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="ml-4 whitespace-nowrap">Orders</span>
            </div>
          </a>
          <a href="/admin-blogs" data-discover="true">
            <div className="flex items-center p-4 text-base md:text-sm font-bold text-blue-700 rounded-lg hover:bg-gray-200 transition-colors mb-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(245, 158, 11)", minWidth: "20px" }}
                aria-hidden="true"
              >
                <path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path>
              </svg>
              <span className="ml-4 whitespace-nowrap">Blogs</span>
            </div>
          </a>
        </nav>
      </div>

      {/* Overlay for mobile (click to close sidebar) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
