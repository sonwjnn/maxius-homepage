import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="min-h-screen flex gap-x-12 items-center justify-center bg-footer-banner bg-center">
      <div className="w-[75%] mx-auto flex flex-col gap-y-12 text-white">
        <div className="w-[250px]">
          <motion.h3
            className="text-xl sm:text-[34px] font-bold whitespace-nowrap"
            ref={titleRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: titleInView ? 0 : 100,
              opacity: titleInView ? 1 : 0,
            }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            Company.
          </motion.h3>
          <div className="px-2 mt-2 hover:bg-white group transition cursor-pointer">
            <motion.p
              className="font-montserrat font-extralight text-sm group-hover:text-neutral-900 h-8 flex items-center"
              ref={contentRef}
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: contentInView ? 0 : -100,
                opacity: contentInView ? 1 : 0,
              }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >
              support@maxius.io
              <Mail className="ml-auto size-4 hidden text-[#222] group-hover:block" />
            </motion.p>
          </div>
        </div>
        <div className="w-[250px]">
          <motion.h3
            className="text-xl sm:text-[34px] font-bold whitespace-nowrap"
            ref={titleRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: titleInView ? 0 : 100,
              opacity: titleInView ? 1 : 0,
            }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            Warranty.
          </motion.h3>
          <div className="px-2 mt-2 hover:bg-white group transition cursor-pointer">
            <motion.p
              className="font-montserrat font-extralight text-sm group-hover:text-neutral-900 h-8 flex items-center"
              ref={contentRef}
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: contentInView ? 0 : -100,
                opacity: contentInView ? 1 : 0,
              }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >
              Learn more {">"}
            </motion.p>
          </div>
        </div>
        <div className="w-[250px]">
          <motion.h3
            className="text-xl sm:text-[34px] font-bold whitespace-nowrap"
            ref={titleRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: titleInView ? 0 : 100,
              opacity: titleInView ? 1 : 0,
            }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            Technical support.
          </motion.h3>
          <div className="px-2 mt-2 hover:bg-white group transition cursor-pointer">
            <motion.p
              className="font-montserrat font-extralight text-sm group-hover:text-neutral-900 h-8 flex items-center"
              ref={contentRef}
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: contentInView ? 0 : -100,
                opacity: contentInView ? 1 : 0,
              }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >
              support@maxius.io
              <Mail className="ml-auto size-4 hidden text-[#222] group-hover:block" />
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
