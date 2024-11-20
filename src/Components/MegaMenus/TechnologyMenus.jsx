import React from "react";
import { MdAppSettingsAlt } from "react-icons/md";
import { FaRegFileCode, FaWordpressSimple } from "react-icons/fa";

import { AiOutlineCode } from "react-icons/ai";
import { PiAndroidLogo } from "react-icons/pi";
import php from "../../assets/php.svg";
import python from "../../assets/pyhton.svg";
import mysql from "../../assets/mysql.svg";
import devops from "../../assets/devops.svg";
import QA from "../../assets/QA.svg";
import react from "../../assets/react copy.svg";
import js from "../../assets/js.svg";
import jquery from "../../assets/jquery.svg";
import html5 from "../../assets/html5.svg";
import vue from "../../assets/vue.svg";
import uiux from "../../assets/uiux copy.svg";
import branding from "../../assets/branding.svg";
import figma from "../../assets/figma.svg";
import adobedx from "../../assets/adobe.svg";
import angular from "../../assets/angular.png";

import { FiFigma } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMdPricetag } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { FaCircleNotch } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";

import { RiCodeBoxLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiPaintLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import csharp from "../../assets/csharp.png";

const TechnologyMenus = () => {
  const industrialtechnologies = [
    {
      category: "Mobile",
      imgIcon: <AiOutlineMobile size={20} />,
      services: [
        { name: "Iphone App Development", icon: <FaApple /> },
        { name: "Android App Development", icon: <PiAndroidLogo /> },
        {
          name: "Hybrid App Development",
          icon: <MdAppSettingsAlt />,
        },
      ],
    },
    {
      category: "Software/ Progressive Web Apps",
      imgIcon: <RiCodeBoxLine size={20} />,
      services: [
        { name: "JavaScript", img: js },
        {
          name: "Laravel/ PHP",
          img: php,
        },
        {
          name: "C#",
          img: csharp,
        },
        { name: "Python", img: python },
        { name: "MySql", img: mysql },
        { name: "DevOps", img: devops },
        { name: "Quality Assurance", img: QA },
      ],
    },
    {
      category: "Frontend Development",
      imgIcon: <AiOutlineCode size={20} />,
      services: [
        { name: "React", img: react },
        { name: "Angular", img: angular },

        { name: "JQuery", img: jquery },
        { name: "HTML/CSS", img: html5 },
        { name: "Vue.js", img: vue },
      ],
    },
    {
      category: "Website/ E-commerce",
      imgIcon: <MdOutlineShoppingBag size={20} />,
      services: [
        {
          name: "WordPress",
          icon: <FaWordpressSimple className="text-sky-500" />,
        },
      ],
    },
    {
      category: "Design",
      imgIcon: <RiPaintLine size={20} />,
      services: [
        { name: "UI/UX", img: uiux },
        { name: "Branding", img: branding },
        { name: "Figma", img: figma },
        { name: "Adobe XD", img: adobedx },
      ],
    },
    {
      category: "Digital Marketing",
      imgIcon: <FaGlobe size={20} />,
      services: [
        { name: "PCC" },
        { name: "SEO" },
        { name: "Social" },
        { name: "Content" },
      ],
    },
  ];

  return (
    <>
      <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.08),0_12px_24px_0_rgba(0,0,0,0.08)] bg-white rounded-lg min-w-[1100px] min-h-[500px]  font-maven">
        <div className="flex flex-col p-6">
          <h1 className="uppercase text-[#5f646d] font-medium text-xs mb-2">
            Industrial Technologies
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {industrialtechnologies.map((item, index) => (
              <div key={index} className="mb-1">
                <div className="flex gap-2 items-center">
                  <div className="bg-[#EDF3FF] p-1 rounded-full text-[#2E3FFF]">
                    {item.imgIcon}
                  </div>
                  <h2 className="text-black text-base font-semibold">
                    {item.category}
                  </h2>
                </div>
                <ul>
                  {item.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center mb-1 ml-10 text-[#5F646D]"
                    >
                      <span className="mr-2 text-2xl text-black">
                        {service.icon ? (
                          service.icon
                        ) : service.img ? (
                          <img
                            src={service.img}
                            alt={service.name}
                            className="h-7 w-7"
                          />
                        ) : null}
                      </span>
                      {service.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#EDF3FF]  p-2 rounded-b-lg font-medium">
          <div className="flex justify-between gap-4  py-3 px-4 ">
            <div>
              <Link to="/contact" className="hover:underline  text-blue-500">
                Ready to get started? Contact Us Now
              </Link>
            </div>
            <div className="flex justify-between gap-12">
              <div className="flex items-center">
                <AiFillPhone className="mr-2 text-blue-500" />
                041 445 546
              </div>
              <div className="flex items-center">
                <IoChatbubbleOutline className="mr-2 text-blue-500" />
                Chat Support
              </div>
              <div className="flex items-center">
                <FaDollarSign className="mr-2 text-blue-500" />
                Pricing
              </div>
              <div className="flex items-center">
                <FaRegPlayCircle className="mr-2 text-blue-500" />
                Watch Demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyMenus;
