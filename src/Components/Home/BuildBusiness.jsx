import React from "react";
import analysis from "../../assets/analysis1.gif";
import heart from "../../assets/heart.gif";
import book from "../../assets/book.gif";
import code from "../../assets/code.gif";
import business1 from "../../assets/business 1.svg";
import eductaion from "../../assets/Education.svg";
import tech from "../../assets/tech 1.svg";
import healthcare from "../../assets/healthcare 2.svg";

const BuildBusiness = () => {
  return (
    <>
      <div className="mt-8 px-4 sm:px-8 lg:px-24">
        <div className="flex flex-col justify-center items-center">
          <div className="font-semibold text-base text-[#0d80d8] font-maven px-[2px] py-[1px] rounded-md bg-gradient-to-r from-[#0D80D8] via-[#5fafec] to-black mb-4">
            <div className="bg-white py-1 px-2 rounded-[4px] text-center">
              Build business resilience & thrive in an era of change
            </div>
          </div>
          <div className="font-arimo font-normal text-sm sm:text-lg text-[#5f646d] mb-8 text-center">
            Transforming Business Landscapes with Customized Solutions in Every
            Sector
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            {/* Business Section */}
            <div className="flex justify-center flex-col items-center">
              <div className="pl-4 pt-8 border w-full text-center">
                <img
                  src={analysis}
                  alt="analysis"
                  className="w-12 h-12 mx-auto text-[#0d80d8]"
                />
                <div className="font-medium my-5 text-base lg:text-[22px] uppercase font-saira text-[#111]">
                  Business
                </div>
              </div>
              <img
                src={business1}
                alt="business1"
                className="opacity-85 hover:opacity-100 hover:brightness-110 hover:contrast-125 hover:saturate-150 transition-all duration-300 ease-in-out shadow-transparent w-full"
              />
            </div>

            {/* Education Section */}
            <div className="flex justify-center flex-col items-center">
              <div className="pl-4 pt-8 border w-full text-center">
                <img
                  src={book}
                  alt="book"
                  className="w-12 h-12 mx-auto text-[#0d80d8]"
                />
                <div className="font-medium my-5 text-base lg:text-[22px] uppercase font-saira text-[#111]">
                  Education
                </div>
              </div>
              <img
                src={eductaion}
                alt="education"
                className="opacity-85 hover:opacity-100 hover:brightness-110 hover:contrast-125 hover:saturate-150 transition-all duration-300 ease-in-out shadow-transparent w-full"
              />
            </div>

            {/* Tech Section */}
            <div className="flex justify-center flex-col items-center">
              <div className="pl-4 pt-8 border w-full text-center">
                <img
                  src={code}
                  alt="code"
                  className="w-12 h-12 mx-auto text-[#0d80d8]"
                />
                <div className="font-medium my-5 text-base lg:text-[22px] uppercase font-saira text-[#111]">
                  Tech
                </div>
              </div>
              <img
                src={tech}
                alt="tech"
                className="opacity-85 hover:opacity-100 hover:brightness-110 hover:contrast-125 hover:saturate-150 transition-all duration-300 ease-in-out shadow-transparent w-full"
              />
            </div>

            {/* Healthcare Section */}
            <div className="flex justify-center flex-col items-center">
              <div className="pl-4 pt-8 border w-full text-center">
                <img
                  src={heart}
                  alt="heart"
                  className="w-12 h-12 mx-auto text-[#0d80d8]"
                />
                <div className="font-medium my-5 text-base lg:text-[22px] uppercase font-saira text-[#111]">
                  Healthcare
                </div>
              </div>
              <img
                src={healthcare}
                alt="healthcare"
                className="opacity-85 hover:opacity-100 hover:brightness-110 hover:contrast-125 hover:saturate-150 transition-all duration-300 ease-in-out shadow-transparent w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildBusiness;
