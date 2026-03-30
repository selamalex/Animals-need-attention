import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const ImpactSection = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t("impact.animals"), value: "1,240+" },
    { label: t("impact.volunteers"), value: "45" },
    { label: t("impact.rescues"), value: "312" },
    { label: t("impact.meals"), value: "200" },
  ];

  return (
    <section className="section-container text-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-4">{t("impact.title")}</h2>
      <p className="text-muted-foreground text-lg max-w-md mx-auto mb-16">{t("impact.subtitle")}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
