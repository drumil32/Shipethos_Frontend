import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Import icons

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 items-center">
      {/* WhatsApp Icon */}
      <a
        href="https://web.whatsapp.com/send?phone='" // Replace with your WhatsApp number link
        className="flex justify-center items-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 hover:translate-y-[-6px]"
        target="_blank"
      >
        <FaWhatsapp className="text-white text-4xl" />
      </a>

      {/* Call Icon */}
      <a
        href="tel:+your-phone-number" // Replace with your phone number
        className="flex justify-center items-center w-16 h-16 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110 hover:translate-y-[-6px]"
      >
        <FaPhoneAlt className="text-white text-2xl" />
      </a>
    </div>
  );
};

export default FloatingIcons;
