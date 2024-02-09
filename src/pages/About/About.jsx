import { IoIosBatteryFull } from "react-icons/io";

import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

import { services, aboutUs } from "@/constants/constants";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { SlideFromBottom, StaggeredAnimation, Reveal } from "@/utils/Animation";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="py-10 sm:py-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:mt-4 mx-auto max-w-4xl text-center">
            <SlideFromBottom delay={0.4}>
              <p className="font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
                Passionate about Environmental{" "}
                <span className="relative whitespace-nowrap">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-tertiary1"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="text-primary">Sustainability</span>
                </span>
              </p>
            </SlideFromBottom>
            <Reveal delay={0.6}>
              <p className="sm:mt-16 mt-10 text-base sm:text-lg sm:leading-8 font-oxygen text-gray-600 sm:text-justify whitespace-pre-line">
                {aboutUs}
              </p>
            </Reveal>
          </div>
          <SlideFromBottom delay={0.7}>
            <Card className="xs:mx-6 sm:mx-32 my-4 sm:my-16 bg-gray-100 border-0 shadow-lg">
              <CardContent className="px-8 py-4">
                <CardDescription className="text-sm sm:text-base md:text-lg text-black/75 font-quando text-center">
                  We collect lithium-ion waste irrespective of its geometry,
                  chemistry, and application.
                </CardDescription>
              </CardContent>
            </Card>
          </SlideFromBottom>
          <p className="mt-12 sm:mt-16 lg:mt-20 text-center font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
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
              <span className="text-primary">Services</span>
            </span>
          </p>
          <main className="container mx-auto mt-12">
            <div className="grid gap-6 mb-8 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <StaggeredAnimation key={index} delay={0.4} index={index}>
                  <div className="flex items-center p-4 bg-gray-100 hover:shadow-lg shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer rounded-xl border-2 border-green-500/60">
                    <div
                      className={`p-2 mr-4 ${
                        index % 4 === 0
                          ? "bg-green-100"
                          : index % 4 === 1
                          ? "bg-blue-100"
                          : index % 4 === 2
                          ? "bg-indigo-100"
                          : "bg-purple-100"
                      } rounded-full`}
                    >
                      <img
                        src={service.icon}
                        alt={service.name}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div>
                      <p className="mb-2 font-medium font-oxygen">
                        {service.name}
                      </p>
                    </div>
                  </div>
                </StaggeredAnimation>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
