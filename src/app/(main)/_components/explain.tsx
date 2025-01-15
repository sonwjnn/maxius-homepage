import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Explain = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white bg-dark-banner"
    >
      <motion.div
        className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:text-5xl mx-auto text-white text-3xl font-bold text-balance"
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Kích hoạt animation khi inView = true
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={textVariants}
      >
        1.<span className="text-orange-400">Self-produced</span> sermiconductors
        <br />
        2.Production and Sales of <span className="text-orange-400">
          H
        </span>igh- <span className="text-orange-400">P</span>
        erformance <span className="text-orange-400">S</span>ervers with
        self-manufactured semiconductors
        <br />
        3.Construction <span className="text-orange-400">
          Blockchain IDC
        </span>{" "}
        based on high-performance servers
        <br />
        4.Establish solution relating to Blockchain{" "}
        <span className="text-orange-400">(IPFS)</span>
      </motion.div>
    </div>
  );
};
