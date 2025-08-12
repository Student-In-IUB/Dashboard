import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Sales = () => {
 
  const data = [
    { name: "Jul", value: 1380 },
    { name: "Aug", value: 1520 },
    { name: "Sep", value: 1065 },
    { name: "Oct", value: 1240 },
    { name: "Nov", value: 960 },
    { name: "Dec", value: 330 },
    { name: "Jan", value: 715 },
    { name: "Feb", value: 785 },
    { name: "Mar", value: 470 },
    { name: "Apr", value: 645 },
    { name: "May", value: 365 },
    { name: "Jun", value: 225 },
  ];

  
  const data3 = [
    { name: "Sedan", value: 35, color: "#8884d8" },
    { name: "SUV", value: 26, color: "#82ca9d" },
    { name: "Truck", value: 17, color: "#ffc658" },
    { name: "Convertible", value: 9, color: "#ff8042" },
    { name: "Others", value: 13, color: "#0088FE" },
  ];
 const data4 = [
    { name: 'Mon', value: 650 },
    { name: 'Tue', value: 800 },
    { name: 'Wed', value: 550 },
    { name: 'Thu', value: 750 },
    { name: 'Fri', value: 950 },
    { name: 'Sat', value: 1300 },
    { name: 'Sun', value: 900 },
  ];

  return (
    <div className="w-full">
     
      <div className="max-w-7xl mb-3 py-4 border-b-[#8EC5FF] border-b-1 sm:px-6 lg:px-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-blue-600 drop-shadow-md">
          Sales
        </h1>
      </div>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Key Metrics */}
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Metric Card */}
          {[
            {
              label: "Total Revenue",
              value: "$1,234,567",
              color: "rgb(99, 102, 241)",
              icon: (
                <>
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </>
              ),
            },
            {
              label: "Avg. Order Value",
              value: "$78.90",
              color: "rgb(16, 185, 129)",
              icon: (
                <>
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </>
              ),
            },
            {
              label: "Conversion Rate",
              value: "3.45%",
              color: "rgb(245, 158, 11)",
              icon: (
                <>
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </>
              ),
            },
            {
              label: "Sales Growth",
              value: "12.3%",
              color: "rgb(239, 68, 68)",
              icon: (
                <>
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </>
              ),
            },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-100 backdrop-blur-lg overflow-hidden shadow-lg rounded-xl border border-blue-300 custom-hover hover:translate-y-1 duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <span className="flex items-center text-sm font-medium text-blue-600">
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
                    style={{ color: metric.color }}
                  >
                    {metric.icon}
                  </svg>
                  {metric.label}
                </span>
                <p className="mt-1 text-3xl font-semibold text-blue-700">
                  {metric.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Overview Chart */}
        <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700 mb-8">
          <h2 className="text-lg font-medium mb-4 text-blue-700">
            Sales Overview
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis
                  dataKey="name"
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
                  itemStyle={{ color: "white" }}
                  labelStyle={{ color: "white", fontWeight: "bold" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6366F1"
                  strokeWidth={3}
                  dot={{
                    stroke: "#6366F1",
                    strokeWidth: 2,
                    fill: "#6366F1",
                    r: 6,
                  }}
                  activeDot={{
                    stroke: "#6366F1",
                    strokeWidth: 2,
                    fill: "#6366F1",
                    r: 8,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category Pie Chart */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-blue-700 mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Sales by Category
          </h2>
          <div style={{ width: "100%", height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data3}
                  cx="50%"
                  cy="50%"
                  labelLine
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data3.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="#fff"
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "rgb(75, 85, 99)",
                    borderRadius: "0.375rem",
                    color: "white",
                  }}
                  formatter={(value, name) => [`${value}%`, name]}
                />
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  formatter={(value) => {
                    const category = data3.find((d) => d.name === value);
                    return (
                      <span style={{ color: category?.color || "#000" }}>
                        {value}
                      </span>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        
<div className="bg-white shadow-lg rounded-xl p-6 border border-blue-700">
  <h2 className="text-xl font-semibold text-blue-700 mb-4">
    Daily Sales Trend
  </h2>
  <div style={{ width: '100%', height: '300px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data4}  
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis
          dataKey="name"
          tick={{ fill: '#6B7280' }}
          axisLine={{ stroke: '#6B7280' }}
        />
        <YAxis
          tick={{ fill: '#6B7280' }}
          axisLine={{ stroke: '#6B7280' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
            borderColor: 'rgb(75, 85, 99)',
            borderRadius: '0.375rem',
            color: 'white',
          }}
          formatter={(value) => [`$${value}`, 'Sales']}
        />
        <Bar
          dataKey="value"  // ✅ fixed here
          fill="#10B981"
          barSize={39}
          radius={[4, 4, 0, 0]}
        >
          {data4.map((entry, index) => (
            <text
              key={`label-${index}`}
              x={index * 48.5714 + 90}
              y={270 - entry.value * 0.2}
              textAnchor="middle"
              fill="#6B7280"
              fontSize={12}
            >
              ${entry.value}
            </text>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
       </div>

      </main>
    </div>
  );
};

export default Sales;