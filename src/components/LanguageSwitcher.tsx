import { useLanguage, Lang } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const toggle = () => setLang(lang === "en" ? "am" : "en");

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors"
      aria-label="Switch language"
    >
      <Globe size={16} />
      {lang === "en" ? "አማ" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
