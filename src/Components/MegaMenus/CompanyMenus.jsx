import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { LuUserCheck2 } from "react-icons/lu";
import { PiNotepadBold } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";
import { PiPlantBold } from "react-icons/pi";

const CompanyMenus = ({ closeMenu }) => {
  const solutions = [
    {
      title: "About Us",
      url: "/about",
      description: "Learn about us ",
      icon: (
        <LuUserCheck2
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Client Stories",
      url: "/blog",
      description: "Valuable Feedback",
      icon: (
        <BiLike
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "How we work",
      url: "/blog",
      description: "Work environment ",
      icon: (
        <PiNotepadBold
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Careers",
      url: "/blog",
      description: "Join our team",
      icon: (
        <IoBagAddOutline
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Cooperate Social Responsibility",
      url: "/blog",
      description: "We as a part of the society",
      icon: (
        <PiPlantBold
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
  ];

  return (
    <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.08),0_12px_24px_0_rgba(0,0,0,0.08)] bg-white rounded-lg min-w-[900px] min-h-[300px] font-maven">
      <div className=" flex justify-between items-start gap-12  p-4">
        {/* Menus Section */}
        <div className="flex ">
          <div className="w-full">
            <div className="grid grid-cols-2 w-full  ">
              {solutions.map((solution) => (
                <Link
                  to={solution.url}
                  key={solution.title}
                  onClick={closeMenu}
                  className="flex items-start gap-2 p-2 m-2 hover:bg-cyan-100 rounded-2xl"
                >
                  <div className="">{solution.icon}</div>
                  <div>
                    <h3 className="text-base font-semibold">
                      {solution.title}
                    </h3>
                    <p className="text-[#5F646D]">{solution.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-4 ">
            <div className="bg-[#EDF3FF] h-64 w-64 p-8">
              <p className="text-center font-medium text-base text-[#313030] font-saira">
                Innovative solutions for a digital world - We, your technology
                partner."
              </p>
              <div className="flex gap-2 mt-4 justify-between items-center text-[#2F3EFF] font-saira">
                <button className="">Simplicity</button>
                <button>Growth</button>
                <button>Trust</button>
              </div>
              <div className="flex justify-center items-center gap-3 text-[#057350] mt-4 border p-2 border-[#03b399] rounded-lg font-maven">
                <FaPhone /> Enquire With Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMenus;
