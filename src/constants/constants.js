//Logo Images
import logo from "@/assets/logo.webp";
import logoAlt from "@/assets/logo-white.webp";

import hero from "@/assets/Home/hero.jpg";

//Support Images
import support1 from "@/assets/Support/support1.png";
import support2 from "@/assets/Support/support2.jpg";
import support3 from "@/assets/Support/support3.jpg";
import support4 from "@/assets/Support/support4.jpg";
import support5 from "@/assets/Support/support5.png";
import support6 from "@/assets/Support/support6.jpg";
import support7 from "@/assets/Support/support7.jpg";
import support8 from "@/assets/Support/support8.jpg";
import support9 from "@/assets/Support/support9.jpg";
import support10 from "@/assets/Support/support10.png";
import support11 from "@/assets/Support/support11.jpg";
import support12 from "@/assets/Support/support12.png";
import support13 from "@/assets/Support/support13.jpg";
import support14 from "@/assets/Support/support14.png";
import support15 from "@/assets/Support/support15.jpg";

//Service Images
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

//Process
import process from "@/assets/Process/process.jpg";

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

//Supported By
export const supportedBy = [
  {
    name: "IIMB NSRCEL",
    image: support1,
  },
  {
    name: "NASSCOM",
    image: support14,
  },
  {
    name: "FIIRE GOA",
    image: support2,
  },
  {
    name: "Manipal University",
    image: support3,
  },
  {
    name: "DST",
    image: support15,
  },
  {
    name: "HDFC Bank",
    image: support4,
  },
  {
    name: "CSIR NIIST",
    image: support5,
  },
  {
    name: "MAIT",
    image: support13,
  },
  {
    name: "UNDP",
    image: support12,
  },
  {
    name: "Campus Fund",
    image: support11,
  },
  {
    name: "Startup India",
    image: support10,
  },
  {
    name: "Startup Karnataka",
    image: support9,
  },
  {
    name: "MSME",
    image: support8,
  },
  {
    name: "KSPCB",
    image: support7,
  },
  {
    name: "CPCB",
    image: support6,
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
    name: "Economically viable",
    description: "loreum ipsum dolor sit amet loreum ipsum dolor sit amet",
    image: recovery2,
  },
];

//Services
export const services = [
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

//About Us
export const aboutUs = `• Li-Circle was born in 2020 with a dearth of bridging the gap of supply chain incapabilities to operate with end-of-life lithium-ion batteries. since then we have proactively built a strong supply chain with a robust reverse logistics mechanism in Pan India along with our process efficient process to refurbish, recycle, and refine. Our efforts have been and shall be in building sustainable value additions to the Lithium ecosystem and not just a particular sector of any.\n• Our current and growing strong overseas relationship has also been an image of our core Business Ethical Practices.\n• Being the first Lithium-ion battery recycler in the state as quoted by the KSPCB having 1000MTPA operational Capacity from 2023. Expanding to 4000MTPA in thDe coming financial year. Also by the volumes we operate in the particular sector, we are identified as a significant player in the market and we also strive to be the Key Stakeholder of the sector in the geography we operate.\n• We envision ourselves operating 2,70,000 MTPA by 2035 with Safe and reliable reverse logistics across the globe with a holistic recycling unit of advanced battery storage materials.`;

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
  process,
  process1,
  process2,
  process3,
  process4,
  process5,
};
