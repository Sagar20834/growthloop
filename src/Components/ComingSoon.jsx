import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Fog Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200 via-transparent to-transparent opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md w-full p-6 bg-white shadow-2xl rounded-lg text-center space-y-6">
        {/* Rocket Animation */}
        <div className="relative flex justify-center items-end mb-6 h-24">
          <svg
            className="rocket-icon animate-rocket"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L15 6L12 8L9 6L12 2ZM12 22L15 18L12 16L9 18L12 22ZM18 11L22 12L18 13L18 11ZM6 11L2 12L6 13L6 11ZM18.5 14L16 17L18.5 20L21 17L18.5 14ZM4.5 14L2 17L4.5 20L7 17L4.5 14ZM12 15L16 15L16 17L12 17L12 15ZM12 15L8 15L8 17L12 17L12 15ZM12 15L12 13L16 13L16 15L12 15ZM12 13L12 15L8 15L8 13L12 13ZM12 13L12 11L16 11L16 13L12 13Z"/>
            <path d="M11 14L13 16L11 18L9 16L11 14Z" className="rocket-flame"/>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Coming Soon!
        </h1>
        <p className="text-base text-gray-700 mb-4">
          We're working hard on this feature. Stay tuned for updates!
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Our team is crafting something special just for you. Thank you for your patience!
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* Tailwind CSS for Rocket Animation */}
      <style>
        {`
          .rocket-icon {
            width: 60px;
            height: 60px;
            color: #1f2937;
          }

          .rocket-flame {
            fill: #f87171;
            animation: flameAnimation 0.3s infinite ease-in-out;
          }

          .animate-rocket {
            animation: rocketMove 2s ease-in-out infinite;
          }

          @keyframes rocketMove {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-50px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes flameAnimation {
            0% {
              transform: scaleY(1);
              opacity: 1;
            }
            50% {
              transform: scaleY(1.5);
              opacity: 0.6;
            }
            100% {
              transform: scaleY(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoon;
