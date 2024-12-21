import React, { useEffect, useRef } from "react";

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the animation when the section comes into view
          section.classList.remove("animate-none");
          section.classList.add("animate-section");
        } else {
          // Reset the animation when the section goes out of view
          section.classList.remove("animate-section");
          section.classList.add("animate-none");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // Trigger when 20% of the section is visible
    });

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-h-max  flex flex-col items-center justify-center p-6 animate-none"
    >
      <div className="max-w-[80%] text-center bg-emerald-200-200  rounded-lg p-8 shadow-2xl shadow-gray-400-100">
        <div className="text-5xl font-bold text-gray-500 mb-6 animate-fade-in hover:scale-105 hover:transition-all hover:ease-in-out hover:duration-200 ">
          <span className="">About Us</span>
        </div>
        <p className="text-justify align-middle text-gray-500/90 leading-relaxed animate-slide-in">
          GrowthLoop Technologies Pvt. Ltd. is an emerging software company
          based in Nepal, showcasing innovation and technical expertise in the
          IT sector. With a focus on delivering high-quality software solutions,
          the company caters to diverse industries including e-commerce,
          finance, healthcare, education, and startups. GrowthLoop leverages
          cutting-edge technologies, including artificial intelligence, machine
          learning, cloud computing, and web and mobile application development,
          to empower businesses with scalable and efficient digital solutions.
        </p>

        <div className="text-justify mt-8">
          <h2 className="text-2xl font-semibold text-gray-500 underline mb-4">
            Key Features of GrowthLoop Technologies:
          </h2>
          <ul className="list-disc list-inside text-gray-500/90 space-y-2 animate-slide-in ">
            <li className="hover:scale-105 transition-all ease-in-out duration-800">
              <strong>Customer-Centric Approach:</strong> The company emphasizes
              building solutions tailored to meet specific client needs,
              ensuring long-term partnerships.
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-800">
              <strong>Skilled Workforce:</strong> With a team of talented
              software developers, designers, and project managers, GrowthLoop
              combines creativity with technical prowess.
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-800">
              <strong>Innovation-Focused:</strong> As a growing company,
              GrowthLoop prioritizes staying updated with global tech trends and
              integrating innovative practices into its workflow.
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-800">
              <strong>Local Impact with Global Vision:</strong> While supporting
              the growth of Nepal's tech ecosystem, the company also aspires to
              expand its footprint internationally.
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-800">
              <strong>Support for Startups and SMEs:</strong> GrowthLoop
              provides affordable and flexible software solutions, helping
              startups and small to medium enterprises (SMEs) digitize their
              operations and achieve sustainable growth.
            </li>
          </ul>
        </div>

        <div className="text-left mt-8">
          <h2 className="text-2xl font-semibold text-gray-500 underline mb-4">
            Contributions to Nepal’s Tech Industry:
          </h2>
          <ul className="list-disc list-inside text-gray-500/90 space-y-2 animate-slide-in">
            <li className="hover:scale-105 transition-all ease-in-out duration-800">
              <strong>Promoting Digital Transformation:</strong> GrowthLoop
              plays a vital role in Nepal’s ongoing digital transformation,
              offering businesses access to robust technological infrastructure.
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-800">
              <strong>Talent Development:</strong> By nurturing local talent,
              the company contributes to building a skilled workforce in Nepal.
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-800">
              <strong>Community Engagement:</strong> GrowthLoop actively
              participates in IT-related events, hackathons, and collaborations
              with academic institutions to support tech innovation.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 transition-all duration-300 animate-bounce">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
