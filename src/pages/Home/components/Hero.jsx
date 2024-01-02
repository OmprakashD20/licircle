import { useMediaQuery } from "react-responsive";
import AnimatedButton from "@/components/Button/Button";

import {
  goal1,
  goal2,
  goal3,
  goal4,
  goal5,
  goal6,
  goal7,
  goal8,
  goal9,
} from "@/constants/constants";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div
      className={`relative overflow-hidden mb-12 pt-4 ${
        isMobile ? "-z-20" : ""
      }`}
    >
      <div className="pb-80 pt-8 xs:pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-36">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font-bebasNeue font-bold text-4xl sm:text-6xl">
              <span className="text-secondary2">Sparks</span> of Sustainability{" "}
              <br /> in Lithium Ion{" "}
              <span className="xs:hover:text-primary xs:relative cursor-pointer group xs:hover:font-semibold xs:text-black text-primary">
                Recycling
                <div
                  className={`absolute bottom-1 right-0 w-full h-0.5 bg-primary scale-x-0 xs:group-hover:scale-x-100 transition-transform duration-200`}
                ></div>
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-500">
              Compliant with 9 of 17 Global Goals - Environmental, Social and
              Governance.
            </p>
          </div>
          <div>
            <div className="mt-4">
              <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-44 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={goal1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-44 w-44 overflow-hidden rounded-lg">
                        <img
                          src={goal2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-44 w-44 overflow-hidden rounded-lg">
                        <img
                          src={goal3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-44 w-44 overflow-hidden rounded-lg">
                        <img
                          src={goal4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="max-sm:mt-4 h-44 w-44 overflow-hidden rounded-lg">
                        <img
                          src={goal5}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-44 w-44 overflow-hidden rounded-lg">
                        <img
                          src={goal6}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-44 w-44 overflow-hidden rounded-lg">
                        <img
                          src={goal7}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={goal8}
                          alt=""
                          className="h-full w-full object-cover object-left"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={goal9}
                          alt=""
                          className="h-full w-full object-cover object-left"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isMobile ? null : <AnimatedButton title={"Learn more"} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
