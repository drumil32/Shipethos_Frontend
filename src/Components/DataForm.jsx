import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const DataForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about") {
      setShowForm(true);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    showForm && (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
        {/* Form Container */}
        <div
          className="relative bg-gradient-to-br from-[#2f8fc9] to-transparent p-8 rounded-xl shadow-2xl 
          w-[380px] h-auto flex flex-col gap-5  animate-throw-card"
        >
          {/* Close Button */}
          <button
            onClick={handleCancel}
            className="absolute top-4 right-4 text-2xl text-white bg-[#2f8fc9] p-2 rounded-full shadow-md 
            hover:bg-[#2f8fc9] transition-transform transform hover:scale-110"
          >
            <AiOutlineClose />
          </button>

          {/* Form Header */}
          <h2 className="text-3xl font-bold text-white text-center">Contact Us</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form_input rounded-md px-4 py-2 bg-white text-white border border-[#2f8fc9] 
              focus:outline-none focus:ring-2 focus:ring-[#2f8fc9] placeholder-zinc-500"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form_input rounded-md px-4 py-2 bg-white text-white border border-[#2f8fc9] 
              focus:outline-none focus:ring-2 focus:ring-[#2f8fc9] placeholder-zinc-500"
              placeholder="Email"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form_input rounded-md px-4 py-2 bg-white text-white border border-[#2f8fc9] 
              focus:outline-none focus:ring-2 focus:ring-[#2f8fc9] placeholder-zinc-500"
              placeholder="Phone or WhatsApp Number"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form_input rounded-md px-4 py-2 bg-white text-white border border-[#2f8fc9] 
              focus:outline-none focus:ring-2 focus:ring-[#2f8fc9] placeholder-zinc-500"
              placeholder="City"
            />
            <textarea
              placeholder="Share your Requirement"
              className="form_input rounded-md px-4 py-2 bg-white text-white border border-[#2f8fc9] 
              focus:outline-none focus:ring-2 focus:ring-[#2f8fc9] placeholder-zinc-500 resize-none"
              rows={3}
            ></textarea>

            {/* Action Buttons */}
            <div className="flex justify-between gap-4">
              {/* Cancel Button with Icon */}
              

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-[#2f8fc9] text-white font-bold py-2 rounded-md shadow-md 
                hover:bg-[#2f8fc9] transition-transform transform hover:scale-105"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default DataForm;
