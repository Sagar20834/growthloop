import React, { useState, useEffect } from "react";
import "../../../src/App.css";
import CodeTabs from "./CodeTabs";

const IdeasandExecutionSection = () => {
  const services = [
    "Custom Software Development",
    "Native Mobile Application",
    "Tailored Custom Website",
    "User Testing & Integration",
    "ROI with Performance Marketing",
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentServiceIndex((prevIndex) =>
          prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
        setAnimate(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="min-h-screen mt-12 py-8 px-4 sm:px-8 md:px-20 bg-custom-gradient">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-4">
          <h1 className="font-normal py-[10px] px-3 border-[#0D80D8] text-[#0d80d8] headings-gradient w-full max-w-xl text-center sm:text-left border rounded-[6px] flex justify-center items-center bg-gradient-to-r from-custom-dark-1 to-custom-dark-2">
            BRIDGING IDEAS AND EXECUTION WHERE CREATIVITY MEETS CODE
          </h1>
        </div>
        <div className="mt-5 font-arimo text-sm sm:text-lg font-normal text-center text-[#fafafa] max-w-xl">
          Transforming Your Vision into Reality with Expert Execution and
          Tailored Solutions.
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="font-saira text-2xl sm:text-4xl font-semibold text-[#fafafa] text-center md:text-left">
            Develop your custom
          </h1>

          <h1
            className={`border-b-2 p-1 border-dashed mt-6 mb-8 font-saira text-xl sm:text-4xl font-semibold max-w-max text-[#1a75bb] transition-transform duration-500 ${
              animate ? "slide-up-out" : "slide-up-in"
            }`}
          >
            {services[currentServiceIndex]}
          </h1>

          <p className="font-arimo text-sm sm:text-base text-justify font-normal text-[#fafafa]">
            We navigate digital solutions to make your work smooth and faster to
            compete in this highly competitive world. Beyond providing IT and
            digital marketing services, we create enduring alliances that help
            your company grow to new heights.
          </p>

          <div className="my-8 flex flex-col sm:flex-row items-center justify-start gap-4">
            <button className="px-6 py-2 bg-[#1a75bb] text-white rounded-lg shadow hover:bg-blue-600 transition-transform duration-500 transform hover:scale-105 font-maven">
              Explore our docs
            </button>

            <button className="px-6 py-2 border border-[#39CF2B] text-[#1a75bb] rounded-lg shadow hover:bg-green-600 hover:text-white transition-transform duration-500 transform hover:scale-105 font-maven">
              Sign up
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <CodeTabs />
        </div>
      </div>
    </div>
  );
};

export default IdeasandExecutionSection;
