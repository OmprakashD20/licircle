import { useMediaQuery } from "react-responsive";

import AnimatedButton from "@/components/Button/Button";

const Hero = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 xs:py-28">
      <div className="text-center">
        <h1 className="font-bebasNeue font-bold sm:text-7xl xs:text-6xl min-[320px]:text-5xl text-4xl">
          <span className="text-secondary2">Sparks</span> of Sustainability{" "}
          <br /> in Lithium Ion{" "}
          <span className="xs:hover:text-primary xs:relative cursor-pointer group xs:hover:font-semibold xs:text-black text-primary">
            Recycling
            <div
              className={`absolute bottom-3 right-0 w-full h-0.5 bg-primary scale-x-0 xs:group-hover:scale-x-100 transition-transform duration-200`}
            ></div>
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-600 font-oxygen">
          Compliant with 9 of 17 ESG - Environmental, Social and Governance.
          <br />
          <span className="text-sm sm:text-base">
            Reducing carbon footprint by 30%. Reduce resource dependence on
            mining. Nurturing micro-entrepreneurship and skilling in rural
            areas. Preventing leaching and landfill of hazardous waste in the
            environment.
          </span>
        </p>
        <div className="hidden sm:my-8 sm:flex sm:justify-center">
          <div className="relative font-oxygen rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-primary">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-primary">
              <span className="absolute inset-0" />
              Read more <span>&rarr;</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <AnimatedButton title={"Learn more"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
