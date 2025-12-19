import { useTranslation } from "react-i18next";

const WhyAISection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-3 xs:px-4 sm:px-6 py-6 xs:py-8 sm:py-12 md:py-16 flex flex-col items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        {/* The Agent Image */}
        <div className="relative w-full max-w-4xl mb-3 xs:mb-4 sm:mb-6 md:mb-8 z-10">
          <img
            alt="Agent with Tablet"
            className="w-full h-auto object-contain opacity-0 animate-scale-in hover:scale-105 transition-transform duration-500"
            src="/agent-02.png"
          />
        </div>

        {/* "Why AI" Text Block */}
        <div className="relative w-full pt-3 xs:pt-4 sm:pt-2 md:pt-8 pb-4 xs:pb-6 sm:pb-8 md:pb-10 z-20 px-2 xs:px-3 sm:px-4 md:absolute md:top-3/5">
          <h2 className="text-xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center font-bold mb-2 xs:mb-3 sm:mb-4">
            {t("whyAI.title")}{" "}
            <span className="text-blue-500">{t("whyAI.titleHighlight")}</span>
          </h2>
          <p className="text-gray-400 text-center text-[10px] xs:text-xs sm:text-sm md:text-base mb-4 xs:mb-6 sm:mb-8 md:mb-10">
            {t("whyAI.description")}
          </p>

          <ul className="text-left space-y-1.5 xs:space-y-2 sm:space-y-3 max-w-5xl mx-auto">
            <li className="flex gap-1.5 xs:gap-2 sm:gap-3 text-gray-300 text-[10px] xs:text-xs sm:text-sm md:text-base">
              <span className="text-blue-500 font-bold shrink-0">
                {t("whyAI.point1Title")}
              </span>
              <span>{t("whyAI.point1Text")}</span>
            </li>
            <li className="flex gap-1.5 xs:gap-2 sm:gap-3 text-gray-300 text-[10px] xs:text-xs sm:text-sm md:text-base">
              <span className="text-blue-500 font-bold shrink-0">
                {t("whyAI.point2Title")}
              </span>
              <span>{t("whyAI.point2Text")}</span>
            </li>
            <li className="flex gap-1.5 xs:gap-2 sm:gap-3 text-gray-300 text-[10px] xs:text-xs sm:text-sm md:text-base">
              <span className="text-blue-500 font-bold shrink-0">
                {t("whyAI.point3Title")}
              </span>
              <span>{t("whyAI.point3Text")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
