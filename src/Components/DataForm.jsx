import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { AiOutlineClose } from "react-icons/ai";

const DataForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '' });
  const location = useLocation();

  useEffect(() => {
    // Show the form if the page reloads and if it's on specific routes
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
    setShowForm(false); // Hide the form after submission
  };

  const handleCancel = () => {
    setShowForm(false); // Hide the form on cancel
  };

  return (
    showForm && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg h-[500px] w-[400px] relative">
          {/* Cancel Icon */}
          <button
            onClick={handleCancel}
            className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
          >
            <AiOutlineClose /> {/* Font Awesome icon */}
          </button>
          <h2 className="text-4xl font-semibold mb-4">Quick Contact</h2>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4'>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none resize-none"
              placeholder='Full Name'
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none resize-none"
              placeholder='Email'
            />
            <input
              type="tel"
              name="phonenumber"
              value={formData.phone}
              onChange={handleChange}
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none resize-none"
              placeholder='Phone or WhatsApp Number'
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none resize-none"
              placeholder='City'
            />
            <textarea
              placeholder="Share your Requirement"
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none resize-none"
            ></textarea>
            <div className="flex justify-between">
              <Button content={"Send"} style={"w-full"} />
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default DataForm;
