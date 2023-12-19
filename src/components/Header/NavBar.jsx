import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNavLink, NavLink } from "./components/NavLink";

import { logo, navLinks } from "@/constants/constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-10 w-full md:h-0 flex justify-between items-center pt-8 px-6 md:p-10">
      <img className="h-6 sm:h-7 md:h-8" src={logo} alt="LiCircle" />
      <div className="hidden md:flex gap-6 items-center justify-between">
        {navLinks.map((link, index) => {
          return <NavLink key={index} link={link} />;
        })}
      </div>
      <p className="md:hidden cursor-pointer text-md text-primary flex pt-2 items-center">
        <IoMdMenu onClick={toggleMenu} size={28} />
      </p>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={navBarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-primary pt-5 px-6"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <img
                  className="h-6 sm:h-7 mix-blend-difference"
                  src={logo}
                  alt="LiCircle"
                />
                <p className="cursor-pointer text-md text-white flex place-items-center">
                  <IoMdClose onClick={toggleMenu} size={28} />
                </p>
              </div>
              <motion.div
                variants={staggerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex pb-32 flex-col h-full justify-center items-center gap-4"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink key={index} link={link} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
