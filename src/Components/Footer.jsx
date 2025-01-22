import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer bg-[#2e2e2e] text-white py-10">
      <div className="lg:container mx-auto px-4">
        <div className="flex flex-wrap justify-around ">
          {/* Logo and Social Links */}
          <div className="w-full md:w-[30%] lg:w-[30%] mb-6 items-center flex flex-col">
            <div className="fo_logo">
              <div className="fo-img">
                <img
                  width="287"
                  height="66"
                  src="https://www.montdorinterior.com/wp-content/themes/montdor-db/assets/images/final-logo1.png"
                  alt="Best interior designers in Ahmedabad"
                  className="w-full"
                />
              </div>
            </div>
            <ul className="social_fo flex space-x-4 mt-4">
              <li>
                <a
                  href="https://www.facebook.com/MONTDORPL/"
                  className="bg-[#ff0000] p-3 rounded-full text-white flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Like us on Facebook"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/montdorinterior/"
                  className="bg-[#ff0000] p-3 rounded-full text-white flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Us on Instagram"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/MontdorInteriorPrivateLimited"
                  className="bg-[#ff0000] p-3 rounded-full text-white flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Subscribe us on Youtube"
                >
                  <FaYoutube size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/6 lg:w-1/6 mb-6">
            <div className="fo_link">
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="nav space-y-2">
                <li>
                  <a
                    href="https://www.montdorinterior.com/"
                    className="text-gray-400 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/about-us/"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/vendor-registration/"
                    className="text-gray-400 hover:text-white"
                  >
                    Vendor Registration
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/franchise/"
                    className="text-gray-400 hover:text-white"
                  >
                    Franchise
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/our-creation/"
                    className="text-gray-400 hover:text-white"
                  >
                    Our Creation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/packages/"
                    className="text-gray-400 hover:text-white"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/blog/"
                    className="text-gray-400 hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/contact-us/"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Links */}
          <div className="w-full md:w-1/6 lg:w-1/6 mb-6 ">
            <div className="fo_link">
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="nav space-y-2">
                <li>
                  <a
                    href="https://www.montdorinterior.com/home-interior-designer-ahmedabad/"
                    className="text-gray-400 hover:text-white"
                  >
                    Home Interior
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/modular-kitchens-in-ahmedabad/"
                    className="text-gray-400 hover:text-white"
                  >
                    Modular Kitchen
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/commercial-office-interior-design-services/"
                    className="text-gray-400 hover:text-white"
                  >
                    Office Interior
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/best-architecture-firm-in-ahmedabad/"
                    className="text-gray-400 hover:text-white"
                  >
                    Architecture Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/turnkey-projects-in-ahmedabad/"
                    className="text-gray-400 hover:text-white"
                  >
                    Turnkey Solution
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.montdorinterior.com/packages/"
                    className="text-gray-400 hover:text-white"
                  >
                    Packages
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 lg:w-1/6 mb-6"> 
            <div className="contact_fo">
              <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
              <p className="mt-4 underline flex justify-start item-center">
                <FaPhoneAlt className="inline-block mr-2" />
                <a
                  href="tel:+918980531520"
                  className="footer_call_btn text-gray-400 hover:text-white"
                >
                  +91 8980531520
                </a>
              </p>
              <p className="mt-4 underline flex justify-start items-center">
                {/* <FaPhoneAlt className="inline-block mr-2" /> */}
                <FaEnvelope className="inline-block mr-2" />
                <a
                  href="mailto:info@montdorinterior.com"
                  className="text-gray-400 hover:text-white"
                >
                  info@montdorinterior.com
                </a>
              </p>
              <p className="mt-4 underline items-center">
                <FaMapMarkerAlt className="inline-block mr-2" />
                <a
                  href="https://www.google.com/maps/place/Aaron+Spectra/@23.0339227,72.5023966,17z/data=!4m6!3m5!1s0x395e9b51966e3fc5:0xab913c050a3fb8a3!8m2!3d23.0339157!4d72.504967!16s%2Fg%2F11px1pb04v?authuser=0&entry=ttu"
                  className="text-gray-400 hover:text-white"
                >
                  202, Aaron Spectra, Rajpath Rangoli Rd, behind Rajpath club,
                  Bodakdev, Ahmedabad, Gujarat 380054
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Location Links */}
        <div className="w-full text-center mt-6 flex justify-center flex-wrap bg-zinc-500 rounded-lg p-4">
          <strong>Locations:</strong>
          <a href="/" className="text-white hover:text-white">
            Ahmedabad
          </a>
          <span className="mx-2">||</span>
          <a href="/" className="text-white hover:text-white">
            Gandhinagar
          </a>
          <span className="mx-2">||</span>
          <a
            href="/interior-designer-in-rajkot/"
            className="text-white hover:text-white"
          >
            Rajkot
          </a>
          <span className="mx-2">||</span>
          <a
            href="/interior-designer-in-surat/"
            className="text-white hover:text-white"
          >
            Surat
          </a>
          <span className="mx-2">||</span>
          <a
            href="/best-interior-designer-in-vadodara/"
            className="text-white hover:text-white"
          >
            Vadodara
          </a>
          <span className="mx-2">||</span>
          <a
            href="/interior-designer-in-pune/"
            className="text-white hover:text-white"
          >
            Pune
          </a>
          <span className="mx-2">||</span>
          <a
            href="/best-interior-designer-in-hyderabad/"
            className="text-white hover:text-white"
          >
            Hyderabad
          </a>
          <span className="mx-2">||</span>
          <a
            href="/best-interior-designer-in-bangalore/"
            className="text-white hover:text-white"
          >
            Bangalore
          </a>
          <span className="mx-2">||</span>
          <a
            href="/best-interior-designer-in-andheri-west-mumbai/"
            className="text-white hover:text-white"
          >
            Andheri West
          </a>
          <span className="mx-2">||</span>
          <a
            href="https://www.montdorinterior.com/best-interior-designer-in-thane/"
            className="text-white hover:text-white"
          >
            Thane
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="copy_fo text-center mt-8 text-sm">
        © 2025 Montdor Interior Pvt. Ltd. |
        <a
          href="https://www.thanksweb.in/website-design-services.php"
          className="text-white hover:text-white"
        >
          Web Design
        </a>{" "}
        & SEO
        <a
          href="https://www.thanksweb.in/"
          className="text-white hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Thanksweb
        </a>{" "}
        &
        <a
          href="https://squarerootcommunications.com/"
          className="text-white hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Squareroot Communications
        </a>
      </div>
    </footer>
  );
};

export default Footer;
