import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const url = "https://growthloopbackend.onrender.com";

const Modal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${url}/api/send-email`, data);
      if (response.status === 200) {
        toast.success("Your response was sent successfully");
        reset(); // Clear form after successful submission
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send the message. Please try again.!!" + error);
    }
  };

  if (!isOpen) return null;

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onBackdropClick}
    >
      <div
        className="bg-white rounded-lg p-6 shadow-lg w-96"
        role="dialog"
        aria-modal="true"
      >
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border rounded px-3 py-2"
              placeholder="Your Full Name*"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border rounded px-3 py-2"
              placeholder="Your Email*"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <div className="flex items-center">
              <div className="border-y border-l rounded px-3 py-2">+977</div>
              <input
                type="number"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full border rounded px-3 py-2"
                placeholder="Your Phone Number*"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full border rounded px-3 py-2"
              placeholder="Your Message"
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

const ContactUsButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="fixed z-50 bottom-2 right-1 sm:bottom-11 sm:right-8 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lghover:bg-green-100 transition-all duration-300 animate-bounce"
        onClick={openModal}
      >
        Contact Us
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ContactUsButton;
