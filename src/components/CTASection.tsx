import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="cta" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-primary rounded-[40px] p-10 md:p-20 text-center text-primary-foreground relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            {t("cta.title1")} <br />{t("cta.title2")}
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-lg mx-auto">{t("cta.desc")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://t.me/fevianimals" target="_blank" className="btn-inverse">{t("cta.telegram")}</a>
            <a href="https://www.tiktok.com/@animals_need_attention" target="_blank" className="btn-outline-light">{t("cta.instagram")}</a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </motion.div>
    </section>
  );
};

export default CTASection;
