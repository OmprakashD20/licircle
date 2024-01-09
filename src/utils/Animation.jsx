import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children, delay = 0.3 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.5,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, delay: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const RevealDelayed = ({
  children,
  delay = 0.3,
  initialScale = 0.5,
  className,
  onClick = () => {},
  role = "default",
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      role={role}
      onClick={onClick}
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          scale: initialScale,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SlideFromLeft = ({ children, delay = 0.3 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          x: "-100%",
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, delay: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const SlideFromBottom = ({ children, delay = 0.3 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          y: "100%",
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 0.3 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const SlideFromRight = ({ children, delay = 0.3 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          x: "100%",
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, delay: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const SlideFromTop = ({ children }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          opacity: 0,
          y: "-100%",
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 0.3 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const StaggeredAnimation = ({ children, index, delay = 0.3 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const fadeInAnimationsVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (index + 1) * delay,
      },
    }),
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.4 }}
      variants={fadeInAnimationsVariants}
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export {
  Reveal,
  RevealDelayed,
  SlideFromLeft,
  SlideFromRight,
  SlideFromTop,
  SlideFromBottom,
  StaggeredAnimation,
};
