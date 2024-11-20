import React from "react";
import { FaArrowRight, FaBusinessTime, FaRegFileCode } from "react-icons/fa";
import { PiGlobeLight } from "react-icons/pi";
import { TbDeviceMobileCog } from "react-icons/tb";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import image from "../../assets/Product_Megamenus_continus.svg";
import { FaCircleCheck } from "react-icons/fa6";
import xeroicon from "../../assets/xero.svg";
import quickBookicon from "../../assets/Quickbook.svg";
import twilloicon from "../../assets/Twillo.svg";
import surveymonkeyicon from "../../assets/Surveymonkey.svg";
import stripeicon from "../../assets/stripe.svg";
import threecxicon from "../../assets/3cx.svg";
import trellicon from "../../assets/Tools_Trell.svg";
import bootstrapicon from "../../assets/Tools_Bootstrap.svg";
import cssicon from "../../assets/Tools_CSS.svg";
import giticon from "../../assets/Tools_GIT.svg";
import htmlicon from "../../assets/Tools_HTML5.svg";
import jsicon from "../../assets/Tools_JS.svg";
import mysqlicon from "../../assets/Tools_MYSQL.svg";
import phpicon from "../../assets/Tools_Php.svg";
import pythonicon from "../../assets/Tools_python.svg";
import reacticon from "../../assets/Tools_ReactJS.svg";
import vscodeicon from "../../assets/Tools_VSCODE.svg";
import wpicon from "../../assets/Tools_WP.svg";
import { TbGraph } from "react-icons/tb";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { PiGraduationCap } from "react-icons/pi";
import { PiBookOpenUserBold } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { RiBuildingLine } from "react-icons/ri";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaSquarespace } from "react-icons/fa6";

const ProductMenus = ({ closeMenu }) => {
  const integratedProducts = [
    {
      title: "Enterprise Resource Planning ",
      url: "/blog",
      description: "ERP solution business ",
      icon: (
        <FaBusinessTime
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "College Management System ",
      url: "/blog",
      description: "ERP solution for colleges ",
      icon: (
        <HiOutlineBuildingLibrary
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Student Management System",
      url: "/blog",
      description: "Information tracking of student",
      icon: (
        <PiGraduationCap
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Learning Management System",
      url: "/blog",
      description: "ERP solution for effective learning system",
      icon: (
        <PiBookOpenUserBold
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Agency Management System",
      url: "/blog",
      description: "Education Consultancy",
      icon: (
        <FaRegHandshake
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
  ];
  const serviceProducts = [
    {
      title: "Cooperate Management System",
      url: "/blog",
      description: "ERP for financing  ",
      icon: (
        <TbGraph
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Strata Management Software",
      url: "/blog",
      description: "Building, Unit Owner and Cleaner",
      icon: (
        <RiBuildingLine
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Care Management Software",
      url: "/blog",
      description: "Aged Care & NDIS",
      icon: (
        <FaHandHoldingHeart
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
    {
      title: "Salon & Spa Management System",
      url: "/blog",
      description: "Easy appointment scheduling ",
      icon: (
        <FaSquarespace
          size={34}
          className="text-[#2E3FFF] mt-1 rounded-full p-1.5 bg-[#EDF3FF] "
        />
      ),
    },
  ];

  return (
    <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.08),0_12px_24px_0_rgba(0,0,0,0.08)] bg-white rounded-lg min-w-[1100px] min-h-[500px]">
      <div className=" flex justify-between items-start gap-6  p-4 font-maven">
        <div className="mt-1 flex">
          {/*1st div   menus */}
          <div>
            {/* Integrated Academic Products  and Service Oriented Products */}
            <div className="flex gap-2">
              {/* Integrated Academics */}
              <div>
                <div className="w-full">
                  <h1 className=" ml-6 font-maven font-semibold text-xs uppercase text-[#5f646d]">
                    Integrated Academic Products
                  </h1>
                  <div className="grid grid-cols-1 w-full  ">
                    {integratedProducts.map((integratedProduct) => (
                      <Link
                        to={integratedProduct.url}
                        key={integratedProduct.title}
                        onClick={closeMenu}
                        className="flex items-start gap-2 p-3 mx-2 hover:bg-cyan-100 rounded-2xl"
                      >
                        <div className="">{integratedProduct.icon}</div>
                        <div>
                          <h3 className="text-base font-semibold">
                            {integratedProduct.title}
                          </h3>
                          <p className="text-[#5F646D]">
                            {integratedProduct.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Service Oriented */}
              <div>
                <div className="w-full">
                  <h1 className=" ml-6 font-maven font-semibold text-xs uppercase text-[#5f646d]">
                    Service Oriented Products
                  </h1>
                  <div className="grid grid-cols-1 w-full  ">
                    {serviceProducts.map((serviceProduct) => (
                      <Link
                        to={serviceProduct.url}
                        key={serviceProduct.title}
                        onClick={closeMenu}
                        className="flex items-start gap-2 p-3 mx-2 hover:bg-cyan-100 rounded-2xl"
                      >
                        <div className="">{serviceProduct.icon}</div>
                        <div>
                          <h3 className="text-base font-semibold">
                            {serviceProduct.title}
                          </h3>
                          <p className="text-[#5F646D]">
                            {serviceProduct.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Continuous Enhancement */}
            <div>
              <h1 className=" ml-6 my-3 font-maven font-semibold text-xs uppercase text-[#5f646d]">
                Continuous Enhancement
              </h1>
              <div className="flex justify-start gap-4 items-center">
                <div>
                  <img
                    src={image}
                    alt="Product_Megamenus_continus"
                    className="bg-[#F1F4F8] py-2 px-1 h-[105px] w-[190px] ml-10 rounded-sm"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold capitalize">
                    client system
                  </p>
                  <div className="text-[#5F646D]">
                    <p className="flex gap-1 items-center mb-2 mt-1">
                      {" "}
                      <FaCircleCheck className=" text-[#2f3eff]" />
                      Update bugs and errors
                    </p>
                    <p className="flex gap-1 items-center">
                      <FaCircleCheck className=" text-[#2f3eff]" />
                      Advancement of features
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/connect"
              className="flex gap-1.5 items-center text-[#1C639E] mt-2"
            >
              <p className=" ml-4 text-sm mt-2">See all Product Updates</p>
              <FaArrowRight size={14} className="mt-2" />
            </Link>
          </div>
          {/* 2nd div icons  */}
          <div className="flex flex-col -mt-4">
            <div className="border-l-2 p-4 font-maven font-medium text-xs capitalize text-black">
              <h1 className="   text-xs uppercase text-[#5f646d]">
                Integrate with US
              </h1>
              <div className="grid grid-cols-2 gap-4 justify-start  mt-4">
                <div className="flex justify-start items-center gap-4">
                  <img src={xeroicon} alt="xero-logo" />
                  <p>Xero</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <img src={quickBookicon} alt="xero-logo" />
                  <p>Quick book</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <img src={twilloicon} alt="xero-logo" />
                  <p>Twilio</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <img src={surveymonkeyicon} alt="xero-logo" />
                  <p>Survey monkey</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <img src={stripeicon} alt="xero-logo" />
                  <p>Stripe</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <img src={threecxicon} alt="xero-logo" />
                  <p>3CX</p>
                </div>
              </div>
              <Link
                to="/connect"
                className="flex gap-1.5 items-center text-[#1C639E] mt-2"
              >
                <p className=" text-sm mt-2">View More</p>
                <FaArrowRight size={14} className="mt-2" />
              </Link>
            </div>
            <div className="border-l-2  p-1 mt-6 font-maven font-medium text-xs capitalize text-black">
              <h1 className="  ml-3 text-xs uppercase text-[#5f646d]">
                Tool and Platforms
              </h1>
              <div className="grid grid-cols-3 gap-2 justify-center  mt-4">
                <div className="flex justify-center items-center gap-4">
                  <img src={trellicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={pythonicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={wpicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={jsicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={bootstrapicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={cssicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={htmlicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={giticon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={mysqlicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={vscodeicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={phpicon} alt="xero-logo" />
                </div>
                <div className="flex justify-center items-center gap-4">
                  <img src={reacticon} alt="xero-logo" />
                </div>
              </div>
              <Link
                to="/connect"
                className="flex gap-1.5 items-center text-[#1C639E] mt-2"
              >
                <p className=" ml-4 text-sm mt-2">View More</p>
                <FaArrowRight size={14} className="mt-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMenus;
