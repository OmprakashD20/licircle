import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { hero } from "@/constants/constants";

const Hero = () => {
  const imgVariant = {
    initial: {
      opacity: 0,
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const heroCardVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  const headTextVariant = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.6,
      },
    },
  };

  const textVariant = {
    initial: {
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.9,
      },
    },
  };

  const buttonVariant = {
    initial: {
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 1.2,
      },
    },
  };

  return (
    <div className="relative flex flex-col max-xs:flex-col-reverse items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:pt-8 xl:max-w-6xl">
      <div className="w-full h-64 md:h-[90svh] lg:h-[80svh] lg:w-1/2">
        <motion.img
          variants={imgVariant}
          initial={"initial"}
          animate={"animate"}
          className="h-full w-full object-cover md:rounded-b-2xl lg:rounded-2xl shadow-xl"
          src={hero}
          alt="Hero Image"
        />
      </div>
      <motion.div
        variants={heroCardVariant}
        initial={"initial"}
        animate={"animate"}
        className="max-w-lg rounded-2xl md:bg-gray-100 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-24 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 md:border-2 md:border-green-500"
      >
        <div className="flex flex-col p-8">
          <motion.h1
            variants={headTextVariant}
            initial={"initial"}
            animate={"animate"}
            className="font-bebasNeue font-bold text-4xl sm:text-6xl"
          >
            <span className="text-secondary2">Sparks</span> of Sustainability{" "}
            <br /> in Lithium Ion{" "}
            <span className="xs:hover:text-primary xs:relative cursor-pointer group xs:hover:font-semibold xs:text-black text-primary">
              Recycling
              <div
                className={`absolute bottom-2 right-0 w-full h-0.5 bg-primary scale-x-0 xs:group-hover:scale-x-100 transition-transform duration-200`}
              ></div>
            </span>
          </motion.h1>
          <motion.p
            variants={textVariant}
            initial={"initial"}
            animate={"animate"}
            className="mt-4 text-base sm:text-lg text-gray-500 font-oxygen"
          >
            Compliant with 9 of 17 Global Goals - Environmental, Social and
            Governance.
          </motion.p>
          <motion.div
            variants={buttonVariant}
            initial={"initial"}
            animate={"animate"}
            className="mt-4"
          >
            <Link
              to="/technology"
              className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 py-4 px-10 hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 md:w-48 rounded-2xl font-oxygen"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
