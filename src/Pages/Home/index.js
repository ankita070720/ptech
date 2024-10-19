import HomeBanner from "../HomeBanner/Index";
import * as React from "react";
import CompanySection from "../../Components/CompanySection";
import FirmBackground from "../../Components/FirmBackground";
import JobSection from "../../Components/JobSection";
import OurStory from "../../Components/OurStory";


const Home = () => {
  return (
    <>
      <HomeBanner />
      <CompanySection />
      <FirmBackground />
      <JobSection />
      <OurStory />
     
    </>
  );
};
export default Home;
