import {
  support1,
  support2,
  support3,
  support4,
  support5,
} from "@/constants/constants";

const Awards = () => {
  return (
    <div className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-quando text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-8 text-gray-900">
          Supported by
        </h2>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={support1}
            alt="Supporter 1"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={support2}
            alt="Supporter 2"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={support3}
            alt="Supporter 3"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={support4}
            alt="Supporter 4"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={support5}
            alt="Supporter 5"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
