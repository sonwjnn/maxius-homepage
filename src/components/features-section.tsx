import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMedia } from "react-use";

type Props = {
  title: string;
  children: React.ReactNode;
  effectDirection?: "bottom" | "top";
};

export const FeaturesSection = ({
  title,
  children,
  effectDirection = "bottom",
}: Props) => {
  const isMobile = useMedia("(max-width: 768px)", false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const slideDirection = effectDirection === "bottom" ? -100 : 100;

  return (
    <motion.section
      className="relative border-t w-full md:w-[25%] md:border-l first-of-type:border-none border-white/20 p-4 md:p-8 transition-all duration-300 ease-in-out hover:scale-x-120 origin-left group after:content-[''] after:inset-0 after:bg-white/20 after:absolute after:z-1 after:opacity-0 after:hover:opacity-100 after:transition-opacity"
      whileHover={{
        width: isMobile ? "100%" : "33%",
        transition: { duration: 0, ease: "easeInOut" },
      }}
      initial={{ width: isMobile ? "100%" : "25%" }}
      animate={{ opacity: inView ? 1 : 0, width: isMobile ? "100%" : "25%" }}
      ref={ref}
    >
      <div className="md:mt-[30vh] w-full md:w-auto md:h-[250px]">
        <motion.h2
          className="mb-8 text-xl lg:text-[30px] font-bold group-hover:text-[#ff9933]"
          initial={{ opacity: 0, y: slideDirection }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : slideDirection }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          ref={ref}
        >
          {title}
        </motion.h2>
        <div className="space-y-4 text-xs lg:text-sm xl:text-base hidden group-hover:block">
          {children}
        </div>
      </div>
    </motion.section>
  );
};
