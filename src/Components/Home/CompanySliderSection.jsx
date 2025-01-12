import React, { useState, useEffect, useRef } from "react";
import gmail from "../../assets/Gmail.svg";
import client1 from "../../assets/Client.jpg";
import client2 from "../../assets/Client2.png";
import client3 from "../../assets/Client3.jpg";
import client4 from "../../assets/Client4.png";
import client5 from "../../assets/Client5.png";
import client6 from "../../assets/Client6.png";
import client7 from "../../assets/National.png";
import { RiShareBoxFill } from "react-icons/ri";
import logo2 from "../../assets/GLJPG.jpg";
import { Link } from "react-router-dom";

const CompanySliderSection = ({ bg }) => {
  const partneredCompanies = [
    {
      name: "Jaleshwor",
      logo: client1,
      url: "#1",
    },
    {
      name: "Kalika",
      logo: client2,
      url: "https://kmti.edu.np/",
    },
    {
      name: "Khanepani",
      logo: client3,
      url: "#3",
    },
    {
      name: "Shivsakti",
      logo: client4,
      url: "https://shivshaktinepal.com/",
    },
    {
      name: "Sanskar",
      logo: client5,
      url: "#5",
    },
    {
      name: "Rivera",
      logo: client6,
      url: "https://www.riviera.edu.np/",
    },
    {
      name: "National",
      logo: client7,
      url: "https://nationalhealthcare.com.np/",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const scrollSpeed = 2;

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (!isHovered && sliderRef.current) {
        sliderRef.current.scrollLeft += scrollSpeed;
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div className={`${bg} overflow-hidden px-4 sm:px-8 md:px-20`}>
      <div className="flex flex-col justify-center items-center mt-6 sm:mt-12">
        <div className="font-semibold text-sm sm:text-base text-[#0d80d8] font-maven px-[1px] py-[1px] rounded-md bg-gradient-to-r from-[#0D80D8] via-[#5fafec] to-black mb-3 sm:mb-4">
          <div className={`bg-white p-1 rounded-[4px]`}>
            TRUSTED BY INDUSTRY LEADERS
          </div>
        </div>
        <div className="font-arimo font-normal text-sm sm:text-lg text-[#5f646d] mb-6 sm:mb-8 text-center">
          Discover the companies we've partnered with to create innovative
          solutions
        </div>

        {/* Slider Section */}
        <div
          className="flex overflow-hidden whitespace-nowrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={sliderRef}
          style={{ width: "100%" }}
        >
          {[...partneredCompanies, ...partneredCompanies].map((company, i) => (
            <a
              key={i}
              href={company.url}
              className="flex-shrink-0 w-[40%] sm:w-1/5 p-2 sm:p-4"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 sm:w-24 h-auto mx-2 sm:mx-4 transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row font-semibold items-center justify-between  mb-10 sm:mb-20 gap-6 sm:gap-24 w-full">
          <div className="flex  flex-col sm:flex-row sm:mx-auto mt-8 gap-4">
            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-[#1a75bb] text-white rounded-lg shadow hover:bg-blue-600 transition-transform duration-500 transform hover:scale-105 font-maven">
              Start Your Project Today
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-2 border border-[#39CF2B] text-[#1a75bb] rounded-lg shadow hover:bg-green-600 hover:text-white transition-transform duration-500 transform hover:scale-105 font-maven">
              Explore Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySliderSection;
