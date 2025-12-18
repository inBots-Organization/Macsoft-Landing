import React from "react";
import { FaShieldAlt, FaEye, FaChartLine } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6">
      {/* LIGHT BOW IMAGE */}
      <div className="w-full max-w-5xl relative opacity-80 mx-auto">
        <img alt="Light Bow Effect" className="w-full" src="/Light Bow.png" />
        <div className="text-center absolute z-10 top-1/2 sm:top-2/3 md:top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-y-0 px-4 sm:px-6 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            {t("features.title")}{" "}
            <span className="text-blue-500">
              {t("features.titleHighlight")}
            </span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("features.description")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative my-6 sm:my-8 md:my-10">
        <FeatureCard
          animationDelay="animate-card-1"
          borderColor="border-red-500/30"
          description={t("features.enforcer.description")}
          gradient="from-red-900/20 to-transparent"
          icon={<FaShieldAlt className="text-red-400 w-6 h-6" />}
          subtitle={t("features.enforcer.subtitle")}
          title={t("features.enforcer.title")}
        />
        <FeatureCard
          animationDelay="animate-card-2"
          borderColor="border-green-500/30"
          description={t("features.specialist.description")}
          gradient="from-green-900/20 to-transparent"
          icon={<FaEye className="text-green-400 w-6 h-6" />}
          subtitle={t("features.specialist.subtitle")}
          title={t("features.specialist.title")}
        />
        <FeatureCard
          animationDelay="animate-card-3"
          borderColor="border-blue-500/30"
          description={t("features.manager.description")}
          gradient="from-blue-900/20 to-transparent"
          icon={<FaChartLine className="text-blue-400 w-6 h-6" />}
          subtitle={t("features.manager.subtitle")}
          title={t("features.manager.title")}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
