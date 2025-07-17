import React from "react";
import {
  Header,
  HeroSection,
  News,
  NewsLetter,
  Footer,
  PartnerSection,
  PartnerSectionSlider,
} from "../components/index";
import {
  DataImg21,
  DataImg22,
  DataImg23,
  DataImg24,
  group1,
  img1,
  img2,
  img3,
} from "../../assets";
const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <NewsLetter />
      <News />

      <PartnerSectionSlider
        images={[DataImg21, DataImg23, DataImg22, DataImg24]}
        heading="विश्व योग दिवस कार्यक्रम 05/06/2021  मांडव में"
        content="24 जनवरी 2019 को महेश्वर में माँ अनंता अभुदय सामाजिक सेवा संस्था द्वारा वृद्ध आश्रम में सेवा कार्यक्रम आयोजित किया गया। इस अवसर पर आश्रम में आवश्यक वस्तुओं का वितरण किया गया, जिसमें दैनिक उपयोग की सामग्री शामिल थी। संस्था के सदस्यों ने बुज़ुर्गों के साथ समय बिताया, हास्य-विनोद और संवाद के माध्यम से उन्हें आनंदित किया। इस सेवाभावी पहल ने वृद्धजनों के चेहरे पर मुस्कान बिखेरी और सामाजिक सरोकार की एक सुंदर मिसाल पेश की।"
        flexDirection="row"
      />

      <Footer />
    </>
  );
};

export default LandingPage;
