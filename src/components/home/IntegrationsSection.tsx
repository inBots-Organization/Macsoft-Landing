import { useTranslation } from "react-i18next";

const IntegrationsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-3 xs:px-4 sm:px-6 py-6 xs:py-8 sm:py-12 md:py-16 flex flex-col items-center overflow-hidden">
      {/* Top Glow/Beam Effect */}
      <div className="relative w-full max-w-4xl z-0">
        <img
          alt="Light Beam"
          className="w-full h-auto mix-blend-screen"
          src="/Light Effect.png"
        />
        {/* Stack Headline & Logos */}
        <div className="absolute bottom-0 sm:bottom-1/7 z-10 w-full text-center px-2 xs:px-3 sm:px-4 mb-3 xs:mb-4 sm:mb-8 md:mb-12">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-6">
            <span className="text-blue-500">{t("integrations.title")}</span>{" "}
            {t("integrations.titleRest")}
          </h2>
          <p className="text-gray-400 text-xs xs:text-sm sm:text-md md:text-xl mb-4 xs:mb-6 sm:mb-8 md:mb-12">
            {t("integrations.subtitle")}
          </p>

          {/* Company Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
            <div className="logo-hover opacity-0 animate-scale-in hover:scale-105 transition-transform duration-300">
              <img
                alt="Procore"
                className="h-5 xs:h-6 sm:h-10 md:h-12 lg:h-15 w-auto object-contain"
                src="/logo/procore.svg"
              />
            </div>
            <div className="logo-hover opacity-0 animate-card-1 hover:scale-105 transition-transform duration-300 ">
              <img
                alt="Oracle"
                className="h-5 xs:h-6 sm:h-10 md:h-12 lg:h-15 w-auto object-contain"
                src="/logo/oracle.svg"
              />
            </div>
            <div className="logo-hover opacity-0 animate-card-2 hover:scale-105 transition-transform duration-300 ">
              <img
                alt="Microsoft 365"
                className="h-5 xs:h-6 sm:h-10 md:h-12 lg:h-15 w-auto object-contain"
                src="/logo/microsoft.svg"
              />
            </div>
            <div className="logo-hover opacity-0 animate-card-3 hover:scale-105 transition-transform duration-300 ">
              <img
                alt="SAP"
                className="h-5 xs:h-6 sm:h-10 md:h-12 lg:h-15 w-auto object-contain"
                src="/logo/sap.svg"
              />
            </div>
            <div className="logo-hover opacity-0 animate-fade-in-delay-3 hover:scale-105 transition-transform duration-300 ">
              <img
                alt="Salesforce"
                className="h-5 xs:h-6 sm:h-10 md:h-12 lg:h-15 w-auto object-contain"
                src="/logo/salesforce.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
