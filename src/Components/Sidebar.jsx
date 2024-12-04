
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTimes, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state for mobile

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block sidebar shadow-md sticky top-0 rounded-xl flex flex-col bg-gray-900 text-gray-100 p-6 h-screen max-w-xs w-full space-y-8 border-r-2 border-gray-700">
        <SidebarContent isMobile={false} />
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-2xl fixed top-5 left-7 z-30"
        >
          {sidebarOpen ? <FaTimes /> : <FaUserCircle />}
        </button>
        {sidebarOpen && (
          <div className="fixed top-0 left-0 w-3/4 h-screen bg-gray-900 text-gray-100 p-6 z-20">
            <SidebarContent isMobile={true} />
          </div>
        )}
      </div>
    </>
  );
};

const SidebarContent = ({ isMobile }) => (
    <div className="space-y-8">
      {/* Profile Section */}
      <div className={`text-center ${isMobile ? 'mt-8' : ''}`}>
    <img
      src={isMobile ? '/photo.jpg' : '/photo.jpg'} // Use a different logo for mobile
      alt="ROHAN GARAD"
      className={`${
        isMobile ? 'w-24 h-24 mb-6 mt-12' : 'w-32 h-32'
      } rounded-full mx-auto border-4 border-gradient-to-r from-pink-500 to-purple-500`} // Increased mb-6 on mobile for more space
    />
    <h3
      className={`${
        isMobile ? 'text-2xl' : 'text-3xl'
      } font-semibold text-white`}
    >
      ROHAN GARAD
    </h3>
    <p className="text-gray-400 mt-1">Computer Science Student</p>
    </div>

    {/* Contact Information */}
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-300">Email</h4>
        <p className="text-gray-400">rohangarad8@gmail.com</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-300">Birthday</h4>
        <p className="text-gray-400">Jan 27, 2004</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-300">Location</h4>
        <p className="text-gray-400">Solapur, Maharashtra, India</p>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-300">Connect with Me</h4>
      <div className="flex space-x-6 justify-center">
        <a href="https://github.com/rohangarad" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/rohangarad" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>

    {/* Footer / Signature */}
    <footer className="mt-auto text-center text-sm text-gray-400">
      <p>&#169; 2024 ROHAN GARAD. All Rights Reserved.</p>
    </footer>
  </div>
);

export default Sidebar;
