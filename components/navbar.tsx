// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 rounded-lg w-full">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" legacyBehavior>
          <a className="text-white font-bold">Joshua</a>
        </Link>
        <div className="flex space-x-8"> {/* Adjust the space here */}
          <Link href="/" legacyBehavior><a className="text-gray-300 hover:text-white">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="text-gray-300 hover:text-white">About</a></Link>
          <Link href="/experience" legacyBehavior><a className="text-gray-300 hover:text-white">Experience</a></Link>
          <Link href="/skills" legacyBehavior><a className="text-gray-300 hover:text-white">Skills and Awards</a></Link>
          <Link href="/projects" legacyBehavior><a className="text-gray-300 hover:text-white">Projects</a></Link>
        </div>
        <Link href="/contact" legacyBehavior>
          <a className="text-gray-900 bg-white px-6 py-2 rounded-md hover:bg-blue-700 hover:text-white">
            Contact Me
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
