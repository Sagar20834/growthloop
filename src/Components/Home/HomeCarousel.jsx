import React, { useRef, useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import butterfly1 from "../../assets/image/butterfly1.jpeg";
import butterfly2 from "../../assets/image/butterfly2.jpg";
import crow from "../../assets/image/crow.jpg";
import eagel1 from "../../assets/image/eagel1.jpg";
import eagel3 from "../../assets/image/eagel3.jpg";
import heron from "../../assets/image/heron.jpeg";
import kingfirser2 from "../../assets/image/kingfirser2.jpeg";
import owl1 from "../../assets/image/owl1.jpg";
import owl2 from "../../assets/image/owl2.jpg";
import parrot1 from "../../assets/image/parrot1.jpg";
import parrot2 from "../../assets/image/parrot2.jpg";

const HomeCarousel = () => {
  const images = [
    { name: "ERP", img: butterfly1 },
    { name: "ERP", img: butterfly2 },
    { name: "ERP", img: crow },
    { name: "ERP", img: eagel1 },
    { name: "ERP", img: eagel3 },
    { name: "ERP", img: heron },
    { name: "ERP", img: kingfirser2 },
    { name: "ERP", img: owl1 },
    { name: "ERP", img: owl2 },
    { name: "ERP", img: parrot1 },
    { name: "ERP", img: parrot2 },
  ];
  const a = 1900;
  const carouselRef = useRef(null);
  const listRef = useRef(images[0]);
  const runningTimeRef = useRef(null);
  const [autoNextTimeout, setAutoNextTimeout] = useState(null);
  const timeRunning = a;
  const timeAutoNext = a * 2;

  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = "none";
      // Trigger reflow
      void runningTimeRef.current.offsetHeight;
      runningTimeRef.current.style.animation =
        "runningTime 7s linear 1 forwards";
    }
  };

  const showSlider = (type) => {
    const list = listRef.current;

    if (!list) return;

    const items = list.querySelectorAll(".item");
    if (type === "next") {
      list.appendChild(items[0]);
    } else if (type === "prev") {
      list.prepend(items[items.length - 1]);
    }

    if (carouselRef.current) {
      carouselRef.current.classList.add(type);
      setTimeout(() => {
        carouselRef.current.classList.remove(type);
      }, timeRunning);
    }

    clearTimeout(autoNextTimeout);
    setAutoNextTimeout(
      setTimeout(() => {
        showSlider("next");
      }, timeAutoNext)
    );

    resetTimeAnimation();
  };

  const stopCarousel = () => {
    clearTimeout(autoNextTimeout);
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = "none";
    }
  };

  const resumeCarousel = () => {
    setAutoNextTimeout(
      setTimeout(() => {
        showSlider("next");
      }, timeAutoNext)
    );
    resetTimeAnimation();
  };

  useEffect(() => {
    // Start the automatic slider
    const initialTimeout = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    setAutoNextTimeout(initialTimeout);

    // Clean up the timeout on component unmount
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(autoNextTimeout);
    };
  }, []); // Run once on mount

  useEffect(() => {
    resetTimeAnimation();
  }, []);

  return (
    <div className="h-screen z-20">
      <div className="carousel bg-red-100 h-[90%]" ref={carouselRef}>
        <div className="list " ref={listRef}>
          {images?.map((image, index) => (
            <div
              key={index}
              className="item "
              style={{ backgroundImage: `url(${image.img})` }}
            >
              <div className="content">
                <div className="name text-green-500 font-bold">
                  {image.name.toUpperCase()}
                </div>
                <div className="des text-gray-500 font-arimo">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis culpa similique consequuntur, reprehenderit dicta
                  repudiandae.
                </div>
                <div
                  className="flex justify-start gap-6 items-center opacity-0 animate-custom  text-green-500"
                  onMouseEnter={stopCarousel}
                  onMouseLeave={resumeCarousel}
                >
                  <button className="p-2 hover:text-black hover:bg-green-400  border border-green-300 rounded-lg">
                    See More
                  </button>
                  <button className="p-2 border hover:text-black  hover:bg-green-400 border-green-300 rounded-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button
            className="prev flex justify-center items-center"
            onClick={() => showSlider("prev")}
          >
            <FaLessThan />
          </button>
          <button
            className="next flex justify-center items-center"
            onClick={() => showSlider("next")}
          >
            <FaGreaterThan />
          </button>
        </div>

        <div className="timeRunning" ref={runningTimeRef}></div>
      </div>
    </div>
  );
};

export default HomeCarousel;
