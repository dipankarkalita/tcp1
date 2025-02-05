import { useState } from "react";
import Image from "next/image";

export default function TrafficControlStrategies() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  const projects = [
    {
      title: "Detour Plan",
      img: "/images/projects/Detour Plan.jpg",
      description:
        "We identify the need, assess the road network, determine route options, evaluate feasibility, select the preferred route, design the plan, coordinate with stakeholders, communicate the plan, implement and monitor it.",
    },
    {
      title: "Alley Closure",
      img: "/images/projects/Alley Closure.jpg",
      description:
        "When alley closures are required we follow a standard process, including notifying those impacted, displaying clear signs, setting up barriers, creating a detour plan, collaborating with emergency services, and overseeing and enforcing the closure.",
    },
    {
      title: "Parking Lane Closure",
      img: "/images/projects/ParkingLaneClosure.jpg",
      description:
        "We implement parking lane closures through a multi-step process that includes notification, signage, barricades, alternative parking, traffic management, stakeholder collaboration, and enforcement.",
    },
    {
      title: "Sidewalk Closure",
      img: "/images/projects/SideWalkClosure.jpg",
      description:
        "When construction occurs on sidewalks or in park areas, we implement sidewalk closures by notifying affected parties, posting clear signage, installing barricades, providing alternative pedestrian routes, coordinating with stakeholders, and monitoring and enforcing the closure.",
    },
    {
      title: "Single Lane Closure",
      img: "/images/projects/SingleLaneClosure.jpg",
      description:
        "When a single lane closure is required, whether it's the left, right, or center lane, we follow standard procedures. To safely redirect traffic, we utilize flashing arrow boards to guide vehicles from the closed lane to an adjacent lane. For highway closures, we take additional precautions to ensure safety.",
    },
    {
      title: "Double Lane Closure",
      img: "/images/projects/DoubleLaneClosure.jpg",
      description:
        "During a double lane closure, we follow similar steps to those taken during a single lane closure and implement additional measures such as utilizing double flash lighting arrow boards and developing traffic management plans to minimize congestion and delays.",
    },
    {
      title: "Lane Shift and Merge",
      img: "/images/projects/LaneShiftAndMerge.jpg",
      description:
        "During construction, if one or two lanes are closed, we redirect traffic to an adjacent lane by following city standards outlined in relevant manuals, such as the Manual on Uniform Traffic Control Devices (MUTCD), in addition to our standard procedure.",
    },
    {
      title: "Flagger",
      img: "/images/projects/Flagger.jpg",
      description:
        "We prioritize using flaggers alongside standard procedures in scenarios such as construction at intersections, single-lane two-way traffic, areas with high pedestrian or bicycle activity near work zones, locations where work zones restrict drivers' visibility or ability to navigate safely, and on highways or busy roads where additional guidance is necessary for driver safety.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-red-50 to-gray-50"
      id="our projects"
    >
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
          Our<span className="text-[#f16104] ml-2">Projects</span>
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <p className="text-lg text-gray-700 mb-6">
            TCP Pro offers customized temporary traffic control plans to suit
            various needs. We've outlined the most common types of plans, which
            cover a wide range of traffic control scenarios. This resource can
            also help you identify the necessary traffic control measures for
            your specific project.
          </p>
        </div>

        {projects.map((strategy, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg mb-8 transition duration-300 transform hover:scale-105"
          >
            <div
              className={`md:flex items-center gap-5 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 pr-4 text-center">
                <h2 className="text-3xl font-semibold mb-4 text-[#f16104]">
                  {strategy.title}
                </h2>
                <p className="text-gray-700 font-medium mb-4">
                  {strategy.description}
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={strategy.img}
                  alt={strategy.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md my-4 w-full cursor-pointer"
                  onClick={() => openModal(strategy.img)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-2 md:px-5 "
          onClick={closeModal}
        >
          <div className="relative md:w-[80%]" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-2 bg-white text-gray-800 p-1 pt-1.5 h-8 w-8 rounded-full shadow-lg hover:bg-gray-200 text-center"
              onClick={closeModal}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
