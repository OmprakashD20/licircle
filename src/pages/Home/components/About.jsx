import { IoIosBatteryFull } from "react-icons/io";

const About = () => {
  const measures = [
    {
      name: "EOL Solutions for EV Batteries",
    },
    {
      name: "Supply Chain Partnership",
    },
    {
      name: "Proprietary technology",
    },
    {
      name: "Robust Producty",
    },
    {
      name: "Safe and reliable reverse logistics",
    },
    {
      name: "Buyback pan India",
    },
    {
      name: "100% Compliance support",
    },
    {
      name: "Best in-class service",
    },
  ];
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
            Passionate about{" "}
            <span className="text-primary">Environmental Sustainability</span>
          </p>
          <p className="mt-10 text-base sm:text-lg sm:leading-8 font-oxygen text-gray-600 sm:text-justify">
            Learn more about our commitment to responsible battery disposal and
            how we're making a positive impact on the planet. Discover our
            hassle-free battery collection services. Whether you're a household,
            business, or organization, we provide convenient solutions for
            safely gathering and recycling batteries of all types. <br />
            <br />
            We provide information on regulations and guidelines to help you
            stay compliant and avoid environmental penalties. We adhere to the
            highest industry standards, Find out about our certification and
            compliance with environmental regulations. We collect lithium-ion
            waste irrespective of its geometry, chemistry, and application.
            Understand the legal requirements for battery disposal. We provide
            information on regulations and guidelines to help you stay compliant
            and avoid environmental penalties.
          </p>
        </div>
        <div className="mx-auto my-16 max-w-2xl sm:my-20 lg:my-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 sm:gap-y-10 lg:max-w-none lg:grid-cols-2">
            {measures.map((measure, index) => (
              <div key={index} className="flex items-center">
                <dt>
                  <IoIosBatteryFull className="w-8 h-8 text-primary" />
                </dt>
                <dd className="ml-4 text-base sm:text-lg leading-8 font-oxygen text-gray-600">
                  {measure.name}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-10 text-base sm:text-lg sm:leading-8 font-oxygen text-gray-600">
            Li-Circle's fast grading allows you to analyze and understand
            batteries' State of Health and maximize their remaining useful life.{" "}
            <span className="font-semibold">
              Repurposing EV batteries doesn't have to be confusing.
            </span>{" "}
            Li-Circle can help you determine the appropriate use for each
            battery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
