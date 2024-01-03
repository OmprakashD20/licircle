import { IoIosBatteryFull } from "react-icons/io";

import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

import { services } from "@/constants/constants";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:mt-4 mx-auto max-w-4xl text-center">
            <p className="font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
              Passionate about{" "}
              <span className="text-primary">Environmental Sustainability</span>
            </p>
            <p className="sm:mt-16 mt-10 text-base sm:text-lg sm:leading-8 font-oxygen text-gray-600 sm:text-justify">
              Learn more about our commitment to responsible battery disposal
              and how we're making a positive impact on the planet. Discover our
              hassle-free battery collection services. Whether you're a
              household, business, or organization, we provide convenient
              solutions for safely gathering and recycling batteries of all
              types. <br />
              <br />
              We provide information on regulations and guidelines to help you
              stay compliant and avoid environmental penalties. We adhere to the
              highest industry standards, Find out about our certification and
              compliance with environmental regulations. We collect lithium-ion
              waste irrespective of its geometry, chemistry, and application.
              Understand the legal requirements for battery disposal. We provide
              information on regulations and guidelines to help you stay
              compliant and avoid environmental penalties.
            </p>
          </div>
          <p className="mt-12 sm:mt-16 lg:mt-20 text-center font-bebasNeue font-bold xs:text-6xl min-[320px]:text-5xl text-4xl">
            Our <span className="text-primary">Services</span>
          </p>
          <div className="mx-auto my-8 sm:my-12 max-w-2xl lg:max-w-4xl flex items-center justify-center">
            <dl className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-6 sm:gap-y-10 xs:max-w-none xs:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <dt>
                    <IoIosBatteryFull className="w-8 h-8 text-primary" />
                  </dt>
                  <dd className="ml-4 text-base sm:text-lg leading-8 font-oxygen text-gray-600">
                    {service.name}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Card className="mx-6 sm:mx-32 my-4 bg-gray-100 border-0 shadow-lg flex items-center justify-center">
            <CardContent className="px-8 py-4">
              <CardDescription className="text-sm sm:text-base md:text-lg text-black/75 font-quando">
                We collect lithium-ion waste irrespective of its geometry,
                chemistry, and application.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
