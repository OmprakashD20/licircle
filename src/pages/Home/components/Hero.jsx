import { useMediaQuery } from "react-responsive";

import AnimatedButton from "@/components/Button/Button";

import { hero } from "@/constants/constants";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <div className="flex flex-col xs:relative">
      <div className="lg:mx-24 md:mx-20 sm:mx-16 xs:mx-14 lg:py-16 xs:py-16 py-6 mx-8">
        <h1 className="font-bebasNeue lg:text-8xl sm:text-7xl xs:text-6xl min-[320px]:text-5xl text-4xl">
          <span className="text-secondary2">Sparks</span> of Sustainability{" "}
          <br /> in Lithium Ion{" "}
          <span className="xs:hover:text-primary xs:relative cursor-pointer group xs:hover:font-semibold">
            Recycling
            <div
              className={`absolute bottom-3 right-0 w-full h-0.5 bg-primary scale-x-0 xs:group-hover:scale-x-100 transition-transform duration-200`}
            ></div>
          </span>
        </h1>
        <p className="text-secondary1 font-semibold !font-oxygen lg:text-4xl xs:text-3xl text-2xl leading-tight tracking-tight my-1">
          #GreenTech<span className="text-secondary2">Revolution</span>
        </p>
        <p className="text-gray-400 font-oxygen my-2 xs:my-4 sm:text-sm xs:text-xs text-[10px] tracking-wide">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. {isMobile ? null : <br />}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500.
        </p>
        <AnimatedButton title="Contact Us" />
      </div>
      <div className="-z-20 relative xs:absolute lg:-top-[0.25%] sm:top-[3%] xs:top-[1%] xs:right-0 xs:h-[16rem] md:h-[18rem] lg:h-[20rem] lg:mr-20 md:mr-16 sm:mr-12 xs:mr-8 mx-4 my-6">
        <img
          className="object-contain h-[50%] xs:w-full xs:h-full"
          src={hero}
          alt="Hero Banner"
        />
        <div className="block xs:hidden -z-30 absolute h-[75px] w-[75px] bg-gradient-to-r from-tertiary1 to-tertiary1 rounded-full top-0"></div>
      </div>
      <div className="hidden xs:block -z-30 absolute w-[75px] bg-gradient-to-r from-tertiary1 to-tertiary1 rounded-full lg:-top-[0.25%] sm:top-[3%] xs:top-[1%] xs:right-0 xs:h-[14rem] md:h-[16rem] lg:h-[18rem] lg:mr-20 md:mr-16 sm:mr-12 xs:mr-8 mx-4 my-6"></div>
    </div>
  );
};

export default Hero;
