import { useMediaQuery } from "react-responsive";
import { IoIosBatteryCharging } from "react-icons/io";

const Cards = ({ features, title, mainTitle }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const isOdd = features.length % 2 == 1;
  const lastIndex = features.length - 1;
  return (
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
            {title} <span className="text-primary">{mainTitle}</span>
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-4xl flex items-center justify-center">
          <dl
            className={`grid ${
              isMobile ? "" : isOdd ? "justify-items-center" : ""
            } max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none xs:grid-cols-2 lg:gap-y-16`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative pl-16 ${
                  isMobile
                    ? ""
                    : isOdd
                    ? index == lastIndex
                      ? "col-span-2"
                      : ""
                    : ""
                }`}
              >
                <dt className="text-base sm:text-lg font-semibold leading-7 font-quando text-gray-900">
                  <div className="absolute left-2 top-0 flex h-8 w-8 items-center justify-center">
                    <IoIosBatteryCharging className="h-8 w-8 text-primary" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm xs:text-base leading-7 font-oxygen text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Cards;
