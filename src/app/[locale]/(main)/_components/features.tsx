import { FeaturesSection } from "@/components/features-section";
import { useTranslations } from "next-intl";

export const Features = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-white flex items-center justify-center bg-blue-banner text-white">
      <div className="flex flex-col md:flex-row h-screen w-[70%] mx-auto pt-[150px] md:pt-0">
        <FeaturesSection title="Product" effectDirection="top">
          <>
            <p>{t("features.product.desc.one")}</p>

            <p className="mt-8">{t("features.product.desc.two")}</p>
          </>
        </FeaturesSection>

        <FeaturesSection title="Technology" effectDirection="bottom">
          <>
            <p>{t("features.technology.desc.one")}</p>
            <p className="mt-8">{t("features.technology.desc.two")}</p>
          </>
        </FeaturesSection>

        <FeaturesSection title="Application" effectDirection="top">
          <>
            <p>{t("features.application.desc.one")}</p>
            <p className="mt-8">{t("features.application.desc.two")}</p>
          </>
        </FeaturesSection>

        <FeaturesSection title="Blockchain" effectDirection="bottom">
          <>
            <p>{t("features.blockchain.desc.one")}</p>
            <p className="mt-8">{t("features.blockchain.desc.two")}</p>
          </>
        </FeaturesSection>
      </div>
    </div>
  );
};
