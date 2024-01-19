// Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="mb-2">
          <a href="/resume.pdf" className="text-blue-400 hover:text-blue-600 mx-2">
            <FontAwesomeIcon icon={faFile} className="w-6 h-6"/> {/* Resume Icon */}
          </a>
          <a href="https://github.com/JoshuaChou10/" target="_blank" className="text-blue-400 hover:text-blue-600 mx-2">
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6"/> {/* GitHub Icon */}
          </a>
          
        </div>
        <div>
          <p>© {new Date().getFullYear()} Joshua Chou. All rights reserved.</p>
          <p>Made with <a href="https://nextjs.org" className="text-blue-400 hover:text-blue-600">Next.js</a> and <a href="https://tailwindcss.com" className="text-blue-400 hover:text-blue-600">Tailwind CSS</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
