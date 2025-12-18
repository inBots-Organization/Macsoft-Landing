import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-3 xs:px-4 sm:px-6 flex flex-col items-center overflow-hidden mt-10 xs:mt-12 sm:mt-16 md:mt-20 pb-10 xs:pb-12 sm:pb-16 md:pb-20">
      {/* Bottom Light Effect Image */}
      <div className="relative w-full max-w-6xl">
        <img
          alt="Spotlight Glow"
          className="w-full h-auto"
          src="/light effect-02.png"
        />
        <div className="relative text-center z-10 w-full px-2 xs:px-3 sm:px-4 md:px-6 -mt-[60%] xs:-mt-[50%] sm:-mt-[40%] md:absolute md:top-1/5 md:mt-0">
          <h3 className="text-lg  sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight">
            {t("cta.title")}
            <span className="text-blue-500">{t("cta.titleHighlight")}</span>
            {t("cta.titleRest")}
          </h3>
          <p className="text-gray-300 text-[10px] xs:text-xs sm:text-sm md:text-base mb-6 xs:mb-6 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <div className="inline-block mb-4 xs:mb-4 sm:mb-8 z-10 w-full sm:w-auto px-2 xs:px-4 sm:px-0">
            <Button
              className="bg-transparent hover:bg-blue-600/20 border-2 border-blue-500/50 hover:border-blue-400 text-white font-semibold px-4 xs:px-6 sm:px-10 md:px-14 py-2 xs:py-3 sm:py-5 md:py-7 text-xs xs:text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              size="lg"
              variant="bordered"
            >
              {t("cta.button")}
            </Button>
          </div>

          <p className="text-xs sm:text-md text-gray-300 px-2 xs:px-4">
            {t("cta.footer")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA
