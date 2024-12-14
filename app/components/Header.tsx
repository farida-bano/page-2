
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      {/* Contact Information and Social Media Section */}
      <div className="w-full bg-[#23856D] text-white px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

        {/* Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6">
          <FaPhoneAlt className="text-white text-xl sm:text-2xl" />
          <a href="tel:+12255550118" className="hover:underline text-sm sm:text-base">(+1) 225-555-0118</a>

          <FaEnvelope className="text-white text-xl sm:text-2xl" />
          <a href="mailto:michelle.rivera@example.com" className="hover:underline text-sm sm:text-base">michelle.rivera@example.com</a>
        </div>

        {/* Promotional Text */}
        <div className="text-white text-sm sm:text-xs mt-2 sm:mt-0 text-center sm:text-left">
          Follow Us and get a chance to win 80% off</div>
        {/*Text */}
        <div className="text-white text-sm sm:text-xs mt-2 sm:mt-0 text-center sm:text-left">
          Follow Us : </div>
        {/* Social Media Icons */}
        <div className="flex gap-4 mt-2 sm:mt-0 justify-center sm:justify-end">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-[20px] sm:text-[24px]" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-[20px] sm:text-[24px]" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-[20px] sm:text-[24px]" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-[20px] sm:text-[24px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

