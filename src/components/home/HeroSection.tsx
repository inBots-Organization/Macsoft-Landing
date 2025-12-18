import React from "react";
import { Button, Card, CardHeader, CardBody, Avatar } from "@heroui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/Hero Section.png')",
        minHeight: "100vh",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-between text-center w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-12 md:py-16 min-h-screen">
        {/* Top Content */}
        <div className="absolute top-0 flex flex-col items-center w-full max-w-4xl pt-4 sm:pt-8 md:pt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 text-white leading-tight animate-fade-in">
            {t("hero.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-2 sm:mb-3 md:mb-4 max-w-2xl leading-relaxed px-2 animate-fade-in-delay-1">
            {t("hero.description")}
          </p>

          {/* Fake Terminal UI */}
          <div className="w-full max-w-xl bg-[#0F0F16] border border-white/10 rounded-lg p-3 sm:p-4 md:p-5 mb-2 sm:mb-3 md:mb-4 font-mono text-xs sm:text-sm text-left shadow-2xl backdrop-blur-sm relative overflow-hidden group animate-fade-in-delay-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-glow" />
            <div className="flex gap-2 mb-2 sm:mb-3">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50" />
            </div>
            <p className="text-gray-500 mb-1 sm:mb-2 text-xs sm:text-sm">
              {t("hero.terminalComment")}
            </p>
            <p className="text-blue-400 text-xs sm:text-sm break-words">
              <span className="text-purple-400">➜</span>{" "}
              {t("hero.terminalText")}{" "}
              <span className="animate-pulse bg-blue-500/50 text-white px-1">
                {t("hero.terminalStatus")}
              </span>
            </p>
            <p className="text-red-400 mt-1 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {t("hero.terminalError")}
            </p>
          </div>

          <p className="text-blue-200 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl px-2 animate-fade-in-delay-3">
            {t("hero.tagline1")}{" "}
            <span className="text-blue-400 font-semibold">
              {t("hero.tagline2")}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 animate-fade-in-delay-3 w-full sm:w-auto px-4 sm:px-0">
            <Button
              as={Link}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 font-semibold px-6 sm:px-8 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              size="md"
              to="/book-demo"
            >
              {t("hero.bookDemo")} <FaArrowRight className="ml-2" />
            </Button>
            <Button
              as={Link}
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 font-semibold px-6 sm:px-8 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              size="md"
              to="/build-ai"
              variant="bordered"
            >
              {t("hero.buildAI")} <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

        {/* --- SOCIAL PROOF (TESTIMONIALS) --- */}
        <div className="absolute -bottom-10 flex flex-col items-center w-full max-w-6xl pb-6 sm:pb-10 md:pb-15">
          {/* Social Proof Heading */}
          <div className="text-center mb-2 sm:mb-4 md:mb-6 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
              {t("socialProof.title")}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              {t("socialProof.subtitle")}
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full max-w-6xl text-left px-4 sm:px-6">
            {/* Testimonial 1 */}
            <Card className="bg-white/5 border border-white/10 p-3 sm:p-4 backdrop-blur-md opacity-0 animate-card-1 hover:scale-105 hover:border-white/20 transition-all duration-300">
              <CardHeader className="flex gap-3 sm:gap-4 pb-2">
                <Avatar
                  className="sm:w-10 sm:h-10"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=sean"
                />
                <div className="flex flex-col">
                  <p className="text-sm sm:text-md font-semibold text-white">
                    {t("socialProof.testimonial1.name")}
                  </p>
                  <p className="text-xs sm:text-small text-gray-400">
                    {t("socialProof.testimonial1.title")}
                  </p>
                </div>
              </CardHeader>
              <CardBody className="pt-2">
                <p className="text-gray-300 text-xs sm:text-sm">
                  &quot;{t("socialProof.testimonial1.quote")}&quot;
                </p>
              </CardBody>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white/5 border border-white/10 p-3 sm:p-4 backdrop-blur-md opacity-0 animate-card-2 hover:scale-105 hover:border-white/20 transition-all duration-300">
              <CardHeader className="flex gap-3 sm:gap-4 pb-2">
                <Avatar
                  className="sm:w-10 sm:h-10"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=ryan"
                />
                <div className="flex flex-col">
                  <p className="text-sm sm:text-md font-semibold text-white">
                    {t("socialProof.testimonial2.name")}
                  </p>
                  <p className="text-xs sm:text-small text-gray-400">
                    {t("socialProof.testimonial2.title")}
                  </p>
                </div>
              </CardHeader>
              <CardBody className="pt-2">
                <p className="text-gray-300 text-xs sm:text-sm">
                  &quot;{t("socialProof.testimonial2.quote")}&quot;
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
