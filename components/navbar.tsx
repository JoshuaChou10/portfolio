// components/Navbar.tsx
"use client"
import Link from 'next/link';
import {useState, useEffect} from 'react';
//TODO: shrink to menu on phone, can get from hacks website worked on
const Navbar = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const targetScrollY = 16; 
    setNavbarScrolled(window.scrollY > targetScrollY);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
  <nav className="navbar-root-container fixed inset-x-0 top-0 z-10 transition-all duration-300 w-full mb-28 ">
    <div className={`navbar-container transition-all duration-300 mx-auto flex justify-between items-center h-16 lg:h-20 px-10 ${navbarScrolled ? 'max-w-7xl bg-slate-600' : 'max-w-5xl bg-slate-600'} rounded-lg`}>
      <Link href="/" legacyBehavior>
        <a className="text-xl md:text-2xl lg:text-3xl font-bold hover:text-purple-400">Joshua.C</a>
      </Link>
      <div className="hidden lg:flex space-x-4"> {/* This part will only show on large screens */}
        <Link href="/" legacyBehavior><a className="text-gray-300 hover:text-white">Home</a></Link>
        <Link href="/projects" legacyBehavior><a className="text-gray-300 hover:text-white">Projects</a></Link>
        <Link href="/about" legacyBehavior><a className="text-gray-300 hover:text-white">About</a></Link>
        <Link href="/experience" legacyBehavior><a className="text-gray-300 hover:text-white">Experience</a></Link>
        <Link href="/awards" legacyBehavior><a className="text-gray-300 hover:text-white">Awards</a></Link>
      </div>
      <Link href="mailto:joshuachou912@gmail.com" legacyBehavior>
        <a className="text-gray-900 bg-white px-6 py-2 rounded-md hover:bg-blue-700 hover:text-white">
          Contact Me
        </a>
      </Link>
    </div>
    {/* For mobile or smaller screens, you can add a toggle button and a dropdown menu */}
  </nav>
);
};


export default Navbar;







  
      