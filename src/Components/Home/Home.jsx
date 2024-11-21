import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomePage from "./HomePage";
import CompanySliderSection from "./CompanySliderSection";
import IdeasandExecutionSection from "./IdeasandExecutionSection";

const Home = () => {
  return (
    <>
      {/* <HomeCarousel /> */}
      <HomePage />
      <CompanySliderSection />
      <IdeasandExecutionSection />
    </>
  );
};

export default Home;
