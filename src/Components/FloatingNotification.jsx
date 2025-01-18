import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FloatingNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [routeChanged, setRouteChanged] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Whenever the route changes, trigger the notification to appear after 3 seconds
    setRouteChanged(true);
    setTimeout(() => {
      if (routeChanged) {
        setShowNotification(true);
      }
    }, 3000);
  }, [location]);  // Dependency on location ensures the effect is triggered on route change

  const handleCloseNotification = () => {
    setShowNotification(false); // Hide notification when clicked
  };

  return (
    <div>
      {/* Conditional rendering of the notification */}
      {showNotification && (
        <div className="fixed bottom-16 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-md flex items-center gap-2">
          <span>Your content here</span>
          <button
            onClick={handleCloseNotification}
            className="bg-transparent text-white border-0 p-1"
          >
            <span className="text-xl">✖</span> {/* Cancel icon */}
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingNotification;
