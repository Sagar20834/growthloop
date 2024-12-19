import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBook } from "react-icons/bs";
import crm from "../../assets/GLERPNew.png";
import collab from "../../assets/collaboration.svg";
import task from "../../assets/tasknotfinished.svg";
import logo2 from "../../assets/GLJPG.jpg";
import { Link } from "react-router-dom";
import { RiShareBoxFill } from "react-icons/ri";
import mockup from "../../assets/GLLMS1.jpg";
import lms from "../../assets/GLLMS.png";

const OurSolution = () => {
  const solutions = [
    {
      name: "ERP",
      logo: <IoSettingsOutline size={32} />,
      title: "Enterprise Resource Planning (ERP)",
      description:
        "Integrate and manage core business processes like finance, HR, and supply chain with our ERP solution.",
      image1: crm,
      image2: collab,
      image3: task,
    },
    {
      name: "LMS",
      logo: <BsBook size={32} />,
      title: "Learning Management System (LMS)",
      description:
        "Manage educational courses, track student progress, and enhance the learning experience with our powerful LMS.",
      image1: mockup,
      image2: lms,
    },
    {
      name: "SMS",
      logo: <IoSettingsOutline size={32} />,
      title: "School Management System (SMS)",
      description:
        "Efficiently manage school operations, student information, and communication with parents and staff.",
    },
    {
      name: "CMS",
      logo: <IoSettingsOutline size={32} />,
      title: "Content Management System (CMS)",
      description:
        "Create, manage, and optimize digital content easily with our flexible content management system.",
    },
    {
      name: "BWMS",
      logo: <IoSettingsOutline size={32} />,
      title: "Business Workflow Management System (BWMS)",
      description:
        "Streamline your business processes and improve productivity with our business workflow management system.",
    },
    {
      name: "CRMS",
      logo: <IoSettingsOutline size={32} />,
      title: "Customer Relation Management System (CRMS)",
      description:
        "Integrate and manage core business processes like public, job, HR, and attendance with our CRMS solution.",
    },
  ];

  const [activeSolution, setActiveSolution] = useState(solutions[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-6 sm:px-10 md:px-20 py-10 bg-[#fafafa]">
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-base text-[#0d80d8] font-maven px-[2px] py-[1px] rounded-md bg-gradient-to-r from-[#0D80D8] via-[#5fafec] to-black mb-4">
          <div className="bg-white py-1 px-2 rounded-[4px]">
            ENHANCE YOUR BUSINESS WITH OUR SOLUTION
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveSolution(solution);
                setActiveIndex(index);
              }}
              className={`flex flex-col gap-2 border p-4 rounded-md justify-center items-center font-saira font-medium text-xs transition-all ease-in-out duration-200 cursor-pointer 
                ${
                  activeIndex === index
                    ? "text-black border-black shadow-lg shadow-blue-400"
                    : "hover:scale-110"
                }
              `}
            >
              <div>{solution.logo}</div>
              <div>{solution.name}</div>
            </div>
          ))}
        </div>

        {/* Main Section */}
        <div className="mt-16 p-6 rounded-md bg-white shadow-lg w-full">
          <div>
            <h2
              className="text-lg font-bold text-[#0d80d8] flex justify-start items-center gap-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span
                className={`text-[#39cf2b] border-4 rounded-full p-1 transition-transform duration-200 ${
                  isHovered ? "animate-spin-slow" : "animate-spin-on-hover"
                }`}
              >
                {activeSolution.logo}
              </span>
              {activeSolution.title}
            </h2>
            <p className="mt-2 text-sm text-[#5f646d]">
              {activeSolution.description}
            </p>
          </div>

          {/* Dynamic Content */}
          <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {activeSolution.image1 && (
              <div className="flex flex-col items-center w-full lg:w-1/2 rounded-md bg-[#A1D2CE] p-4">
                <h3 className="text-center font-saira font-medium text-xl text-[#111]">
                  Set Your Priority
                </h3>
                <img
                  src={activeSolution.image1}
                  alt={activeSolution.name}
                  className="h-auto w-full rounded-md"
                />
              </div>
            )}
            {activeSolution.image2 && (
              <div className="flex flex-col items-center w-full lg:w-1/2 rounded-md bg-[#A8B6E5] p-4">
                <h3 className="text-center font-saira font-medium text-xl text-[#111]">
                  Collaboration
                </h3>
                <p className="text-center font-arimo font-normal text-sm text-[#5f646d]">
                  Enhance teamwork and track updates.
                </p>
                <img
                  src={activeSolution.image2}
                  alt={activeSolution.name}
                  className="h-auto w-2/3 mt-4 rounded-md"
                />
              </div>
            )}
          </div>

          {activeSolution.image3 && (
            <div className="mt-8 flex justify-center flex-col sm:flex-row items-center bg-[#EAB5B5] p-4 rounded-md">
              <div className="text-center">
                <h3 className="font-saira font-medium text-xl text-[#111]">
                  Track Your Progress
                </h3>
                <p className="font-arimo font-normal text-sm text-[#5f646d]">
                  Stay on top of your tasks and optimize workflow.
                </p>
              </div>
              <img
                src={activeSolution.image3}
                alt={activeSolution.name}
                className="h-72 w-72 ml-4 rounded-md"
              />
            </div>
          )}

          <h1 className="mt-4 flex items-center justify-start gap-2">
            <p className="font-medium text-[#405263] flex items-center font-saira">
              Explore all?
            </p>
            <Link to="/">
              <img src={logo2} alt="logo" className="h-6 w-12" />
            </Link>
            <RiShareBoxFill className="text-[#405263]" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
