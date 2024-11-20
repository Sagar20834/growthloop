import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-1">
      <div className="bg-white shadow-lg rounded-lg shadow-violet-500 p-8 max-w-sm text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">Page Not Found</p>
        <p className="text-sm text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist. You may have
          mistyped the address or the page may have moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
