import React from "react";
import logo from "../../assets/GLPNG.png";

import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" font-Alata font-semibold shadow-lg bg-footer-gradient from-[#E1F2FF60] to-[#CDE9FFA5]">
      <div className="lg:px-[100px] md:px-[60px]  pt-10 px-4 flex  flex-col">
        {/* first div */}
        <div className="">
          <div className="flex gap-14 md:flex-col sm:flex-col lg:flex-row  flex-col w-full">
            <img
              src={logo}
              alt="GrowthLoop"
              className="h-12 w-auto hidden lg:block"
            />
            <p className="font-medium leading-[167%] capitalize text-sm  ">
              GrowthLoop, where innovation meets excellence in IT solutions. We
              are a dynamic IT company dedicated to providing comprehensive
              business solutions through software development, website design,
              e-commerce solutions, digital marketing, and branding services.
            </p>
          </div>
          <div className="mt-10 border-t  border-[#1A75BB] text-[#1A75BB]"></div>
        </div>
        {/* second div */}
        <div className="text-black font-alata">
          <div className="mt-5 grid   lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  ">
            <div>
              <h1 className="font-semibold text-xl mb-5">Contact GrowthLoop</h1>
              <div>
                <div className="mb-10 font-normal text-[15px] leading-[167%] text-black">
                  <h1 className="font-semibold text-base">Nepal Office</h1>
                  <a
                    href="tel:+97715923246"
                    className="text-blue-600 hover:underline block mb-1"
                  >
                    Landline: 01-5923246
                  </a>
                  <a
                    href="tel:+9779851133324"
                    className="text-blue-600 hover:underline block mb-1"
                  >
                    Mobile: +977 985-1133324
                  </a>
                  <p>support@growthloop.com</p>
                  <p>Kathmandu, Nepal</p>
                  <p className="text-[#1a75bb] flex items-center gap-1 cursor-pointer">
                    View Map <RiShareBoxFill className="text-[#1a75bb]" />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-xl mb-5">Solutions</h1>
              <div className="mb-4">
                <ul className=" font-normal text-[15px] leading-[167%] capitalize text-black">
                  <li> Software Development</li>
                  <li>Web Development</li>
                  <li>E-commerce</li>
                  <li>Mobile App Development</li>
                  <li>Digital Marketing </li>
                </ul>
              </div>
              <h1 className="font-semibold text-xl mb-5">Products</h1>
              <div className="mb-4">
                <ul className=" font-normal text-[15px] leading-[167%] capitalize text-black">
                  <li>Enterprise Resource Planning</li>
                  <li> College Management System</li>
                  <li>student Management system</li>
                  <li>Learning Managemnet System</li>
                  <li>salon & Spa Management system</li>
                  <li>Corporate Management system </li>
                  <li>Agency Managemnet System</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-xl mb-5">Techonology</h1>
              <div>
                <ul className=" font-normal text-[15px] leading-[167%] capitalize text-black">
                  <li>ReactJS</li>
                  <li>Angular</li>
                  <li>Laravel</li>
                  <li>HTML / CSS</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-xl mb-5">Company</h1>
              <div className="mb-4">
                <ul className=" font-normal text-[15px] leading-[167%] capitalize text-black">
                  <li>About Us</li>
                  <li>How We Work</li>
                  <li>Client Stories</li>
                  <li>Careers</li>
                  <li>Corporate Social Responsibility</li>
                </ul>
              </div>
              <h1 className="font-semibold text-xl mb-5">Resources</h1>
              <div className="mb-4">
                <ul className=" font-normal text-[15px] leading-[167%] capitalize text-black">
                  <li>Blogs</li>
                  <li>Videos</li>
                  <li>Ebooks</li>
                  <li>Case Study</li>
                  <li>Learn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div>
            <div className="flex">
              <h1>Contact Us</h1>
              <h1>Contact Us</h1>
              <h1>Contact Us</h1>
              <h1>Contact Us</h1>
              <h1>Contact Us</h1>
            </div>
          </div> */}
          <div className="mt-10 border-t  border-[#1A75BB] text-[#1A75BB]"></div>
        </div>
        {/* 3rd div */}
        <div className="flex justify-between font-semibold text-base mt-5 flex-col lg:flex-row">
          <div className="flex justify-between gap-12 flex-col lg:flex-row  md:flex-row sm:flex-row">
            <div>
              <h1>GrowthLoop Pvt. Ltd. </h1>
            </div>
            <div>
              <h1>© 2024 All rights reserved. </h1>
              <h1 className="text-[#1a75bb]">
                Terms & Conditions | Privacy Policy{" "}
              </h1>
            </div>
          </div>
          <div>
            <div className="my-5 flex gap-1">
              <FaFacebookSquare className="text-[#072135]   p-1 rounded-full  h-7 w-7" />
              <FaLinkedin className="text-[#072135]   p-1 rounded-full  h-7 w-7" />
              <FaInstagramSquare className="text-[#072135]   p-1 rounded-full  h-7 w-7" />
              <FaFacebookMessenger className="text-[#072135]   p-1 rounded-full  h-7 w-7" />
              <FaWhatsapp className="text-[#072135]   p-1 rounded-full  h-7 w-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
