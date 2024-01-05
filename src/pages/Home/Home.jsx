import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Awards from "./components/Awards";
import WhyUsCard from "./components/WhyUs";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Vision />
      <Awards />
      <WhyUsCard />
      <Footer />
    </>
  );
};

export default Home;
