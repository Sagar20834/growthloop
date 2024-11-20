import React from "react";
import { FaArrowRight, FaRegLightbulb, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import resources_toptech from "../../assets/resources_toptechanique.svg";
import resources_ai from "../../assets/resources_AI.svg";
import resources_women from "../../assets/resources_womenreading.svg";
import resources_code from "../../assets/resources_code.svg";
import { FiBook } from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

const ResourcesMenus = ({ closeMenu }) => {
  const solutions = [
    {
      title: "Blogs & News",
      url: "/blog",
      description: "The latest industry news and info",
      icon: (
        <FiBook
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Case Study",
      url: "/blog",
      description: "How our products help you",
      icon: (
        <MdOutlineLibraryBooks
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Learn",
      url: "/blog",
      description: "Explore new ideas",
      icon: (
        <PiNotePencil
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Videos",
      url: "/blog",
      description: "New features & tutorials",
      icon: (
        <CiYoutube
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "E Books",
      url: "/blog",
      description: "Online books",
      icon: (
        <FiBookOpen
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
  ];

  const stayingUptodate = [
    {
      name: "How To Use E-commerce Analytics For Your Online Store?",
      url: "/",
      img: resources_toptech,
    },
    {
      name: "Build Smarter Apps with Artificial Intelligence and Machine Learning",
      url: "/",
      img: resources_ai,
    },

    {
      name: "Build Smarter Apps with Artificial Intelligence and Machine Learning with Pyhton",
      url: "/",
      img: resources_women,
    },
  ];

  return (
    <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.08),0_12px_24px_0_rgba(0,0,0,0.08)] bg-white rounded-lg min-w-[1000px] min-h-[450px] font-maven">
      <div className=" flex justify-between items-start gap-5  p-4">
        {/* Menus Section */}
        <div className="flex flex-col w-[80%]">
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
          <div className="ml-4">
            <h2 className="text-xs font-medium mb-4 uppercase text-[#5F646D]">
              What’s new?
            </h2>
            <div className="bg-[#F1F4F8] p-1 rounded">
              <div className="w-full flex gap-4">
                <img
                  src={resources_code}
                  alt="resources_code"
                  className="h-[106px] w-[206px]"
                />
                <div>
                  <h3 className="text-sm font-semibold">
                    We have just released an update!
                  </h3>
                  <p className="text-xs text-[#5F646D]">
                    Check out the tutorials of our new upgraded features
                  </p>
                  <Link
                    to="/video"
                    className="flex gap-1.5 items-center text-[#1C639E]"
                  >
                    <p className=" text-sm mt-4">Play Video</p>
                    <FaArrowRight size={14} className="mt-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stay up to date  Section */}
        <div className="p-4  ">
          <div className=" border-l-2 px-6 rounded-md">
            <h2 className="text-xs font-medium mb-4 uppercase text-[#5F646D]">
              staying Up to date{" "}
            </h2>
            <div className="text-sm font-medium leading-tight ">
              {stayingUptodate.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center mb-4 gap-1 h-24 "
                >
                  <div className="mt-1 ">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="max-h-[67px] min-w-[120px]"
                    />
                  </div>
                  <Link
                    to={"/"}
                    className="font-medium text-base leading-tight"
                  >
                    <h3>{item.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
            <Link
              to="/stayinguptodate"
              className="flex gap-1.5 items-baseline text-[#1C639E]"
            >
              <p className=" text-sm mt-2">Discover More</p>
              <FaArrowRight size={14} className="mt-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesMenus;
