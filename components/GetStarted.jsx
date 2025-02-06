"use client";
import React from "react";
import { Link } from "react-scroll";

const GetStarted = () => {
  return (
    <nav>
      <Link
        to={"contact"}
        smooth={true}
        duration={500}
        offset={-50}
        className="bg-[#f16104] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 cursor-pointer"
      >
        Get Started Today
      </Link>
    </nav>
  );
};

export default GetStarted;
