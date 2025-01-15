import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: p1Ref, inView: p1InView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: p2Ref, inView: p2InView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="min-h-screen bg-white md:bg-first-banner md:bg-center relative">
      <div className="max-w-2xl space-y-8 absolute left-[10%] bottom-1/3 sm:bottom-[8%]">
        <motion.h1
          className="text-[#1A2A5A] text-[45px] sm:text-8xl font-bold tracking-tight -ml-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: h1InView ? 1 : 0, y: h1InView ? 0 : -50 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          ref={h1Ref}
        >
          MAX I & US
        </motion.h1>

        <div className="text-[#222222] text-[15px] sm:text-xl font-light">
          <motion.p
            className="leading-snug w-[247px] sm:w-[415px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: p1InView ? 1 : 0, x: p1InView ? 0 : -50 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            ref={p1Ref}
          >
            Maxius is the only self-developed semiconductor company that focuses
            on developing High-Performance Servers. We provide specialized
            solutions tailored towards different sectors of the IT industry and
            strive to break into the global market as a leader in server
            technology.
          </motion.p>
          <motion.p
            className="leading-snug mt-5 w-[232px] sm:w-auto sm:mt-[100px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: p2InView ? 1 : 0, x: p2InView ? 0 : -50 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            ref={p2Ref}
          >
            Together, we will be the best in value and speed.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
