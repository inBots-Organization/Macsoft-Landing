import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { useTranslation } from "react-i18next";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  borderColor: string;
  gradient: string;
  animationDelay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  borderColor,
  gradient,
  animationDelay,
}) => {
  const { t } = useTranslation();

  return (
    <Card
      className={`bg-[#0a0a16] border ${borderColor} h-full p-2 sm:p-3 opacity-0 ${animationDelay} hover:scale-105 hover:border-opacity-50 transition-all duration-300`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-50 pointer-events-none`}
      />
      <CardHeader className="flex gap-2 sm:gap-3 pb-2 z-10">
        <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg border border-white/10">
          {icon}
        </div>
        <div className="flex flex-col text-left">
          <p className="text-sm sm:text-md font-bold text-white uppercase">
            {title}
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
            {subtitle}
          </p>
        </div>
      </CardHeader>
      <CardBody className="z-10">
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
          {description}
        </p>
        {/* Visual Placeholder for Card Screenshot */}
        <div className="w-full h-24 sm:h-28 md:h-32 bg-black/40 rounded border border-white/5 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 grid grid-cols-6 gap-1 opacity-20">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full" />
            ))}
          </div>
          <div className="text-[10px] sm:text-xs text-gray-600 font-mono p-2 text-center">
            {t("features.liveAgentView")} <br />
            <span
              className={
                title.includes("ENFORCER") || title.includes("المُنفذ")
                  ? "text-red-500"
                  : title.includes("Manager") || title.includes("المدير")
                    ? "text-blue-500"
                    : "text-green-500"
              }
            >
              {t("features.processing")}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
