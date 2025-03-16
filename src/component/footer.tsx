import React from "react";
import {
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                F-pay
              </span>
            </a>
          </div>

          <ul className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-900 dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-900 dark:hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-900 dark:hover:text-white"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-gray-900 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center space-x-6 my-6">
          {/* Social Media Icons from lucide-react */}
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />

        <div className="text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear}{" "}
            <a
              href="#"
              className="hover:underline text-gray-700 dark:text-gray-300"
            >
              F-pay
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
