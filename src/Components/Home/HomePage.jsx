import React, { useState, useEffect } from "react";
import first from "../../assets/sliderfirstt.svg";
import second from "../../assets/slidersecond.svg";
import third from "../../assets/GLERPNew.png";
import fourth from "../../assets/fourthh.svg";
import logo from "../../assets/GLPNG.png";
import { Link } from "react-router-dom";
import { RiShareBoxFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

const HomePage = () => {
  const slides = [
    {
      topText: "YOUR PARTNER IN IT AND DIGITAL MARKETING SOLUTIONS",
      title1: "Assisting Your Business with updated",
      title2: "Customized Tech Solutions",
      description:
        "Let’s bring life to your business with technical and marketing solutions",
      image: first,
      btn1: "Get started",
      btn2: "Learn more",
    },
    {
      topText: "STAY AHEAD WITH OUR EXPERT CONSULTING",
      title1: "Guiding your Company IT Strategy ",
      title2: " success",
      description: "Get expert advice that aligns with your business goals",
      image: second,
      btn1: "Talk to Our Expert",
      btn2: "5 Star",
    },
    {
      topText: "DATA-DRIVEN INSIGHTS",
      title1: "Transform your Data into the ",
      title2: "Actionable Strategies",
      description:
        "Leverage analytics to make informed decisions and drive growth",
      image: third,
      btn1: "Start Analyzing",
      btn2: "See Our Tools",
    },
    {
      topText: "SECURITY AT THE HEART OF YOUR DIGITAL TRANSFORMATION",
      title1: "Protect your Assets with Robust ",
      title2: "Cybersecurity Solutions",
      description:
        "Stay safe and secure with our tailored IT security services",
      image: fourth,
      btn1: "Get Secured Now",
      btn2: "Learn About Our Approach",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const handleSlideChange = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000); // Slide changes every 2 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="p-2 w-full h-[600px] sm:h-screen flex justify-center relative z-10 bg-custom-gradient">
      {/* Carousel Content */}
      <div
        className={`flex flex-col md:flex-row items-center gap-4  md:gap-24 justify-start md:py-8 md:px-12 p-4 transition-opacity duration-200 transform ${
          fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          transition:
            "transform 0.9s ease , opacity 0.5s ease, width 0.9s ease",
        }}
      >
        {/* Left Side Text */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left text-white md:w-1/2  md:mb-0">
          {/* Animated Top Text */}
          <p className="headings-gradient border border-[#0D80D8] text-[#0D80D8] font-light sm:font-bold rounded-lg px-2 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6 transition-all ease-in-out  ">
            {slides[currentSlide].topText}
          </p>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium md:font-bold mb-2 sm:mb-4 transition-transform duration-500 font-saira">
            {slides[currentSlide].title1}
            <br />
            {currentSlide === 1 ? "Success" : ""}
            <span className="text-[#0D80D8]">
              {slides[currentSlide].title2}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg mb-4 text-center transition-transform duration-500 font-arimo px-2">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {/* Buttons */}
            <button className="px-4 py-2 bg-[#1a75bb] text-white rounded-lg shadow hover:bg-blue-600 transition-transform duration-500 transform hover:scale-105 font-maven text-sm sm:text-base">
              {slides[currentSlide].btn1}
            </button>

            {currentSlide === 1 ? (
              <div className="text-[#FFCE31] flex items-center gap-1 text-sm sm:text-base">
                <FcGoogle /> <span>5.0</span> <FaStar /> <FaStar /> <FaStar />
                <FaStar /> <FaStar />
              </div>
            ) : (
              <button className="px-4 py-2 border border-[#39CF2B] text-[#1a75bb] rounded-lg shadow hover:bg-green-600 hover:text-white transition-transform duration-500 transform hover:scale-105 font-maven text-sm sm:text-base">
                {slides[currentSlide].btn2}
              </button>
            )}
          </div>

          {currentSlide === 0 ? (
            <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
              <span className="text-[#405263] font-medium font-saira">
                Only need a few searches?
              </span>
              <Link to={"/"}>
                <img src={logo} alt="logo2" className="h-6 w-auto" />
              </Link>
              <RiShareBoxFill />
            </div>
          ) : null}
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-[40%] flex items-center">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].topText}
            className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-full md:w-auto"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 right-6 flex justify-start items-end space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`cursor-pointer w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-110"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
