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
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">TCP Pro</div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Services
            </a>
            <a
              href="#industries"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Industries
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Contact Us
            </a>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-300" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          }}
        ></div>
        <div className="relative container mx-auto px-4 py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-400">
            Welcome to TCP Pro
          </h1>
          <p className="text-xl md:text-3xl mb-10 text-gray-300">
            Your trusted partner for Traffic Control Plans across the USA
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block text-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-blue-400">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-gray-700 p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:bg-gray-600">
                <CheckCircle className="h-16 w-16 text-green-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  99% First-Time Approval
                </h3>
                <p className="text-gray-300">
                  Our plans have a 99% first-time approval success rate,
                  ensuring smooth project workflows.
                </p>
              </div>
              <div className="bg-gray-700 p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:bg-gray-600">
                <Globe className="h-16 w-16 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  Nationwide Coverage
                </h3>
                <p className="text-gray-300">
                  We serve clients across all states with expertise in local
                  regulations.
                </p>
              </div>
              <div className="bg-gray-700 p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:bg-gray-600">
                <Zap className="h-16 w-16 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                  Fast Turnaround Times
                </h3>
                <p className="text-gray-300">
                  We ensure that your plans are delivered on schedule to keep
                  your project running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-blue-400">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
                <Truck className="h-16 w-16 text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">
                  Traffic Control Plans
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Work Zone Traffic Management
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Detour Plans
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Lane Closures and Road Closures
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Fiber/Telecom-Specific Solutions
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
                <Users className="h-16 w-16 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">
                  Pedestrian Safety Plans
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Hazard identification and risk assessment
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Pedestrian traffic management strategies
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Safety measures and mitigation techniques
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Communication and signage plan
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
                <FileText className="h-16 w-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">
                  Permitting Services
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Documentation Preparation and Submission
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Coordination with Local Authorities
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
                <Crosshair className="h-16 w-16 text-red-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">
                  Traffic Studies
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Traffic impact analysis
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-green-400" />
                    Temporary traffic flow assessments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section id="industries" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-blue-400">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:bg-gray-600 text-center">
                <HardHat className="h-16 w-16 text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Construction Companies
                </h3>
                <p className="text-gray-300">
                  Reduce work zone risks and delays with expertly crafted plans.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:bg-gray-600 text-center">
                <Users className="h-16 w-16 text-green-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Event Organizers
                </h3>
                <p className="text-gray-300">
                  Ensure seamless traffic and pedestrian flow for large crowds.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:bg-gray-600 text-center">
                <Building className="h-16 w-16 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Government Agencies
                </h3>
                <p className="text-gray-300">
                  Compliance with all regulations and standards.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:bg-gray-600 text-center">
                <Radio className="h-16 w-16 text-red-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Utility Providers
                </h3>
                <p className="text-gray-300">
                  Minimize disruptions with safe and efficient traffic control
                  measures.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl hover:bg-gray-600 text-center">
                <Wifi className="h-16 w-16 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Telecom and Fiber Optic Providers
                </h3>
                <p className="text-gray-300">
                  Specialized solutions for small cell installations, aerial and
                  underground fiber projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-blue-400">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Initial Consultation
                </h3>
                <p className="text-gray-300">
                  {"Schedule a free consultation to discuss your project's needs."}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Plan Development
                </h3>
                <p className="text-gray-300">
                  Our team designs a customized traffic control plan tailored to
                  your specifications.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Review and Approval
                </h3>
                <p className="text-gray-300">
                  We work with you and local authorities to finalize the plan.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Implementation Support
                </h3>
                <p className="text-gray-300">
                  Receive detailed instructions and ongoing support for plan
                  execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-blue-400">
              Get Started Today
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="bg-gray-700 p-8 rounded-lg shadow-xl">
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
              <div className="bg-gray-700 p-8 rounded-lg shadow-xl">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition duration-300"
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
      <footer className="bg-gray-900 text-white py-12">
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
                  className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition duration-300"
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
