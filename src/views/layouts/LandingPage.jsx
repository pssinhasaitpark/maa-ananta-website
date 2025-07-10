import React from "react";
import {
  Header,
  HeroSection,
  News,
  NewsLetter,
  Footer,
} from "../components/index";
import PartnerSection from "../components/PartnerSection";
import { img1, img2 } from "../../assets";
const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <NewsLetter />
      <News />
      {/* <PartnerSection
        image={img1}
        heading="Sowing Seeds of Change Through Education"
        content="ionEmpowering underprivileged children with quality education, ensuring a brighter future for the next generation."
        partners={["Company A", "Company B"]}
        flexDirection="row-reverse"
      />
      <PartnerSection
        image={img2}
        heading="A Loving Home for Every Child"
        content="Providing shelter, care, and education to orphaned and vulnerable children, nurturing their growth in a safe and supportive environment."
        partners={["Company A", "Company B"]}
        flexDirection="row"
      /> */}

      <Footer />
    </>
  );
};

export default LandingPage;
