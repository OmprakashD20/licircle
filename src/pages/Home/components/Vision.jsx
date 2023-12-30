import { FaBatteryEmpty } from "react-icons/fa";

const Vision = () => {
  const missions = [
    {
      description:
        "Supporting lithium-ion battery-related OEMs to meet their statutory Extended Producer Responsibility.",
      icon: FaBatteryEmpty,
    },
    {
      description:
        "Supporting lithium-ion battery-related OEMs to meet their statutory Extended Producer Responsibility.",
      icon: FaBatteryEmpty,
    },
    {
      description:
        "Looping them to the circular economy by supplying the extracted precious metals back to cell manufacturing.",
      icon: FaBatteryEmpty,
    },
  ];
  return (
    <div className="relative overflow-hidden pb-16 sm:pb-24 px-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="font-quando text-xl font-semibold text-primary">
                GreenTechRevolution
              </h2>
              <p className="mt-6 text-3xl font-bold font-bebasNeue tracking-wider sm:text-4xl">
                Vision
              </p>
              <p className="mt-3 text-base sm:text-lg text-gray-600 font-oxygen">
                To strengthen the global Advanced Battery Storage raw material
                supply chain by sustainable and eco-friendly urban mining,
                enhancing the circular economy.
              </p>
              <p className="mt-6 text-3xl font-bold font-bebasNeue tracking-wider sm:text-4xl">
                Mission
              </p>
              <dl className="mt-4 max-w-xl space-y-4 text-base text-gray-600 lg:max-w-none">
                {missions.map((mission, index) => (
                  <div key={index} className="">
                    <dt className="flex font-oxygen">
                      <span className="flex items-center justify-center w-10 h-10">
                        <mission.icon className="w-6 h-6 text-primary" />
                      </span>
                      <span className="ml-4 text-base sm:text-lg">
                        {mission.description}
                      </span>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vision and Mission"
            className="w-[48rem] h-[450px] object-cover max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
