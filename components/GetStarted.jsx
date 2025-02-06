"use client";
import React from "react";

const GetStarted = () => {
  return (
    <button
      onClick={() => {

        // Adding a small timeout to ensure the page is rendered and the element is available
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100); // Delay of 100ms can be adjusted based on the layout rendering speed
      }}
      className="bg-[#f16104] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
    >
      Get Started Today
    </button>
  );
};

export default GetStarted;
