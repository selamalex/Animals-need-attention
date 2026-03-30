import heroBgImg from "@/assets/Hero-bg-image.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[88vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 252, 249, 0.36), rgba(255, 252, 249, 0.62), rgba(255, 252, 249, 0.9)), url(${heroBgImg})`,
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(131,12,8,0.1),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_50%)]" />

      <div className="section-container min-h-[88vh] flex flex-col justify-center items-center text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95] tracking-tighter"
        >
          {t("hero.title1")} <br />
          <span className="italic text-primary">{t("hero.title2")}</span> {t("hero.title3")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-xl mb-10 mx-auto"
        >
          <p className="text-lg md:text-xl text-foreground">{t("hero.desc")}</p>
          <p className="text-lg md:text-xl text-[#830c08] mt-3">{t("hero.desc2")}</p>
          <p className="text-base md:text-lg text-foreground mt-2">{t("hero.desc3")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#cta" className="btn-primary">{t("hero.cta")}</a>
          <a href="#about" className="btn-secondary">{t("hero.learn")}</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
