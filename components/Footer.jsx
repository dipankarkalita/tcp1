"use client"

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#f16104]">
              TCP Pro
            </h3>
            <p className="mb-4 text-gray-400">
              Your trusted partner for Traffic Control Plans across the USA.
            </p>
            <div className="text-2xl font-bold flex text-[#f16104] relative -ml-4">
              <Image
                src={"/images/transparent_logo.png"}
                alt="Company Logo"
                width={130}
                height={100}
                className="p-2 w-32 "
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f16104]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Why Choose Us",
                "Services",
                "Industries",
                "Our Projects",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      document
                        .getElementById(item.toLowerCase().replace(/\s+/g, "-"))
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                    }}
                    className="text-gray-400 hover:text-[#f16104] transition duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f16104]">
              Stay Connected
            </h3>
            <p className="mb-4 text-gray-400">
              Reach out to us via email for updates and industry insights.
            </p>
            <p className="text-gray-500 font-medium">sales@tcp-pro.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; 2025 TCP Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
