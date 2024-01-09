import {
  StaggeredAnimation,
  SlideFromLeft,
  Reveal,
  RevealDelayed,
} from "@/utils/Animation";

import { missions } from "@/constants/constants";

const Vision = () => {
  return (
    <div className="container w-full my-4 mb-8 pt-8 p-4 mx-auto">
      <SlideFromLeft delay={0}>
        <div className="relative mx-auto md:max-w-2xl pt-6 min-w-0 break-words bg-gray-100 border-2 border-green-500 w-full mb-12 hover:shadow-lg shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer rounded-xl">
          <div className="text-center">
            <h3 className="sm:text-4xl text-3xl font-quando font-bold leading-normal uppercase">
              Our{" "}
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-tertiary1"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="text-primary">Vision</span>
              </span>
            </h3>
            <div className="mt-6 py-2 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <Reveal delay={0.4}>
                  <p className="leading-relaxed text-gray-600 font-oxygen py-2 px-4">
                    To strengthen the global Advanced Battery Storage raw
                    material supply chain by sustainable and eco-friendly urban
                    mining, enhancing the circular economy.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </SlideFromLeft>

      <Reveal delay={0.6}>
        <p className="text-center font-quando font-bold sm:text-4xl text-3xl mb-12 uppercase">
          <span className="relative whitespace-nowrap">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-tertiary1"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="text-primary">Mission</span>
          </span>
        </p>
      </Reveal>
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        {missions.map((mission, index) => (
          <StaggeredAnimation key={index} index={index}>
            <div
              className={`${
                index == 0
                  ? "border-blue-500"
                  : index == 1
                  ? "border-indigo-500"
                  : "border-purple-500"
              } border-2 rounded-xl bg-gray-100 p-6 pb-0 text-center hover:shadow-lg shadow-lg hover:scale-105 transition-all h-full duration-300 hover:cursor-pointer`}
            >
              <RevealDelayed delay={0.6 * index}>
                <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-tertiary2 shadow-lg shadow-tertiary1/40">
                  <StaggeredAnimation index={index} delay={0.5}>
                    <img
                      src={mission.icon}
                      alt={`Mission-${index + 1}`}
                      height={38}
                      width={38}
                    />
                  </StaggeredAnimation>
                </div>
              </RevealDelayed>
              <RevealDelayed delay={0.6 * index}>
                <p className="-translate-y-8 px-4 text-gray-600 font-oxygen flex justify-center items-center">
                  {mission.description}
                </p>
              </RevealDelayed>
            </div>
          </StaggeredAnimation>
        ))}
      </div>
    </div>
  );
};

export default Vision;
