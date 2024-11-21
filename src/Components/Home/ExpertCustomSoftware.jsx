import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const url = "https://growthloopbackend.onrender.com";

const ExpertCustomSoftware = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${url}/api/send-email`, data);
      if (response.status === 200) {
        toast.success("Your response was sent successfully");
        reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="w-full bg-custom-gradient">
      <div className="max-w-7xl mx-auto p-6 sm:p-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col">
            <h1 className="mt-4 text-2xl sm:text-3xl font-saira font-semibold text-[#fafafa]">
              Expert Custom
            </h1>
            <h1 className="my-4 text-2xl sm:text-3xl font-saira font-semibold text-[#1a75bb]">
              Software Development Solutions
            </h1>
            <p className="text-base sm:text-lg font-arimo text-justify text-[#fffff0]">
              At YougleTech, we specialize in crafting custom software solutions
              tailored to your unique business needs. Our experienced team
              collaborates closely with you to understand your objectives,
              ensuring that every application we develop is robust, scalable,
              and aligned with your vision.
            </p>
            <br />
            <p className="text-base sm:text-lg font-arimo text-justify text-[#fffff0]">
              We prioritize a collaborative approach, integrating your feedback
              throughout the process. Whether you need a bespoke application or
              ongoing support, our commitment to quality and innovation ensures
              you receive impactful solutions that drive efficiency and growth.
              Partner with us to transform your ideas into reality.
            </p>
          </div>

          {/* Right Section */}
          <div className="p-6 sm:p-8 bg-[#0d2232] rounded-xl shadow-xl border border-[#1c3d56]">
            <h1 className="text-lg sm:text-xl font-saira font-semibold text-center text-[#1a75bb]">
              Talk to Our Experts Now
            </h1>
            <p className="mt-4 text-xs sm:text-sm font-arimo text-center text-[#fffff0]">
              Refine your concept with insights from industry experts.
            </p>
            <p className="mt-1 text-xs sm:text-sm font-arimo text-center text-[#fffff0]">
              Let’s ensure your vision is on the right track!
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <input
                className="border mt-2 border-[#1c3d56] bg-[#0D2232] rounded-[7px] p-2 w-full text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Full Name*"
                {...register("fullname", {
                  required: true,
                  onChange: () => clearErrors("fullname"),
                })}
              />
              {errors.fullname && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}

              <input
                className="border mt-2 border-[#1c3d56] bg-[#0D2232] rounded-[7px] p-2 w-full text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Email*"
                type="email"
                {...register("email", {
                  required: true,
                  onChange: () => clearErrors("email"),
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}

              <input
                className="border mt-2 border-[#1c3d56] bg-[#0D2232] rounded-[7px] p-2 w-full text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Mobile Number*"
                type="number"
                {...register("mobile", {
                  required: true,
                  onChange: () => clearErrors("mobile"),
                })}
              />
              {errors.mobile && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}

              <textarea
                className="border mt-2 border-[#1c3d56] bg-[#0D2232] rounded-[7px] p-2 w-full text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Your message*"
                rows="3"
                {...register("message", {
                  required: true,
                  onChange: () => clearErrors("message"),
                })}
              />
              {errors.message && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}

              <input
                type="submit"
                value="Book Your Free Consultation"
                className="bg-[#1a75bb] text-white rounded mt-4 p-3 w-full cursor-pointer font-maven font-semibold text-sm"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCustomSoftware;
