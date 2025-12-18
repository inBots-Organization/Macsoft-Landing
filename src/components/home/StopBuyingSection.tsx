import { useTranslation } from "react-i18next";

const StopBuyingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 pt-8 sm:pt-10 flex flex-col items-start relative z-20">
      {/* Top Content - Left Aligned */}
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
          <span className="text-blue-500">{t("stopBuying.title")}</span>{" "}
          {t("stopBuying.titleRest")}
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          {t("stopBuying.description")}
        </p>
      </div>

      {/* Content and Image Row */}
      <div className="w-full flex flex-col md:flex-row items-start gap-8 sm:gap-12 mt-6 sm:mt-8">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            {t("stopBuying.subtitle")}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
            {t("stopBuying.subtitleDescription")}
          </p>

          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {[
              {
                before: t("stopBuying.point1"),
                highlight: t("stopBuying.point1Highlight"),
                after: t("stopBuying.point1Rest"),
              },
              {
                before: t("stopBuying.point2"),
                highlight: t("stopBuying.point2Highlight"),
                after: t("stopBuying.point2Rest"),
              },
              {
                before: t("stopBuying.point3"),
                highlight: t("stopBuying.point3Highlight"),
                after: t("stopBuying.point3Rest"),
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
              >
                {/* Custom blue dot */}
                <div className="mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <span>
                  {item.before}
                  <span className="text-blue-500 font-semibold">
                    {item.highlight}
                  </span>
                  {item.after}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed max-w-xl">
            {t("stopBuying.footer")}
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center items-center relative mt-8 md:mt-0">
          {/* Subtle back glow for the agents */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
          <img
            alt="AI Agents Team"
            className="w-full max-w-xs sm:max-w-md h-auto object-contain relative z-10 animate-fade-in-right hover:scale-105 transition-all duration-500"
            src="/Agents.png"
          />
        </div>
      </div>
    </section>
  );
};

export default StopBuyingSection;
