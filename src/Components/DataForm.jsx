import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { AiOutlineClose } from "react-icons/ai";

const DataForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '' });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/about') {
      setShowForm(true);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    showForm && (
      <div className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="dataFrom bg-gradient-to-br from-white to-gray-100 p-8 rounded-lg shadow-xl h-[500px] w-[360px] relative">
          {/* Cancel Icon */}
          <button
            onClick={handleCancel}
            className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-600 transition-all"
          >
            <AiOutlineClose />
          </button>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 " >Quick Contact</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form_input bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form_input bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
              placeholder="Email"
            />
            <input
              type="tel"
              name="phonenumber"
              value={formData.phone}
              onChange={handleChange}
              className="form_input bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
              placeholder="Phone or WhatsApp Number"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form_input bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
              placeholder="City"
            />
            <textarea
              placeholder="Share your Requirement"
              className="form_input bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500 resize-none"
              rows={3}
            ></textarea>
            <div className="flex justify-between">
              <Button content="Send" style="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full" />
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default DataForm;
