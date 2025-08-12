import React from "react";

// --- Static Data ---
const blogList = [
  {
    id: 1,
    title: "Informative data",
    author: "De Charles Babbage",
    image:
      "https://res.cloudinary.com/dpgdbecnu/image/upload/v1742551991/profiles/profile_1742551989110.jpg",
  },
  {
    id: 2,
    title: "Website Development",
    author: "De Muhammad Shakeel",
    image:
      "https://res.cloudinary.com/dpgdbecnu/image/upload/v1754904597/profiles/profile_1754904595268.jpg",
  },
];

// --- Blog Card Component ---
const BlogCard = ({ title, author, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://via.placeholder.com/300x200?text=Blog+Image";
      }}
    />
    <div className="p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 text-sm">{author}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Update
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
          Delete
        </button>
      </div>
    </div>
  </div>
);

function Blogs() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-7xl mb-3 py-4 border-b-[#8EC5FF] border-b-1 sm:px-6 lg:px-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-blue-600 drop-shadow-md">
          Blogs
        </h1>
      </div>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stats + Add Blog */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-5">
          <div className="flex flex-col gap-5">
            {/* Total Blogs Card */}
            <div className="bg-white bg-opacity-100 backdrop-blur-lg overflow-hidden shadow-lg rounded-xl border border-blue-300">
              <div className="px-4 py-5 sm:p-6">
                <span className="flex items-center text-sm font-medium text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(99, 102, 241)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  Total Blogs
                </span>
                <p className="mt-1 text-3xl font-semibold text-blue-700">
                  {blogList.length}
                </p>
              </div>
            </div>

            {/* Add Blog Button */}
            <button
              className="relative overflow-hidden bg-[#FFEE02] w-[170px] px-6 py-3 cursor-pointer font-semibold text-black transition-all duration-500 group"
              style={{
                clipPath: "polygon(100% 0px, 85% 100%, 0px 100%, 0px 0px)",
              }}
            >
              <div
                className="absolute top-0 right-2 h-[100%] w-[50px] bg-white z-20"
                style={{
                  clipPath: "polygon(100% 0px, 45% 100%, 25% 100%, 78% 0px)",
                }}
              ></div>
              <span className="absolute inset-0 bg-black w-0 transition-all duration-500 group-hover:w-full z-10"></span>
              <span className="relative z-30 ms-[-30px] group-hover:text-white">
                Add Blog
              </span>
            </button>
          </div>
        </div>

        {/* Blog List */}
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Blog Administration Section
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogList.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blogs;
