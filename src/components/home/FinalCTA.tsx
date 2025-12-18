import React from "react";
import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-4 sm:px-6 flex flex-col items-center overflow-hidden mt-15">
      {/* Bottom Light Effect Image */}
      <div className="relative w-full max-w-6xl pointer-events-none">
        <img
          alt="Spotlight Glow"
          className="w-full h-auto"
          src="/light effect-02.png"
        />
        <div className="absolute top-1/4 sm:top-1/8 text-center z-10 w-full px-4 sm:px-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            {t("cta.title")}
            <span className="text-blue-500">{t("cta.titleHighlight")}</span>
            {t("cta.titleRest")}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <div className="relative inline-block group mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-blue-600 blur-xl sm:blur-2xl opacity-50 group-hover:opacity-70 transition-opacity pointer-events-none" />
            <Button
              className="relative bg-transparent hover:bg-blue-600/20 border-2 border-blue-500/50 hover:border-blue-400 text-white font-semibold px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105"
              size="lg"
              variant="bordered"
            >
              {t("cta.button")}
            </Button>
          </div>

          <p className="text-md sm:text-md text-gray-300 px-4">
            {t("cta.footer")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA
