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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className=" text-2xl font-bold flex text-red-600 justify-between items-center">
            <Image
              src={"/images/Logo.jpeg"}
              alt="Company Logo"
              width={110}
              height={100}
              className="p-2"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Services", "Industries", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-red-600 transition duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="md:hidden bg-white border border-gray-300 p-2 rounded-md">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-50 to-gray-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Welcome to <span className="text-red-600">TCP Pro</span>
              </h1>
              <p className="text-xl mb-10 text-gray-600 max-w-lg">
                Your Trusted Nationwide Partner for Traffic Control Plans – Fast
                Service, Unbeatable Prices Starting at $49! Call 312-222-1111 or
                Email sales@tcppro.pro!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                Get Started Today
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={"/images/img1.jpg"}
                alt="Traffic Control"
                width={600}
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              Why Choose <span className="text-red-600">Us</span>
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
                    <item.icon className="h-12 w-12 text-red-600 mb-4" />
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
              Our <span className="text-red-600">Services</span>
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
                    <service.icon className="h-12 w-12 text-red-600 mb-4" />
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                      {service.title}
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <ArrowRight className="h-5 w-5 mr-2 text-red-600" />
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
              Industries We <span className="text-red-600">Serve</span>
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
                  <industry.icon className="h-12 w-12 text-red-600 mb-4 mx-auto transition-transform group-hover:scale-110" />
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
              How It <span className="text-red-600">Works</span>
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
                  <div className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition-transform group-hover:scale-110">
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

        {/* Project Showcase Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              Our <span className="text-red-600">Projects</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
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
        <section>
          <TrafficControlStrategies />
        </section>
        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              What Our <span className="text-red-600">Clients Say</span>
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
                      <span className="text-red-600 font-bold text-xl">
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
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-red-50 to-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
              Get Started <span className="text-red-600">Today</span>
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Contact Information
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-red-600" /> (555)
                    123-4567
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-red-600" />{" "}
                    info@tcppro.com
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-red-600" /> 123 Traffic
                    Control St, City, State 12345
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-red-600" /> Monday –
                    Friday, 9 AM – 5 PM
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
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
              <h3 className="text-2xl font-semibold mb-4 text-red-400">
                TCP Pro
              </h3>
              <p className="mb-4 text-gray-400">
                Your trusted partner for Traffic Control Plans across the USA.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "Services", "Industries", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-red-400 transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Stay Connected
              </h3>
              <p className="mb-4 text-gray-400">
                Subscribe to our newsletter for updates and industry insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 w-full rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700 transition duration-300"
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
