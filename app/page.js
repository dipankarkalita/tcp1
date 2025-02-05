"use client";

import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Truck,
  Brain,
  Globe,
  Zap,
  Users,
  FileText,
  Crosshair,
  HardHat,
  Building,
  Radio,
  Wifi,
  ArrowRight,
} from "lucide-react";
import TrafficControlStrategies from "@/components/TraficControl";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center pt-2.5 md:py-2.5">
          {/* Logo */}
          <div
            className="text-2xl font-bold flex text-[#f16104] cursor-pointer"
            onClick={() => {
              setIsOpen(false); // Close menu after clicking a link
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
                block: "center",
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
              <button
                key={item}
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({
                    behavior: "smooth",
                    block: "center", // Ensures it scrolls to the top of the section
                  });
                }}
                className="text-gray-600 hover:text-[#f16104] transition duration-300"
              >
                {item}
              </button>
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
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
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
            <button
              key={item}
              onClick={() => {
                setIsOpen(false); // Close menu after clicking a link
                document.getElementById(item.toLowerCase())?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className="text-gray-600 hover:text-[#f16104] transition duration-300 text-left"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 bg-gradient-to-r from-red-50 to-gray-50"
        id="home"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Welcome to <span className="text-[#f16104]">TCP Pro</span>
              </h1>
              <p className="text-xl mb-10 text-gray-600 max-w-xl font-semibold">
                Your Trusted Nationwide Partner for Traffic Control Plans – Fast
                Service, Unbeatable Prices Starting at{" "}
                <span className="text-[#f16104]">$49</span>! <br /> Call{" "}
                <span className="text-[#f16104]">312-222-1111</span> or Email{" "}
                <span className="text-[#f16104]">sales@tcp-pro.com</span>
              </p>
              <button
                onClick={() => {
                  setIsOpen(false); // Close menu after clicking a link
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="bg-[#f16104] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
              >
                Get Started Today
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={"/images/img2.jpg"}
                alt="Traffic Control"
                width={700}
                height={400}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Why Choose Us Section */}
        <section className="py-20" id="why choose us">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              Why Choose <span className="text-[#f16104]">Us</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: CheckCircle,
                  title: "99% First-Time Approval",
                  description:
                    "Our plans have a 99% first-time approval success rate, ensuring smooth project workflows.",
                },
                {
                  icon: Globe,
                  title: "Nationwide Coverage",
                  description:
                    "We serve clients across all states with expertise in local regulations.",
                },
                {
                  icon: Zap,
                  title: "Fast Turnaround Times",
                  description:
                    "We ensure that your plans are delivered on schedule to keep your project running smoothly.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex flex-col items-center">
                    <item.icon className="h-12 w-12 text-[#f16104] mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              Our <span className="text-[#f16104]">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: Truck,
                  title: "Traffic Control Plans",
                  items: [
                    "Work Zone Traffic Management",
                    "Detour Plans",
                    "Lane Closures and Road Closures",
                    "Fiber/Telecom-Specific Solutions",
                  ],
                },
                {
                  icon: Users,
                  title: "Pedestrian Safety Plans",
                  items: [
                    "Hazard identification and risk assessment",
                    "Pedestrian traffic management strategies",
                    "Safety measures and mitigation techniques",
                    "Communication and signage plan",
                  ],
                },
                {
                  icon: FileText,
                  title: "Permitting Services",
                  items: [
                    "Documentation Preparation and Submission",
                    "Coordination with Local Authorities",
                  ],
                },
                {
                  icon: Crosshair,
                  title: "Traffic Studies",
                  items: [
                    "Traffic impact analysis",
                    "Temporary traffic flow assessments",
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex flex-col items-center">
                    <service.icon className="h-12 w-12 text-[#f16104] mb-4" />
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                      {service.title}
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <ArrowRight className="h-5 w-5 mr-2 text-[#f16104]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section id="industries" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              Industries We <span className="text-[#f16104]">Serve</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: HardHat,
                  title: "Construction Companies",
                  description:
                    "Reduce work zone risks and delays with expertly crafted plans.",
                },
                {
                  icon: Users,
                  title: "Event Organizers",
                  description:
                    "Ensure seamless traffic and pedestrian flow for large crowds.",
                },
                {
                  icon: Building,
                  title: "Government Agencies",
                  description: "Compliance with all regulations and standards.",
                },
                {
                  icon: Radio,
                  title: "Utility Providers",
                  description:
                    "Minimize disruptions with safe and efficient traffic control measures.",
                },
                {
                  icon: Wifi,
                  title: "Telecom and Fiber Optic Providers",
                  description:
                    "Specialized solutions for small cell installations, aerial and underground fiber projects.",
                },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-105 hover:shadow-xl group"
                >
                  <industry.icon className="h-12 w-12 text-[#f16104]mb-4 mx-auto transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              How It <span className="text-[#f16104]">Works</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: 1,
                  title: "Initial Consultation",
                  description:
                    "Schedule a free consultation to discuss your project's needs.",
                },
                {
                  number: 2,
                  title: "Plan Development",
                  description:
                    "Our team designs a customized traffic control plan tailored to your specifications.",
                },
                {
                  number: 3,
                  title: "Review and Approval",
                  description:
                    "We work with you and local authorities to finalize the plan.",
                },
                {
                  number: 4,
                  title: "Implementation Support",
                  description:
                    "Receive detailed instructions and ongoing support for plan execution.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-[#f16104] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition-transform group-hover:scale-110">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <TrafficControlStrategies />
        </section>
        {/* Testimonials Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              What Our <span className="text-[#f16104]">Clients Say</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  role: "Project Manager",
                  company: "ABC Construction",
                  quote:
                    "TCP Pro's expertise and quick turnaround times have been invaluable to our projects.",
                },
                {
                  name: "Jane Smith",
                  role: "Event Coordinator",
                  company: "XYZ Events",
                  quote:
                    "Their traffic management plans ensured our event ran smoothly with no congestion issues.",
                },
                {
                  name: "Mike Johnson",
                  role: "City Planner",
                  company: "Metropolis City",
                  quote:
                    "TCP Pro's thorough approach to traffic control has greatly improved our urban development projects.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#f16104]font-bold text-xl">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-red-50 to-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              Get Started <span className="text-[#f16104]">Today</span>
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                  Contact Information
                </h3>
                <ul className="space-y-4 text-gray-600 grid grid-cols-1 md:grid-cols-2">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-[#f16104]" /> (555)
                    123-4567
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-[#f16104]" />{" "}
                    sales@tcp-pro.com
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-[#f16104]" /> 123 Traffic
                    Control St, City, State 12345
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-[#f16104]" /> Monday –
                    Friday, 9 AM – 5 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <div className="text-2xl font-bold flex text-[#f16104] relative">
                <Image
                  src={"/images/transparentLogo.png"}
                  alt="Company Logo"
                  width={110}
                  height={100}
                  className="p-2 w-28"
                />
                <h2 className="absolute bottom-8 left-[4.2rem] text-20 text-white text-2xl font-bold">
                  TCP <spn className="text-[#f16104]">Pro</spn>
                </h2>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#f16104]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Why Choose",
                  "Services",
                  "Industries",
                  "Our Projects",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        document
                          .getElementById(
                            item.toLowerCase().replace(/\s+/g, "-")
                          )
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
    </div>
  );
}
