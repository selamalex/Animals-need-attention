import g5 from "@/assets/gallery-1.png";
import g4 from "@/assets/gallery-2.png";
import g1 from "@/assets/gallery-3.png";
import g3 from "@/assets/gallery-4.png";
import g2 from "@/assets/gallery-5.png";
import g6 from "@/assets/gallery-6.png";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const images = [
  { src: g1, alt: "Kitten eating from a bowl", span: "col-span-1 row-span-1" },
  { src: g2, alt: "Volunteers feeding stray dogs", span: "col-span-1 md:col-span-2 row-span-1" },
  { src: g3, alt: "Rescued puppy held in hands", span: "col-span-1 row-span-1 md:row-span-2" },
  { src: g4, alt: "Sleeping cat on a blanket", span: "col-span-1 row-span-1" },
  { src: g5, alt: "Volunteer group with dogs", span: "col-span-1 row-span-2" },
  { src: g6, alt: "Dog looking through fence", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="section-container">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">{t("gallery.title")}</h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">{t("gallery.subtitle")}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`${img.span} rounded-3xl overflow-hidden`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
