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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">TCP Pro</div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Services
            </a>
            <a
              href="#industries"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Industries
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Contact Us
            </a>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Welcome to TCP Pro
          </h1>
          <p className="text-xl md:text-3xl mb-10 text-gray-300 max-w-2xl">
            Your trusted partner for Traffic Control Plans across the USA
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block text-lg transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Why Choose Us
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
                  className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 hover:bg-opacity-70"
                >
                  <item.icon className="h-16 w-16 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-20 bg-gray-900 bg-opacity-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Our Services
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
                  className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 hover:bg-opacity-70"
                >
                  <service.icon className="h-16 w-16 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-6 text-blue-300">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section id="industries" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Industries We Serve
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
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 hover:bg-opacity-70 text-center group"
                >
                  <industry.icon className="h-16 w-16 text-blue-400 mb-4 mx-auto transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-900 bg-opacity-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              How It Works
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
                  <div className="bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition-transform group-hover:scale-110">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Our Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Highway Expansion",
                  image: "/placeholder.svg",
                },
                {
                  title: "Urban Intersection Redesign",
                  image: "/placeholder.svg",
                },
                {
                  title: "Event Traffic Management",
                  image: "/placeholder.svg",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-xl group"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 bg-opacity-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Get Started Today
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">
                  Contact Information
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-400" /> [Your Phone
                    Number]
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-400" /> [Your Email
                    Address]
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-400" /> [Your
                    Office Address]
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-400" /> Monday –
                    Friday, 9 AM – 5 PM
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-50 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                TCP Pro
              </h3>
              <p className="mb-4 text-gray-300">
                Your trusted partner for Traffic Control Plans across the USA.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Stay Connected
              </h3>
              <p className="mb-4 text-gray-300">
                Subscribe to our newsletter for updates and industry insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 w-full rounded-l bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              &copy; 2023 TCP Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
