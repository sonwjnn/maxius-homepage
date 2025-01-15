import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

export const Explain = () => {
  const t = useTranslations("HomePage");
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
        className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:text-5xl mx-auto text-white text-3xl font-semibold text-pretty space-y-2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={textVariants}
      >
        <p>{t("explain.one")}</p>
        <p>{t("explain.two")}</p>
        <p>{t("explain.three")}</p>
        <p>{t("explain.four")}</p>
      </motion.div>
    </div>
  );
};
