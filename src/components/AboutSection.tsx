import { motion } from "framer-motion";
import aboutImg from "@/assets/about-volunteer.jpg";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container grid md:grid-cols-2 gap-12 md:gap-16 items-center border-t border-border">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="aspect-[4/5] bg-secondary rounded-[32px] overflow-hidden"
      >
        <img src={aboutImg} alt="Volunteer caring for a stray cat" className="object-cover w-full h-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          {t("about.title1")} <br />{t("about.title2")}
        </h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("about.p1")}</p>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t("about.p2")}</p>
        <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
          <div>
            <p className="stat-value">100%</p>
            <p className="stat-label">{t("about.stat1")}</p>
          </div>
          <div>
            <p className="stat-value">24/7</p>
            <p className="stat-label">{t("about.stat2")}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
