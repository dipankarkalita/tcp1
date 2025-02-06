"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center pt-2.5 md:py-2.5">
        {/* Logo */}
        <div
          className="text-2xl font-bold flex text-[#f16104] cursor-pointer"
          onClick={() => {
            setIsOpen(false); // Close menu after clicking a link
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <Image
            src={"/images/final_logo.jpg"}
            alt="Company Logo"
            width={210}
            height={100}
            className="md:p-2 w-28"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-bold">
          {[
            "Home",
            "Why Choose Us",
            "Services",
            "Industries",
            "Our Projects",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500} // Adjust duration if needed
              offset={-50} // Adjust the offset if the scroll position is incorrect
              onClick={() => setIsOpen(false)} // Close menu after clicking
              className="text-gray-600 hover:text-[#f16104] transition duration-300 text-left cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-white border border-gray-300 p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation - Slide Down Effect */}
      <nav
        className={`md:hidden flex flex-col space-y-4 bg-white px-4 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {[
          "Home",
          "Why Choice Us",
          "Services",
          "Industries",
          "Our Projects",
          "Contact",
        ].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500} // Adjust duration if needed
            offset={-50} // Adjust the offset if the scroll position is incorrect
            onClick={() => setIsOpen(false)} // Close menu after clicking
            className="text-gray-600 hover:text-[#f16104] transition duration-300 text-left"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
