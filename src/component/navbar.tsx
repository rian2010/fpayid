import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/asset/fastxyanyan-01.png"; // Adjust path if needed

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-20">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="F-Pay Logo"
            className="sm:w-12 sm:h-12 w-10 h-10"
          />
          <span className="text-xl sm:text-2xl font-semibold text-white">
            F-Pay
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 focus:ring-2 focus:ring-white z-20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Compact Mobile Menu */}
        <div
          className={`absolute top-full right-0 mt-1 mr-4 bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "opacity-100 max-h-64"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
          style={{ minWidth: "180px" }}
        >
          <ul className="py-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
