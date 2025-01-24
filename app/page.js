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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">TCP Pro</div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="#industries"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Industries
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Contact Us
            </a>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to TCP Pro
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your trusted partner for Traffic Control Plans across the USA
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  99% First-Time Approval
                </h3>
                <p className="text-gray-600">
                  Our plans have a 99% first-time approval success rate,
                  ensuring smooth project workflows.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Nationwide Coverage
                </h3>
                <p className="text-gray-600">
                  We serve clients across all states with expertise in local
                  regulations.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Fast Turnaround Times
                </h3>
                <p className="text-gray-600">
                  We ensure that your plans are delivered on schedule to keep
                  your project running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Truck className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Traffic Control Plans
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Work Zone Traffic Management</li>
                  <li>Detour Plans</li>
                  <li>Lane Closures and Road Closures</li>
                  <li>Fiber/Telecom-Specific Solutions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Pedestrian Safety Plans
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Hazard identification and risk assessment</li>
                  <li>Pedestrian traffic management strategies</li>
                  <li>Safety measures and mitigation techniques</li>
                  <li>Communication and signage plan</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Permitting Services
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Documentation Preparation and Submission</li>
                  <li>Coordination with Local Authorities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Crosshair className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Traffic Studies
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Traffic impact analysis</li>
                  <li>Temporary traffic flow assessments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section id="industries" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <HardHat className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Construction Companies
                </h3>
                <p className="text-gray-600">
                  Reduce work zone risks and delays with expertly crafted plans.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Event Organizers
                </h3>
                <p className="text-gray-600">
                  Ensure seamless traffic and pedestrian flow for large crowds.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <Building className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Government Agencies
                </h3>
                <p className="text-gray-600">
                  Compliance with all regulations and standards.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <Radio className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Utility Providers
                </h3>
                <p className="text-gray-600">
                  Minimize disruptions with safe and efficient traffic control
                  measures.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                <Wifi className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Telecom and Fiber Optic Providers
                </h3>
                <p className="text-gray-600">
                  Specialized solutions for small cell installations, aerial and
                  underground fiber projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  {"Schedule a free consultation to discuss your project's needs."}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Plan Development
                </h3>
                <p className="text-gray-600">
                  Our team designs a customized traffic control plan tailored to
                  your specifications.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Review and Approval
                </h3>
                <p className="text-gray-600">
                  We work with you and local authorities to finalize the plan.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Implementation Support
                </h3>
                <p className="text-gray-600">
                  Receive detailed instructions and ongoing support for plan
                  execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Get Started Today
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Contact Information
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" /> [Your Phone
                    Number]
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" /> [Your Email
                    Address]
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" /> [Your
                    Office Address]
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" /> Monday –
                    Friday, 9 AM – 5 PM
                  </li>
                </ul>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">TCP Pro</h3>
              <p className="mb-4">
                Your trusted partner for Traffic Control Plans across the USA.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
              <p className="mb-4">
                Subscribe to our newsletter for updates and industry insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 w-full rounded-l focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 TCP Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
