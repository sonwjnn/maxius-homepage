import { StoryCard } from "@/components/story-card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

export const Story = () => {
  const t = useTranslations("HomePage");

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center w-[75%] mx-auto"
      data-fp-scrollable
    >
      <div className="flex justify-center items-center pb-12 mt-[150px]">
        <motion.h1
          className="text-[30px] md:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          ref={titleRef}
        >
          STORY
        </motion.h1>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-area"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: contentInView ? 1 : 0,
            x: contentInView ? 0 : -100,
          }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          ref={contentRef}
        >
          <StoryCard title="History">{t("story.history.desc")}</StoryCard>

          <StoryCard title="Partners">{t("story.partners.desc")}</StoryCard>

          <StoryCard title="Patents">{t("story.patents.desc")}</StoryCard>

          <StoryCard title="Awards">{t("story.awards.desc")}</StoryCard>
        </motion.div>
      </div>
    </div>
  );
};
