import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";

import { IoIosFastforward } from "react-icons/io";

import {
  MechanicalProcessing,
  Repurposing,
  Recovery,
} from "@/constants/constants";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import Cards from "@/components/Shared/Cards";

const Technology = () => {
  return (
    <>
      <NavBar />
      <Cards
        features={MechanicalProcessing}
        title={""}
        mainTitle={"Mechanical Processing"}
      />
      <Card className="mx-6 sm:mx-32 max-sm:mb-8 my-4 bg-gray-200 border-0 shadow-lg">
        <CardHeader className="p-4 px-8">
          <CardTitle className="text-xl md:text-2xl font-quando text-primary flex">
            <IoIosFastforward size={24} className="text-primary mt-1" />
            <span className="ml-2">Fast Grading</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-4">
          <CardDescription className="text-base lg:text-lg text-black/75 font-oxygen">
            Li-Circle's fast grading allows you to analyze and understand
            batteries State of Health and maximize their remaining useful life.
          </CardDescription>
        </CardContent>
      </Card>
      <Cards features={Repurposing} title={""} mainTitle={"Repurposing"} />
      <Card className="mx-6 sm:mx-32 max-sm:mb-8 my-4 bg-gray-200 border-0 shadow-lg">
        <CardHeader className="p-4 px-8">
          <CardTitle className="text-xl md:text-2xl font-quando text-primary flex">
            <IoIosFastforward size={24} className="text-primary mt-1" />
            <span className="ml-2">
              Extract maximum value from used batteries
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-4">
          <CardDescription className="text-base md:text-lg text-black/75 font-oxygen">
            Repurposing EV batteries doesn't have to be confusing. Li-Circle can
            help you determine the appropriate use for each battery.
          </CardDescription>
        </CardContent>
      </Card>
      <Cards features={Recovery} title={""} mainTitle={"Recovery"} />
      <Footer />
    </>
  );
};

export default Technology;
