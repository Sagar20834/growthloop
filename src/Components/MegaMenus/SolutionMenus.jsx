import React from "react";
import { FaArrowRight, FaRegLightbulb, FaShoppingBag } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { FaRegFileCode } from "react-icons/fa";
import { PiGlobeLight } from "react-icons/pi";
import { TbDeviceMobileCog } from "react-icons/tb";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { LiaFileCode } from "react-icons/lia";
import { PiShoppingCartBold } from "react-icons/pi";

import { Link } from "react-router-dom";

const SolutionMenus = ({ closeMenu }) => {
  const solutions = [
    {
      title: "Software Development",
      url: "/blog",
      description: "Build computer programs",
      icon: (
        <LiaFileCode
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Web Development",
      url: "/blog",
      description: "Build computer programs",
      icon: (
        <PiGlobeLight
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Mobile App Development",
      url: "/blog",
      description: "Build computer programs",
      icon: (
        <TbDeviceMobileCog
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Digital Marketing",
      url: "/blog",
      description: "Build computer programs",
      icon: (
        <TiSocialDribbbleCircular
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "E-commerce Solution",
      url: "/blog",
      description: "Build computer programs",
      icon: (
        <PiShoppingCartBold
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1 bg-[#EDF3FF] "
        />
      ),
    },
  ];

  const insights = [
    {
      name: "How To Use E-commerce Analytics For Your Online Store?",
      url: "/",
    },
    {
      name: "Build Smarter Apps with Artificial Intelligence and Machine Learning",
      url: "/",
    },

    {
      name: "Build Smarter Apps with Artificial Intelligence and Machine Learning with Pyhton",
      url: "/",
    },
  ];

  return (
    <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.08),0_12px_24px_0_rgba(0,0,0,0.08)] bg-white rounded-lg min-w-[1000px] min-h-[309px] font-maven">
      <div className=" flex justify-between items-start gap-12  p-4">
        {/* Menus Section */}
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
                  <h3 className="text-base font-semibold">{solution.title}</h3>
                  <p className="text-[#5F646D]">{solution.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Insight Section */}
        <div className="p-4 ">
          <div className="bg-[#F1F4F8] p-6 rounded-md">
            <h2 className="text-xs font-medium mb-4 uppercase text-[#5F646D]">
              Insights{" "}
            </h2>
            <div className="text-sm font-medium leading-tight ">
              {insights.map((insight) => (
                <div
                  key={insight.name}
                  className="flex items-start mb-4 gap-1 "
                >
                  <div className="mt-1 ">
                    <FaRegLightbulb size={16} className=" text-[#2E3FFF] " />
                  </div>
                  <Link
                    to={"/"}
                    className="font-semibold text-xs leading-tight"
                  >
                    <h3>{insight.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
            <Link
              to="/insights"
              className="flex gap-1.5 items-center text-[#1C639E]"
            >
              <p className=" text-sm mt-2">See all</p>
              <FaArrowRight size={14} className="mt-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionMenus;
