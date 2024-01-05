//Logo Images
import logo from "@/assets/logo.webp";
import logoAlt from "@/assets/logo-white.webp";

import hero from "@/assets/Home/hero.jpg";

//Support Images
import support1 from "@/assets/Support/support1.png";
import support2 from "@/assets/Support/support2.png";
import support3 from "@/assets/Support/support3.png";
import support4 from "@/assets/Support/support4.png";
import support5 from "@/assets/Support/support5.png";

//Service Images
import service1 from "@/assets/About/service1.svg";
import service2 from "@/assets/About/service2.svg";
import service3 from "@/assets/About/service3.svg";
import service4 from "@/assets/About/service4.svg";
import service5 from "@/assets/About/service5.svg";
import service6 from "@/assets/About/service6.svg";
import service8 from "@/assets/About/service8.svg";

//Why Us Images
import whyUs2 from "@/assets/Home/why-us2.svg";
import whyUs3 from "@/assets/Home/why-us3.svg";
import whyUs4 from "@/assets/Home/why-us4.svg";

//Mission Images
import mission1 from "@/assets/Home/mission1.png";
import mission2 from "@/assets/Home/mission2.png";
import mission3 from "@/assets/Home/mission3.png";

//Process Images
import process1 from "@/assets/Process/stage1.png";
import process2 from "@/assets/Process/stage2.png";
import process3 from "@/assets/Process/stage3.png";
import process4 from "@/assets/Process/stage4.png";
import process5 from "@/assets/Process/stage5.png";

//Product Images
import battery from "@/assets/Products/battery.png";
import blackMass from "@/assets/Products/black-mass.png";
import recovered1 from "@/assets/Products/recovered1.png";
import recovered2 from "@/assets/Products/recovered2.png";

//Mechanical Processing Images
import tons from "@/assets/Technology/Mechanical/tons.svg";

//Repurpose Images
import repurpose1 from "@/assets/Technology/Repurpose/battery.svg";
import repurpose2 from "@/assets/Technology/Repurpose/optimization.svg";
import repurpose3 from "@/assets/Technology/Repurpose/control.svg";

//Recovery Images
import recovery1 from "@/assets/Technology/Recovery/recovery1.png";
import recovery2 from "@/assets/Technology/Recovery/recovery2.png";
import recovery3 from "@/assets/Technology/Recovery/recovery3.png";
import recovery4 from "@/assets/Technology/Recovery/recovery4.png";
import recovery5 from "@/assets/Technology/Recovery/recovery5.png";

//Products
export const products = [
  {
    name: "Refurbished Battery",
    image: battery,
  },
  {
    name: "Black Mass",
    image: blackMass,
  },
  {
    name: "Recovered LiCO₃",
    image: recovered1,
  },
  {
    name: "Recovered FePO₄",
    image: recovered2,
  },
];

//Missions
export const missions = [
  {
    description:
      "Supporting lithium-ion battery-related OEMs to meet their statutory Extended Producer Responsibility.",
    icon: mission1,
  },
  {
    description:
      "Safely collecting and processing the end-of-life lithium-ion batteries.",
    icon: mission2,
  },
  {
    description:
      "Looping them to the circular economy by supplying the extracted precious metals back to cell manufacturing.",
    icon: mission3,
  },
];

//Nav Links
export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Process",
    href: "/process",
  },
  {
    name: "Technology",
    href: "/technology",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

//Technology 1
export const MechanicalProcessing = [
  {
    name: "4 Tons per day unit-existing",
    description: "loreum ipsum dolor sit amet loreum ipsum dolor sit amet",
    icon: tons,
  },
];

//Technology 2
export const Repurposing = [
  {
    name: "Swift Battery Testing",
    description:
      "To predict remaining capacity of battery module using data science and machine learning.",
    icon: repurpose1,
  },
  {
    name: "Reassembly Optimization",
    description:
      "Optimized reassembly of battery modules to build second-life ESS to cut costs on opex.",
    icon: repurpose2,
  },
  {
    name: "State-of-the-Art Control",
    description: "To continuously monitor and maintain batteries health.",
    icon: repurpose3,
  },
];

//Technology 3
export const Recovery = [
  {
    name: "No Chemicals, Non-Hazardous",
    description: "loreum ipsum dolor sit amet loreum ipsum dolor sit amet",
    image: recovery3,
  },
  {
    name: "Sustainable Recovery Tech - Slurry Electrolysis",
    description: "loreum ipsum dolor sit amet loreum ipsum dolor sit amet",
    image: recovery1,
  },
  {
    name: "High Purity",
    description: "loreum ipsum dolor sit amet loreum ipsum dolor sit amet",
    image: recovery5,
  },
  {
    name: "Lesser carbon emission",
    description: "loreum ipsum dolor sit amet loreum ipsum dolor sit amet",
    image: recovery4,
  },
  {
    name: "Economical",
    description: "loreum ipsum dolor sit amet loreum ipsum dolor sit amet",
    image: recovery2,
  },
];

export const services = [
  {
    name: "EOL Solutions for EV Batteries",
    icon: service1,
  },
  {
    name: "Supply Chain Partnership",
    icon: service2,
  },
  {
    name: "Proprietary technology",
    icon: service3,
  },
  {
    name: "Robust Product",
    icon: service4,
  },
  {
    name: "Safe and reliable reverse logistics",
    icon: service5,
  },
  {
    name: "Buyback pan India",
    icon: service6,
  },
  {
    name: "100% Compliance support",
    icon: whyUs4,
  },
  {
    name: "Best in-class service",
    icon: service8,
  },
];

//Why Us
export const WhyUs = [
  {
    name: "Sustainability",
    description:
      "Li-Circle uses only repurposed EV battery modules, which reduces the carbon footprint by upto 80% compared to new ESS [Energy Storage Systems].",
    icon: recovery1,
  },
  {
    name: "Quality",
    description:
      "Li-Circle uses Tier 1 EV battery modules from a leading OEM and a well qualified BMS.",
    icon: whyUs2,
  },
  {
    name: "Safety",
    description: "Li-Circle uses best in class State-Of-the-Art BMS.",
    icon: whyUs3,
  },
  {
    name: "Support",
    description:
      "Through a local supply chain, we target to give our customers rapid and accurate support in succeeding with their energy storage needs using Li-Circle.",
    icon: whyUs4,
  },
];

//Images
export {
  logo,
  logoAlt,
  hero,
  support1,
  support2,
  support3,
  support4,
  support5,
  process1,
  process2,
  process3,
  process4,
  process5,
  battery,
  blackMass,
  recovered1,
  recovered2,
};
