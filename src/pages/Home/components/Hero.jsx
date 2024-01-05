import { Link } from "react-router-dom";

import { hero } from "@/constants/constants";

const Hero = () => {
  return (
    <div className="relative flex flex-col max-xs:flex-col-reverse items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:pt-8 xl:max-w-6xl">
      <div className="w-full h-64 lg:h-[80svh] lg:w-1/2">
        <img
          className="h-full w-full object-cover xs:rounded-b-2xl lg:rounded-2xl shadow-xl"
          src={hero}
          alt="Hero Image"
        />
      </div>
      <div className="max-w-lg rounded-2xl md:bg-gray-100 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 md:border-2 md:border-green-500">
        <div className="flex flex-col p-12 md:px-16">
          <h1 className="font-bebasNeue font-bold text-4xl sm:text-6xl">
            <span className="text-secondary2">Sparks</span> of Sustainability{" "}
            <br /> in Lithium Ion{" "}
            <span className="xs:hover:text-primary xs:relative cursor-pointer group xs:hover:font-semibold xs:text-black text-primary">
              Recycling
              <div
                className={`absolute bottom-2 right-0 w-full h-0.5 bg-primary scale-x-0 xs:group-hover:scale-x-100 transition-transform duration-200`}
              ></div>
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-oxygen">
            Compliant with 9 of 17 Global Goals - Environmental, Social and
            Governance.
          </p>
          <div className="mt-4">
            <Link
              to="/technology"
              className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 py-4 px-10 hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 md:w-48 rounded-2xl font-oxygen"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
