import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomePage from "./HomePage";
import CompanySliderSection from "./CompanySliderSection";
import IdeasandExecutionSection from "./IdeasandExecutionSection";
import ExpertCustomSoftware from "./ExpertCustomSoftware";
import OurSolution from "./OurSolution";
import BuildBusiness from "./BuildBusiness";

const Home = () => {
  return (
    <>
      {/* <HomeCarousel /> */}
      <HomePage />
      <CompanySliderSection />
      <IdeasandExecutionSection />
      <OurSolution />
      <ExpertCustomSoftware />
      <BuildBusiness />
    </>
  );
};

export default Home;
