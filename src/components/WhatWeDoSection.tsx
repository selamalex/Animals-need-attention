import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Megaphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WhatWeDoSection = () => {
  const { t } = useLanguage();

  const activities = [
    { icon: Heart, title: t("work.feeding.title"), desc: t("work.feeding.desc") },
    { icon: ShieldCheck, title: t("work.medical.title"), desc: t("work.medical.desc") },
    { icon: Users, title: t("work.rescue.title"), desc: t("work.rescue.desc") },
    { icon: Megaphone, title: t("work.awareness.title"), desc: t("work.awareness.desc") },
  ];

  return (
    <section id="work" className="mx-6 md:mx-12">
      <div className="bg-secondary/50 rounded-[48px] py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{t("work.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">{t("work.subtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-surface"
            >
              <item.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
