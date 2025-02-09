import React from "react";

const NotFound = () => {
    const handleReload = ()=>{
        window.location.href = "/";
    }
  return (
    <div className="h-screen bg-white flex justify-center items-center flex-col w-full text-center">
      <h1 className="text-blue-700 font-bold">404 - Page Not Found</h1>
      <p className="text-black">The page you are looking for does not exist.</p>
      <button className="border-2 border-blue-600 text-white p-2 rounded-lg m-5 bg-indigo-500 hover:scale-105 hover:border-blue-800 font-bold" onClick={handleReload}>Reload</button>
    </div>
  );
};

export default NotFound;
