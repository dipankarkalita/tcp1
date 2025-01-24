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
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
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
      <section className="relative py-20 bg-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
                Welcome to TCP Pro
              </h1>
              <p className="text-xl mb-10 text-gray-600 max-w-lg">
                Your trusted partner for Traffic Control Plans across the USA
              </p>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block text-lg transform hover:scale-105"
              >
                Get Started Today
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Traffic Control"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-600">
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
                  className="bg-white p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <item.icon className="h-16 w-16 text-blue-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-600">
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
                  className="bg-white p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <service.icon className="h-16 w-16 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <ArrowRight className="h-5 w-5 mr-2 text-green-500" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-600">
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
                  className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl text-center group"
                >
                  <industry.icon className="h-16 w-16 text-blue-600 mb-4 mx-auto transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-600">
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
                  <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition-transform group-hover:scale-110">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-600">
              Our Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Highway Expansion",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Urban Intersection Redesign",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Event Traffic Management",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
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

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-600">
              What Our Clients Say
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
                  className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <p className="text-gray-600 mb-4 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-xl">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-600">
              Get Started Today
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                  Contact Information
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" /> (555)
                    123-4567
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />{" "}
                    info@tcppro.com
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" /> 123
                    Traffic Control St, City, State 12345
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" /> Monday –
                    Friday, 9 AM – 5 PM
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105"
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
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                TCP Pro
              </h3>
              <p className="mb-4 text-gray-400">
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
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
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
              <p className="mb-4 text-gray-400">
                Subscribe to our newsletter for updates and industry insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 w-full rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
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
