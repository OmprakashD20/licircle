import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNavLink, NavLink } from "./components/NavLink";

import { logo, logoAlt, navLinks } from "@/constants/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 40) {
      setIsScrolled(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  const scrollVariants = {
    initial: {
      y: "-100vh",
      opacity: 0,
      position: "static",
    },
    visible: {
      y: 0,
      opacity: 1,
      top: "-100vh",
      position: "static",
    },
    scroll: {
      y: 0,
      opacity: 1,
      position: "fixed",
    },
  };

  return (
    <motion.div
      variants={scrollVariants}
      initial="initial"
      animate={isScrolled ? "scroll" : "visible"}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
      className={`z-10 h-14 md:h-10 ${
        isScrolled ? "rounded-b-[20px]" : ""
      } shadow-lg bg-background flex justify-between items-center px-4 xs:px-8 md:py-8 lg:px-20 w-full`}
    >
      <img className="h-5 sm:h-6 md:h-7 my-2" src={logo} alt="LiCircle" />
      <div className="hidden my-2 md:flex gap-6 items-center justify-between">
        {navLinks.map((link, index) => {
          return <NavLink key={index} link={link} />;
        })}
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <p className="md:hidden cursor-pointer text-md text-primary flex pt-1 items-center">
            <IoMdMenu onClick={toggleMenu} size={26} />
          </p>
        </SheetTrigger>
        <SheetContent side="top" className="h-full bg-background">
          <SheetHeader>
            <SheetTitle>
              <img className="h-5 sm:h-6" src={logo} alt="LiCircle" />
            </SheetTitle>
          </SheetHeader>
          <AnimatePresence>
            <motion.div
              variants={staggerVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-around items-center gap-4"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink key={index} link={link} />
                    </div>
                  );
                })}
              </div>
              <motion.div
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  open: {
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                    },
                  },
                  exit: {
                    opacity: 0,
                  },
                }}
                initial="initial"
                animate="open"
                exit="exit"
              >
                <p className="text-black font-medium text-base underline underline-offset-2 hover:scale-105 transition-transform cursor-pointer font-oxygen">
                  info@licircle.org.in
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default NavBar;
