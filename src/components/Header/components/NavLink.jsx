import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "@/context/AppContext";

const MobileNavLink = ({ link }) => {
  const { currentPath } = useContext(AppContext);
  const { name, href } = link;
  const isActive = currentPath === href;
  const textColor = isActive ? "text-secondary2" : "text-white/80";
  const underline = isActive ? "underline underline-offset-2 decoration-secondary2" : "";

  const navLinkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };
  return (
    <motion.div variants={navLinkVariants} className="text-2xl uppercase">
      <Link href={href} className={`${textColor} ${underline}`}>
        {name}
      </Link>
    </motion.div>
  );
};

const NavLink = ({ link }) => {
  const { currentPath } = useContext(AppContext);
  const { name, href } = link;
  const isActive = currentPath === href;
  const textColor = isActive ? "text-primary" : "text-black/80";
  const fontWeight = isActive ? "font-semibold" : "font-normal";
  const underlineColor = isActive ? "bg-primary" : "bg-black/80";
  return (
    <div>
      <Link
        className={`text-lg uppercase tracking-widest relative group ${textColor} ${fontWeight}`}
        href={href}
      >
        {name}
        <div
          className={`absolute w-full h-0.5 ${underlineColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-200`}
        ></div>
      </Link>
    </div>
  );
};

export { MobileNavLink, NavLink };
