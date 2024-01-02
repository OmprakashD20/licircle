import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import Cards from "@/components/Shared/Cards";

import { WhyUs } from "@/constants/constants";

import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Awards from "./components/Awards";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Vision />
      <Awards />
      <Cards features={WhyUs} title={"Why"} mainTitle={"LiCircle"} />
      <Footer />
    </>
  );
};

export default Home;
